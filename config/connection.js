var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Samdevmad1981feb!",
    database: "burgers_db"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("you are connected to burgers_db")
})

module.exports = connection;