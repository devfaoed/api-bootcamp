// getting  an html element by tag name
const target = document.getElementsByTagName("button")

function handleClick(){
    alert("account created successfully!")
    console.log("account created successfully")
}

// getting an html element using class name
const content = document.getElementsByClassName("login")
let Login = () => {
    alert("welcome back user")
    console.log("welcome back user")
}

// getting an html element using id
const result = document.getElementById("submit")
const handleSubmit = () => alert("user information subbmitted successfully") 

// getting an html element using query selector
const element = document.querySelector("h2")
function handleClick(){
    alert("element clicked")
}