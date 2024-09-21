import express from 'express'

let router = express.Router()

router.get('/',(resp,req) => {
    resp.send("User Root Request")
})

router.post('/add',(resp,req) => {
    return resp.json({"msg" : "New User"})
})

router.get('/read',(resp,req) => {

})

export default router