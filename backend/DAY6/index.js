const fs = require('fs');

const [cmd, task] = process.argv.slice(2);

const createFolder = (folderName) => {
    fs.mkdir(folderName, () => {
        console.log("new folder created");
    })
}

const deleteFolder = (folderName) => {
    fs.rmdir(folderName, () => {
        console.log("folder deleted");
    });
}

const createFile = (task = "") => {
    fs.writeFile("./tha.txt", `\n ${task}`, () => {
        console.log("new file created");
    });
}


const addTask = (task) => {
    fs.exists("./tha.txt", (exists) => {
        if (exists) {
            fs.appendFile("./tha.txt", `\n${task}`, () => {
                console.log("added");
            })
        }
        else createFile(task);
    })
    
    
}

const getTask = () => {
    fs.readFile("./tha.txt", "utf-8", (err, data) => {
        if (err) console.log(err);
        console.log(data);
    });
    
}

const clearFile = () => {
    fs.unlink("./tha.txt", () => {
        console.log("file successfully deleted")
    });
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