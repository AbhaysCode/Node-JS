const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, "test"),{},(err)=>{
//     if (err) throw err;
//     console.log("Folder Created", path.join(__dirname, "test"));
// })

fs.writeFile(path.join(__dirname, "test", "notes.txt"),"Learning fileSystem Module",(err)=>{
    if (err) throw err;
    console.log("File is Written ....");
    fs.appendFile(path.join(__dirname, "test", "notes.txt")," Appending File",(err)=>{
        if (err) throw err;
        console.log("File is Appended ....");
    })
})

// Read File
// fs.readFile(path.join(__dirname, "test","notes.txt"),'utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log("data is " + data);
// })

// Renaming File
// fs.rename(path.join(__dirname, "test","notes.txt"),path.join(__dirname, "test","Status.txt"),(err)=>{
//     if (err) throw err;
//     console.log("File Renamed to status.txt");
// })
