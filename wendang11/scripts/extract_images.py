#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 .docx 中按"文档内真实出现顺序"提取所有图片到 Picture/ 文件夹，
命名为 1.JPG、2.JPG ... N.JPG。
规则：
  - 原本是 JPG/JPEG 的图片：直接复制原始字节（零损失、不重新编码）
  - 其他格式 (PNG/GIF/BMP/TIFF 等)：用 Pillow 以 quality=100、subsampling=0(4:4:4)
    转成 JPG，透明背景填白色（JPG 不支持透明）
用法: python3 extract_images.py <docx路径> <输出目录>
"""
import os
import re
import sys
import shutil
import zipfile
import tempfile
from xml.etree import ElementTree as ET

NS = {
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "p": "http://schemas.openxmlformats.org/package/2006/relationships",
}
R_NS = NS["r"]
W_NS = NS["w"]
P_NS = NS["p"]

# 主要部件按阅读顺序排列；其余部件按名字排后面
PRIORITY = ["document.xml", "header1.xml", "footer1.xml", "header2.xml",
            "footer2.xml", "header3.xml", "footer3.xml"]


def load_rels_map(zf, part_path):
    """part 的 rid -> target(media路径) 映射"""
    base = os.path.basename(part_path)
    rels = f"{os.path.dirname(part_path)}/_rels/{base}.rels"
    if rels not in zf.namelist():
        return {}
    root = ET.fromstring(zf.read(rels))
    m = {}
    for rel in root.findall(f".//{{{P_NS}}}Relationship"):
        rid = rel.get("Id")
        target = rel.get("Target", "")
        if target.startswith("/"):
            # 绝对路径（相对于包根）
            target = target.lstrip("/")
        else:
            # 相对 target，相对于部件所在目录
            target = os.path.normpath(os.path.join(os.path.dirname(part_path), target))
        target = target.replace("\\", "/")
        m[rid] = target
    return m


def ordered_parts(zf):
    """返回按阅读顺序排列的 xml 部件列表"""
    xml_parts = [p for p in zf.namelist()
                 if p.startswith("word/") and p.endswith(".xml") and "_rels/" not in p]
    def key(p):
        base = os.path.basename(p)
        if base in PRIORITY:
            return (0, PRIORITY.index(base), p)
        return (1, 0, p)
    return sorted(xml_parts, key=key)


def blip_targets_in_order(zf, part, rels):
    """部件内所有 r:embed/r:link 指向的 media 目标，按文档顺序"""
    root = ET.fromstring(zf.read(part))
    targets = []
    for el in root.iter():
        for attr in (f"{{{R_NS}}}embed", f"{{{R_NS}}}link"):
            rid = el.get(attr)
            if rid and rid in rels:
                t = rels[rid]
                if t not in targets:
                    targets.append(t)
    return targets


def _extract_main_frame(data):
    """从 MPO 字节中无损提取第一个完整 JPEG 流（SOI..EOI），扫描数据原样保留"""
    pos = 0
    frame = bytearray()
    while True:
        i = data.find(b"\xff", pos)
        if i == -1:
            break
        frame += data[pos:i]
        if i + 1 >= len(data):
            break
        m = data[i + 1]
        if m == 0x00:               # FF00 stuffed
            frame += b"\xff\x00"; pos = i + 2; continue
        if 0xD0 <= m <= 0xD7:       # RST
            frame += data[i:i + 2]; pos = i + 2; continue
        if m == 0xD9:               # EOI -> 主帧结束
            frame += b"\xff\xd9"; pos = i + 2; break
        if m == 0xFF:
            pos = i + 1; continue
        seg_len = int.from_bytes(data[i + 2:i + 4], "big")
        frame += data[i:i + 2 + seg_len]
        pos = i + 2 + seg_len
    return bytes(frame)


def _strip_mpf_segments(frame):
    """删除 APP2(MPF) 标记段（保留 ICC 等其他 APP 段），使文件成为标准 JPEG"""
    pos = 0
    out = bytearray()
    while pos < len(frame) - 1:
        if frame[pos] != 0xFF:
            out += frame[pos:pos + 1]; pos += 1; continue
        m = frame[pos + 1]
        if m == 0xD8:
            out += b"\xff\xd8"; pos += 2; continue
        if m == 0xD9:
            out += b"\xff\xd9"; pos += 2; break
        if m == 0x00 or m == 0xFF:
            out += frame[pos:pos + 2]; pos += 2; continue
        if 0xD0 <= m <= 0xD7:
            out += frame[pos:pos + 2]; pos += 2; continue
        seg_len = int.from_bytes(frame[pos + 2:pos + 4], "big")
        if m == 0xE2 and frame[pos + 4:pos + 7] == b"MPF":
            pos += 2 + seg_len
            continue
        out += frame[pos:pos + 2 + seg_len]
        pos += 2 + seg_len
    return bytes(out)


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    docx_path = sys.argv[1]
    out_dir = sys.argv[2]

    if not os.path.isfile(docx_path):
        print(f"错误：找不到文件 {docx_path}")
        sys.exit(1)

    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)

    tmp = tempfile.mkdtemp(prefix="docx_pic_")
    try:
        with zipfile.ZipFile(docx_path) as zf:
            media_names = []
            for part in ordered_parts(zf):
                rels = load_rels_map(zf, part)
                media_names.extend(blip_targets_in_order(zf, part, rels))

            # 兜底：如果没解析到任何图片引用，退回按文件名排序
            if not media_names:
                media_files = [n for n in zf.namelist() if n.startswith("word/media/")]
                if media_files:
                    def num_key(n):
                        m = re.search(r"\d+", os.path.basename(n))
                        return int(m.group(0)) if m else 0
                    media_names = sorted(media_files, key=num_key)
                else:
                    print("错误：文档里没有找到图片 (word/media)")
                    sys.exit(1)

            from PIL import Image
            n = 0
            for i, media in enumerate(media_names):
                if media not in zf.namelist():
                    print(f"  跳过（引用存在但文件缺失）: {media}")
                    continue
                n += 1
                data = zf.read(media)
                ext = os.path.splitext(media)[1].lower()
                out_path = os.path.join(out_dir, f"{n}.JPG")
                if ext in (".jpg", ".jpeg"):
                    # 原本就是 JPG：先检查是否为 MPO（多帧）——若是，无损提取主帧并去掉
                    # MPF 标记，得到标准单帧 JPEG；否则原样字节复制（零损失）
                    from PIL import Image as _Img
                    _io = __import__("io")
                    probe = _Img.open(_io.BytesIO(data))
                    if getattr(probe, "format", "") == "MPO":
                        probe.close()
                        main_frame = _extract_main_frame(data)
                        data = _strip_mpf_segments(main_frame)
                        src = "MPO → 标准JPEG(无损)"
                    else:
                        probe.close()
                        src = "原样复制"
                    with open(out_path, "wb") as f:
                        f.write(data)
                else:
                    # 其他格式：quality=100, subsampling=0(4:4:4) 转 JPG
                    with tempfile.NamedTemporaryFile(suffix=ext, delete=False) as tf:
                        tf.write(data)
                        tname = tf.name
                    try:
                        im = Image.open(tname)
                        im = im.convert("RGBA")
                        bg = Image.new("RGB", im.size, (255, 255, 255))
                        bg.paste(im, mask=im.split()[3])
                        bg.save(out_path, "JPEG", quality=100, subsampling=0)
                    finally:
                        os.unlink(tname)
                    src = f"{ext[1:].upper()} → JPG(100)"
                print(f"  {n}.JPG  <-  {media}  [{src}]")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    print(f"\n完成！共 {n} 张图片，已保存到: {os.path.abspath(out_dir)}")


if __name__ == "__main__":
    main()
