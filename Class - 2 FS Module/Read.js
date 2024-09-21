import fs from 'fs'

/* let content = fs.readFileSync('Three.txt','utf-8')
console.log(content); */

fs.readFile('Read.txt','utf-8',(err,data) => {
    if(err) throw err

    console.log(data);
    
})