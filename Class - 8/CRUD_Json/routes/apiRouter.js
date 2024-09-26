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
routes.put("/update", async (req,resp) => {
    let emp_id = req.params.id
    let Employee = req.body
    let employees = await getEmployee()
    console.log(emp_id);
    console.log(Employee);
    console.log(employees);

    let emp_data = employees.find((emp) => {
        return emp.eid  == emp_id
    })

    console.log(emp_data);
    if(!emp_data){
        return resp.status(401).json({"msg" : "Employee Not Exits"})
    }

    let remaining_employees = employees.filter((emp) => {
        return emp.eid != emp_id
    })
    remaining_employees.unshift(Employee)
    console.log(remaining_employees);
    saveEmployees(remaining_employees)
    return resp.status(200).json({"msg" : "Employee Updated Succesfully"})
    
    
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