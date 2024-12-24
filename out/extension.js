"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.removeDartErrorsAndWarnings', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const updatedText = removeDartErrorsAndWarnings(document, 'all');
            editor.edit((editBuilder) => {
                const start = new vscode.Position(0, 0);
                const end = new vscode.Position(document.lineCount + 1, 0);
                const range = new vscode.Range(start, end);
                editBuilder.replace(range, updatedText);
            });
        }
    });
    const disposable2 = vscode.commands.registerCommand('extension.removeDartOnlyErrors', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const updatedText = removeDartErrorsAndWarnings(document, 'error');
            editor.edit((editBuilder) => {
                const start = new vscode.Position(0, 0);
                const end = new vscode.Position(document.lineCount + 1, 0);
                const range = new vscode.Range(start, end);
                editBuilder.replace(range, updatedText);
            });
        }
    });
    const disposable3 = vscode.commands.registerCommand('extension.removeDartOnlyWarnings', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const updatedText = removeDartErrorsAndWarnings(document, 'warning');
            editor.edit((editBuilder) => {
                const start = new vscode.Position(0, 0);
                const end = new vscode.Position(document.lineCount + 1, 0);
                const range = new vscode.Range(start, end);
                editBuilder.replace(range, updatedText);
            });
        }
    });
    context.subscriptions.push(...[disposable, disposable2, disposable3]);
}
exports.activate = activate;
function removeDartErrorsAndWarnings(document, type) {
    let updatedText = '';
    for (let line = 0; line < document.lineCount; line++) {
        const lineText = document.lineAt(line).text;
        const diagnostics = vscode.languages.getDiagnostics(document.uri);
        const isImportExportPartPartOf = /^(import|export|part|part of)\s/.test(lineText.trim());
        const isVariableDeclaration = /^\s*(const|final|var|late)\s+[\w<>,\s]+\s+\w*\s*(=.*)?\s*;$/.test(lineText.trim());
        const lineHasError = diagnostics.some((diagnostic) => diagnostic.range.start.line === line && diagnostic.severity === vscode.DiagnosticSeverity.Error);
        const lineHasWarning = diagnostics.some((diagnostic) => diagnostic.range.start.line === line && diagnostic.severity === vscode.DiagnosticSeverity.Warning);
        if ((isImportExportPartPartOf || isVariableDeclaration) && lineHasError && (type === 'error' || type === 'all'))
            continue;
        if ((isImportExportPartPartOf || isVariableDeclaration) && lineHasWarning && (type === 'warning' || type === 'all'))
            continue;
        updatedText += lineText;
        if (line < document.lineCount - 1) {
            updatedText += '\n';
        }
    }
    return updatedText;
}
