import express from "express"
import fs from "fs"

let routes = express.Router()
routes.use(express.json());

routes.post("/create",async (req,resp) => {
    let emp = req.body
    let employees = await getEmployee()
    let emp_obj = employees.find((emp) => {
        emp.eid == employees.eid
    })

    if(emp_obj){
        return resp.json({"msg" : "Employee Already Exist"})
    }

    employees.push(emp)
    saveEmployees(employees)
    return resp.json({"msg" : "New Employee Are Ctreated"})
})

routes.get("/read", async (req,resp) => {
    let employees = await getEmployee()
    return resp.json(employees)
})
routes.put("/update",(req,resp) => {
    let eid = req.params.id
})
routes.delete("/del",(req,resp) => {
    let eid = req.params.id
})

let saveEmployees = (employees) => {
    fs.writeFileSync("data.json",JSON.stringify(employees))
}

let getEmployee = () => {
    let emp_data = fs.readFileSync("data.json","utf-8")
    return JSON.parse(emp_data)
}

export default routes