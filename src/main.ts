import {MarkdownView, Notice, Plugin} from 'obsidian';

export default class CursorPositionClipboardPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'copy-cursor-position',
			name: 'Copy cursor position to clipboard',
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view?.file) return false;

				if (!checking) {
					const editor = view.editor;
					const filePath = view.file.path;
					const selection = editor.getSelection();

					let text: string;
					if (selection) {
						const fromLine = editor.getCursor('from').line + 1;
						const toLine = editor.getCursor('to').line + 1;
						text = `${filePath}:\nLines ${fromLine}-${toLine}:\n\`\`\`${selection}\`\`\``;
					} else {
						const lineNumber = editor.getCursor().line + 1;
						text = `${filePath}:Lines ${lineNumber}`;
					}

					navigator.clipboard.writeText(text).then(() => {
						new Notice(`Copied: ${text}`);
					});
				}
				return true;
			}
		});
	}
}
