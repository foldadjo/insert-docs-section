import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "insert-doc-section" is now active!');

    let disposable = vscode.commands.registerCommand('extension.insertDocSection', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const position = selection.active;

            const docSection = `// -----------------------------------------------------------------------------------------------------\n` +
                `// @ \${1|Method,Input,Output,LifecycleHook,Property,Constructor|}\n` +
                `// -----------------------------------------------------------------------------------------------------\n`;

            editor.edit(editBuilder => {
                editBuilder.insert(position, docSection);
            }).then(() => {
                // Once inserted, move the cursor to the placeholder for user input.
                const newPosition = new vscode.Position(position.line + 1, position.character + 5); // Move cursor slightly after "// @"
                editor.selection = new vscode.Selection(newPosition, newPosition);
                vscode.commands.executeCommand('editor.action.triggerSuggest');  // Trigger suggestion automatically after inserting the section.
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
