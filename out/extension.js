"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "first-extension-vscode" is now active!');
    let holaMundo = vscode.commands.registerCommand("first-extension-vscode.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World from first-extension-vscode!");
    });
    let adios = vscode.commands.registerCommand("first-extension-vscode.goodbye", () => {
        vscode.window.showInformationMessage("Adios mundo");
    });
    context.subscriptions.push(holaMundo);
    context.subscriptions.push(adios);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map