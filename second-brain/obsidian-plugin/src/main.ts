import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, requestUrl, TFile } from "obsidian";

interface Settings { backendUrl: string; inboxFolder: string; }
const DEFAULT_SETTINGS: Settings = { backendUrl: "http://127.0.0.1:8787", inboxFolder: "99-Inbox" };

interface SearchRow { id: number; path: string; repo?: string; branch?: string; commit_sha?: string; start_line: number; end_line: number; content: string; rerank_score?: number; }
interface ChatResult { answer: string; citations: SearchRow[]; abstained: boolean; }

class AskModal extends Modal {
  constructor(app: App, private readonly plugin: SCZSecondBrainPlugin) { super(app); }
  onOpen(): void {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "问 SCZ Second Brain" });
    const input = contentEl.createEl("textarea", { attr: { rows: "5", placeholder: "只使用有来源的知识回答……" } });
    input.style.width = "100%";
    const button = contentEl.createEl("button", { text: "检索并回答" });
    button.onclick = async () => {
      button.disabled = true;
      try { const result = await this.plugin.chat(input.value); this.renderResult(result); }
      catch (error) { new Notice(`Second Brain 请求失败：${String(error)}`); }
      finally { button.disabled = false; }
    };
  }
  renderResult(result: ChatResult): void {
    const box = this.contentEl.createDiv({ cls: "scz-second-brain-result" });
    box.createEl("h3", { text: result.abstained ? "没有足够依据" : "回答" });
    box.createEl("pre", { text: result.answer });
    box.createEl("h4", { text: "来源" });
    for (const citation of result.citations) {
      box.createEl("div", { text: `${citation.repo || citation.path} · ${citation.branch || "local"} · ${citation.path}:${citation.start_line}-${citation.end_line}` });
    }
    const save = box.createEl("button", { text: "保存为 Inbox 草稿" });
    save.onclick = async () => {
      await this.plugin.saveDraft(result);
      new Notice("已保存到 Inbox；这不是长期记忆，需人工整理。");
    };
  }
}

export default class SCZSecondBrainPlugin extends Plugin {
  settings!: Settings;
  async onload(): Promise<void> {
    await this.loadSettings();
    this.addCommand({ id: "ask-second-brain", name: "Ask SCZ Second Brain", callback: () => new AskModal(this.app, this).open() });
    this.addCommand({ id: "search-current-note", name: "Search Second Brain with current note", checkCallback: (checking) => {
      const file = this.app.workspace.getActiveFile();
      if (!file) return false;
      if (!checking) void this.searchCurrentNote(file);
      return true;
    }});
    this.addSettingTab(new SCZSettingsTab(this.app, this));
    this.addRibbonIcon("brain", "Ask SCZ Second Brain", () => new AskModal(this.app, this).open());
  }
  async loadSettings(): Promise<void> { this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()); }
  async saveSettings(): Promise<void> { await this.saveData(this.settings); }
  async chat(message: string): Promise<ChatResult> {
    const response = await requestUrl({ url: `${this.settings.backendUrl.replace(/\/$/, "")}/chat`, method: "POST", body: JSON.stringify({ message, limit: 8 }), headers: { "Content-Type": "application/json" } });
    return response.json as ChatResult;
  }
  async searchCurrentNote(file: TFile): Promise<void> {
    const content = await this.app.vault.read(file);
    const response = await requestUrl({ url: `${this.settings.backendUrl.replace(/\/$/, "")}/search`, method: "POST", body: JSON.stringify({ q: content.slice(0, 4000), limit: 8 }), headers: { "Content-Type": "application/json" } });
    const result = response.json as { results: SearchRow[] };
    new Notice(`找到 ${result.results.length} 条相关来源；使用命令“Ask SCZ Second Brain”查看完整回答。`);
  }
  async saveDraft(result: ChatResult): Promise<void> {
    const date = new Date().toISOString().replace(/[:.]/g, "-");
    const folder = this.settings.inboxFolder.replace(/^\/+|\/+$/g, "");
    if (folder && !this.app.vault.getAbstractFileByPath(folder)) await this.app.vault.createFolder(folder);
    const citations = result.citations.map(c => `- ${c.repo || c.path} · ${c.branch || "local"} · ${c.path}:${c.start_line}-${c.end_line}`).join("\n");
    const body = `---\ntype: ai-draft\nstatus: pending-review\ncreated: ${new Date().toISOString()}\n---\n\n# AI 草稿 ${date}\n\n## 回答\n\n${result.answer}\n\n## 来源\n\n${citations || "- 无"}\n\n> 这是候选草稿，不是已确认事实。\n`;
    await this.app.vault.create(`${folder ? `${folder}/` : ""}AI-${date}.md`, body);
  }
}

class SCZSettingsTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: SCZSecondBrainPlugin) { super(app, plugin); }
  display(): void {
    const { containerEl } = this; containerEl.empty();
    new Setting(containerEl).setName("Local backend URL").setDesc("The Python backend must be listening locally.").addText(text => text.setValue(this.plugin.settings.backendUrl).onChange(async value => { this.plugin.settings.backendUrl = value; await this.plugin.saveSettings(); }));
    new Setting(containerEl).setName("Inbox folder").setDesc("Drafts are always written here, never to long-term memory.").addText(text => text.setValue(this.plugin.settings.inboxFolder).onChange(async value => { this.plugin.settings.inboxFolder = value; await this.plugin.saveSettings(); }));
  }
}
