const fs = require('fs');

// console.log(process.argv);

const [cmd, task] = process.argv.slice(2);

const createFolder = (folderName) => {
    fs.mkdirSync(folderName);
}

const deleteFolder = (folderName) => {
    fs.rmdirSync(folderName);
}

const createFile = (task = "") => {
    fs.writeFileSync("./tha.txt", `\n ${task}`);
}


const addTask = (task) => {
    if (fs.existsSync("./tha.txt")) {
        fs.appendFileSync("./tha.txt", `\n${task}`);
    }
    else createFile(task);
}

const getTask = () => {
    const data = fs.readFileSync("./tha.txt", "utf-8");
    console.log(data);
}

const clearFile = () => {
    fs.unlinkSync("./tha.txt");
}

const wrongCmd = () => {
    console.log("Please enter valid command. help");

}

const help = () => {
  console.log(`
1. create-folder <foldername>
2. delete-folder <foldername>
3. create-file <datatobeadded>
4. add <datatobeadded>
5. get
6. clear-file`);
};

const App = () => {
    if (cmd === "create-folder") createFolder(task);
    else if (cmd === "delete-folder") deleteFolder(task);
    else if (cmd === "create-file") createFile(task);
    else if (cmd === "add") addTask(task);
    else if (cmd === "get") getTask();
    else if (cmd === "clear-file") clearFile();
    else if (cmd === "help") help();
    else wrongCmd();
}

App();
