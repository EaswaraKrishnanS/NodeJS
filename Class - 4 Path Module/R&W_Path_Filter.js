import fs from 'fs'
import path from 'path'

let datafile = path.join(process.cwd(),"Static","Data","Data.json")
console.log(datafile);
let malefile = path.join(process.cwd(),"Static","Male","Male.json")
let femalefile = path.join(process.cwd(),"Static","Female","Female.json")

fs.readFile(datafile,'utf-8',(err,data) => {
    if (err) throw err
    let users = JSON.parse(data)

let male_users = users.filter((users) => {
    return users.gender === "Male"

})
let female_users = users.filter((users) => {
    return users.gender === "Female"
})

fs.writeFile(malefile,JSON.stringify(male_users),(err) => {
    if (err) throw err
    console.log('Male File Are Created');
    
})
fs.writeFile(femalefile,JSON.stringify(female_users),(err) => {
    if (err) throw err
    console.log('Female File Are Created');
    
})

})