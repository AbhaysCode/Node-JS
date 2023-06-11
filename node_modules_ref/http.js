const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'index.html'),(err, data)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{"Content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     });
    // }
    // else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'about.html'),(err, data)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{"Content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     });
    // }else if(req.url === '/api/data'){
    //     const users = [
    //         {
    //             color: "red",
    //             value: "#f00"
    //         },
    //         {
    //             color: "green",
    //             value: "#0f0"
    //         },
    //         {
    //             color: "blue",
    //             value: "#00f"
    //         },
    //         {
    //             color: "cyan",
    //             value: "#0ff"
    //         },
    //         {
    //             color: "magenta",
    //             value: "#f0f"
    //         },
    //         {
    //             color: "yellow",
    //             value: "#ff0"
    //         },
    //         {
    //             color: "black",
    //             value: "#000"
    //         }
    //     ];
    //     res.writeHead(200,{"Content-Type": "application/json"});
    //     res.end(JSON.stringify(users));
    // }
    // Building Dynamic File Path
    let filePath = path.join(__dirname,req.url === '/'?"index.html":req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
      }
    fs.readFile(filePath,(err,data)=>{
        if(err?.code == 'ENOENT'){
            fs.readFile(path.join(__dirname,'404.html'),(err,data)=>{ 
                if(err) throw err;
                res.writeHead(200,{"Content-Type": "text/html"});
                res.end(data,'utf-8');
            })
        }
        res.end(data);
    })
});

server.listen(3000,()=>{
    console.log("Listening on Port 3000")
});
