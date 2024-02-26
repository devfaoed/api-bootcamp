const express = require("express")
const app = express()

// Database configuration
// const config = {
//     user: 'root',
//     password: '',
//     server: 'localhost',
//     database: 'master',
   
// };

app.get("/", (req, res) => {
    res.send("welcome to express server")
})


app.listen(7000, () => {
    console.log("express server started on port 7000 successfully");
})