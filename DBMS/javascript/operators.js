// learning about javascript operators
// addition operator
const add = 3 + 3 

// substraction operator
let sub = 4-2

// division operator
var div = 2/2

// module operator
const mod = 5 % 3

console.log(add)
console.log(sub)
console.log(div)
console.log(mod)

// assignment operator
// =
const number = 2
const identifier = 3

// equals
// ==
let result = number == identifier
console.log(result)

// strict equality
// ===
let output = number === identifier
console.log(output)

// not equals
// !
let a = !result
//  true
console.log(a)

// Does not equal
// !==
const password = "adedokun"
const cPassword = "adedokun123!"

if(password == cPassword){
    console.log("welcome")
    // false
}

if(!(password === cPassword)){
    console.log("hello world")
    // true
}

if(password !== cPassword){
    console.log("ur face show, ur face shine")
    // true
}