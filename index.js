const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    const ClientIp =  req.headers['x-forwarded-for']|| req.headers['x-real-ip']  || req.socket.remoteAddress;
    console.log("Url is ",req.url);
    console.log("Method is ",req.method);
    console.log("Header is ",req.headers);
    console.log("Ip Address is",ClientIp);
    const data = {
        "Headers": req.headers,
        "Ip Address":ClientIp
    };
    res.writeHead(200,{"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
})

server.listen(3000,()=>{
    console.log("Listening on Port 3000");
})