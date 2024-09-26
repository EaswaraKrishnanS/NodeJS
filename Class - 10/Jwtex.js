import jwt from 'jsonwebtoken'

let user_payload = {
    "uname" : "Aathithya",
    "password" : "Sri"
}

let token = jwt.sign(user_payload,"Deva")
console.log(token);

let user_data = jwt.verify(token,"Deva")
console.log(user_data);

