import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "first-extension-vscode" is now active!'
  );

  let holaMundo = vscode.commands.registerCommand(
    "first-extension-vscode.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from first-extension-vscode!"
      );
    }
  );

  let adios = vscode.commands.registerCommand(
    "first-extension-vscode.goodbye",
    () => {
      vscode.window.showInformationMessage("Adios mundo");
    }
  );

  context.subscriptions.push(holaMundo);
  context.subscriptions.push(adios);

}
export function deactivate() {}
