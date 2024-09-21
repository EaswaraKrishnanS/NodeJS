import fs from 'fs';

//Syncronous Method

let data = fs.readFileSync('Read.txt','utf-8')
fs.writeFileSync('Read_And_Write.txt',data)
console.log('New File Has Been Created');
