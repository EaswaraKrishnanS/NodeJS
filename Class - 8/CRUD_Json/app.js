import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import apiRouter from "./routes/apiRouter.js"
let app = express()

app.use(morgan("tiny"))
dotenv.config({"path" : "./config/dev.config"})

let PORT = process.env.PORT
let HOST = process.env.HOST

app.get("/",(req,resp) => {
    resp.json({"msg" : "Root Request"})
})

app.use("/api",apiRouter)

app.listen(PORT,HOST,(err) => {
    if (err) throw err
    console.log(`Server Is Running on .....http://${HOST}:${PORT}`);
    
})