import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.insertDoc', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      editor.insertSnippet(
        new vscode.SnippetString(
          `//======================================================\n` +
          `// @ \${1|Method,Input,Output,LifecycleHook,Property|}\n` +
          `//======================================================\n`
        )
      );
    }
  });
  console.log("Extension is activated");
  context.subscriptions.push(disposable);
}

export function deactivate() {}