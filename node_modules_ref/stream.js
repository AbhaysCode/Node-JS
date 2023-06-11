const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname,'Text','Cricbuzz.txt'),'utf-8');
const writeStream = fs.createWriteStream(path.join(__dirname,'Text','Updt.txt'),'utf-8');

// readStream.on('data',(chunk)=>{
//     console.log('-----NEW CHUNK-----');
//     console.log(chunk);
//     writeStream.write(' \n --------------------------------------------- \n');
//     writeStream.write(chunk);
// })
// writeStream.on('finish',()=>{
//     console.log("Score is Updated !");
// })
readStream.pipe(writeStream);



