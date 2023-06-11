const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    const ClientIp = req.connection.remoteAddress || req.socket.remoteAddress;
    console.log("Url is ",req.url);
    console.log("Method is ",req.method);
    console.log("Header is ",req.headers);
    console.log("Ip Address is",ClientIp);
    fs.readFile(path.join(__dirname,'public','index.html'),(err, data)=>{
        if(err) throw err;
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
})

server.listen(3000,()=>{
    console.log("Listening on Port 3000");
})