const express = require("express")
const app = express()
const mysql = require("mysql")

// mysql server configuration
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "blog"
})

// create database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    // Check if the database already exists
    connection.query("SHOW DATABASES LIKE 'blog'", function(err, result) {
        if (err) throw err;

        if (result.length === 0) {
            // Database doesn't exist, create it
            connection.query("CREATE DATABASE blog", function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });
        } else {
            console.log("Database already exists");
        }
    });

});

app.use(express.json())

// create database post table
app.post("/create-table", (req, res) => {
    const sql = "CREATE TABLE post(id int(11) NOT NULL, title varchar(250), decscription text(5000), image varchar(250))"
    connection.query(sql, (err, result) => {
        if(err) throw err
    })
    console.log("table post created successfully")
    res.status(201).json({
        success: true,
        message: "table post created successfully"
    })
})


app.get("/", (req, res) => {
    res.status(200).send("welcome to express server")
})


app.listen(7000, () => {
    console.log("express server started on port 7000 successfully");
})