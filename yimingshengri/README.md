# 🚀 星际指令 - 孙鸣泽9岁生日网页

一个给9岁弟弟的生日互动网页，伪装成"星际加密任务"。

## 📋 项目结构

```
yiming0602/
├── index.html              # 主HTML文件
├── css/
│   ├── variables.css       # CSS变量
│   ├── base.css            # 基础样式
│   ├── layout.css          # 布局样式
│   ├── components.css      # 组件样式
│   ├── animations.css      # 动画定义
│   └── scenes.css          # 场景样式
├── js/
│   ├── config.js           # 配置
│   ├── utils.js            # 工具函数
│   ├── state.js            # 状态管理
│   ├── typewriter.js       # 打字机效果
│   ├── canvas-bg.js        # 背景画布
│   ├── canvas-fx.js        # 特效画布
│   ├── scene-*.js          # 各场景逻辑
│   └── main.js             # 主入口
├── assets/
│   ├── avatar.jpg          # 头像（需自行添加）
│   ├── blessing.jpg        # 祝福图（需自行添加）
│   └── favicon.ico         # 网站图标（需自行添加）
└── README.md
```

## 🎮 游戏流程

1. **密码验证** - 输入生日密码 0602
2. **DNA扫描** - 按压屏幕进行身份验证
3. **任务简报** - 接收哥哥发来的任务
4. **五关挑战**
   - Level 1: 星图解密
   - Level 2: 宇宙知识
   - 小游戏: 能量收集
   - Level 3: 代码连线
   - Level 4: 脑筋急转弯
   - Level 5: 终极挑战
5. **勋章合并** - 五个勋章合成星际探险家认证
6. **隐藏关卡** - 可选的秘密挑战
7. **证书颁发** - 星际探险家认证证书
8. **生日蛋糕** - 吹灭9根蜡烛
9. **烟花表演** - 文字烟花"生日快乐"
10. **最终通讯** - 哥哥的话
11. **愿望兑换** - 写下生日愿望

## 🎁 隐藏彩蛋

- 彩蛋1: 任务简报页连点头像5次
- 彩蛋2: 闯关时长按"信号强度"3秒
- 彩蛋3: 证书页点"颁发机构"
- 彩蛋4: 最终通讯页连点"9岁"3次
- 彩蛋5: 最终通讯页最底部小字（愿望卡入口）

## 🚀 部署

### Cloudflare Pages 部署

1. 将代码推送到 GitHub 公开仓库：
```bash
git init
git add .
git commit -m "🚀 init"
git remote add origin https://github.com/你的用户名/yiming0602.git
git push -u origin main
```

2. 登录 Cloudflare Dashboard → Pages → Create a project → Connect to Git

3. 配置：
   - Framework preset: None
   - Build command: (留空)
   - Build output directory: /

4. 部署后访问: https://yiming0602.pages.dev

## ⚙️ 技术栈

- 纯静态HTML/CSS/JavaScript
- 无框架，无构建工具
- 字体: Orbitron, Share Tech Mono, Rajdhani, ZCOOL QingKe HuangYou
- Canvas 背景动画 (30fps)
- Canvas 特效层 (60fps)
- localStorage 进度保存

## 📱 兼容性

- iOS Safari 14+
- Android Chrome 90+
- 桌面 Chrome/Edge 最新版
- 主要针对手机竖屏优化

## 🔗 外部依赖

- Google Fonts (字体)
- Worker API: https://yiming-wish.tppvpnni.workers.dev/send (愿望发送)

---

Made with ❤️ for 乙鸣
