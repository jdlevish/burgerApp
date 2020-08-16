var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Samdevmad1981feb!",
        database: "burgers_db"
    })
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("you are connected to burgers_db")
})

module.exports = connection;