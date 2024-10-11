import inquirer from "inquirer";
function counter(text) {
    let freeWhiteSpace = text.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCOunt(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write your text here",
            name: "text",
        });
        console.log(counter(res.text));
    } while (true);
}
startWordCOunt(counter);
