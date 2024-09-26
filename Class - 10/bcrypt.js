import bcrypt from 'bcrypt'

let user = {
    email : "easwarakrishnan0317@gmail.com",
    credit_card : "1234567890",
    password : "sri"
}

let salt = bcrypt.genSaltSync(10)
let pw = bcrypt.hashSync(user.password,salt)
let new_cc = bcrypt.hashSync(user.credit_card,salt)
console.log(pw);
console.log(new_cc);
