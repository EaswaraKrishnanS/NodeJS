import fs from 'fs';

//Asyncronous Method
fs.readFile('Read.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);

    fs.writeFile('Read_And_Write.txt', data, 'utf-8', (err) => {
        if (err) throw err;
        console.log('New File Has Been Written');
    });
});


