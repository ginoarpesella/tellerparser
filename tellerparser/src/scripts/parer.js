export function getCommands(txt) {
    const txtSplit = txt.split(/\n/);
    let cmds = [];
    txtSplit.forEach(element => {
        if (element.length > 1) {
            cmds.push(element);
        }
    });
    return cmds;
}