import express from "express"

let router = express.Router()

router.post("/add",(req,resp) => {
    return resp.json({"msg" : "POST Request"})
})

router.get("/read",(req,resp) => {
    return resp.json({"msg" : "GET Request"})
})

router.put("/update",(req,resp) => {
    return resp.json({"msg" : "PUT Request"})
})

router.delete("/del",(req,resp) => {
    return resp.json({"msg" : "DELETE Request"})
})

export default router