import http from 'http'
import fs from 'fs'
import path from 'path'


let Server = http.createServer((req,resp) => {
     let url = req.url
    console.log(url)


    if(req.url ==="/" || req.url ==="/Index"){
        fs.readFile(path.join(process.cwd(),"views","Index.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/About"){
        fs.readFile(path.join(process.cwd(),"Views","About.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }


    if(req.url==="/Services"){
        fs.readFile(path.join(process.cwd(),"Views","Services.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }

    
    if(req.url==="/Contact"){
        fs.readFile(path.join(process.cwd(),"Views","Contact.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
})


Server.listen(8200, '127.0.0.1', (err) => {
    if (err) throw err;
    console.log("Server Running..........");
});

