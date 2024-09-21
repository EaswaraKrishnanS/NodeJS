import fs from 'fs'; // --> (ES6)
// const fs = require('fs'); --> (ES5)
fs.readFile('MOCK_DATA .json', 'utf-8', (err, data) => {
    if (err) throw err;

    let users = JSON.parse(data)
    console.log(typeof data);
    console.log(typeof users);


    let male_Users = []
    let female_Users = []

    male_Users = users.filter(users => users.gender == 'Male')
    female_Users = users.filter(users => users.gender == 'Female')
    
    console.log('Male Users : ',male_Users.length);
    console.log('Female Users : ',female_Users.length);
    
    fs.writeFile('Male.json',JSON.stringify(male_Users),(err) => {
        if (err) throw err;
        console.log('Male Users Are Separated');
        
    })
    fs.writeFile('Female.json',JSON.stringify(female_Users),(err) => {
        if (err) throw err;
        console.log('Female Users Are Separated');
    })
    
});
