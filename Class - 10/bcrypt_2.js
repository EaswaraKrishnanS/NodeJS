import bcrypt from 'bcrypt'

let user = {
    email : "easwarakrishnan0317@gmail.com",
    credit_card : "1234567890",
    password : "sri"
}

let salt = bcrypt.genSaltSync(10)
let pw = bcrypt.hashSync(user.password,salt)
console.log(pw);

let flag = bcrypt.compare()

