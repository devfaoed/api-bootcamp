// leaning function is javascript

// 1st way of declaring function in javascript
// using the function keyword

// function declration
function multiply(x, y){
    return x * y
}
console.log("function declration examples ans")

function greetings(){
    return("hello world!")
}

console.log(greetings())
console.log(multiply(5, 5))


// 2nd way of declaring function in javascript
// function expression
let arr = function(a, b){
    return a - b
}

console.log("function expression examples ans")

console.log(arr(20, 10))

// 3rd way of declaring function in javascript
// arrow function
var funcy = (a, b, c) => {
    return a + b * c
}

const sum = (a, b) => a + b

console.log("arrow function examples ans")

console.log(sum(4, 2))

console.log(funcy(4, 2, 3))