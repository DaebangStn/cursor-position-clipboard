# Cursor Position Clipboard

An [Obsidian](https://obsidian.md) plugin that copies the current cursor position (or selection) to the clipboard.

## Usage

Open the command palette and run **Copy cursor position to clipboard**.

### No selection

Copies the file path and line number:

```
12_CP/Contraction parameter.md:Lines 26
```

### With selection

Copies the file path, line range, and selected text in a fenced code block:

```
viewer/test_viewer_base_main.cpp:
Lines 11-15:
```class TestViewerApp : public ViewerAppBase
{
public:
    TestViewerApp() : ViewerAppBase("ViewerAppBase Test", 1280, 720) {
```
```

## Installation

Clone this repo into your vault's plugin directory:

```bash
cd <vault>/.obsidian/plugins
git clone https://github.com/DaebangStn/cursor-position-clipboard.git
```

Then enable **Cursor Position Clipboard** in Obsidian settings under Community Plugins.

## Development

```bash
npm install
npm run build
```
