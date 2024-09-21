import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import Api_router from "./Router/Api_router.js"

let app = express()

app.use(morgan("tiny"))
dotenv.config({"path" : "./config/dev.config"})
let PORT = process.env.PORT
let HOST = process.env.HOST
app.get("/",(req,resp) => {
    resp.send("Root Request")
})

app.use("/",Api_router);

app.listen(PORT,HOST,(err) => {
    if (err) throw err
    console.log(`Server Is Running On ...... http://${HOST}:${PORT}/`);
    
})
