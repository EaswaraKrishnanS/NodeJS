import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from "path"

let app = express()
//load configuration values
app.use(morgan('tiny'))
dotenv.config({path:"./config/dev.config"})
let port = process.env.PORT
let hostname = process.env.HOST

/*
    API URL: http://127.0.0.1:8030/
*/
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"Views","index.html"))
})

/*
    API URL: http://127.0.0.1:8030/about
*/
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"Views","about.html"))
})
app.listen(port,hostname,(err)=>{
    if(err) throw err 
    console.log(`Server Running on... http://${hostname}:${port}/`)
});