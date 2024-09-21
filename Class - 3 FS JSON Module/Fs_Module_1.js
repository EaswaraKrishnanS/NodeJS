import fs from 'fs';

fs.readFile('Data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(typeof data);

    fs.writeFile('emp.json', data, (err) => {
        if (err) throw err;
        console.log('New File Has Been Created');
    });
});
