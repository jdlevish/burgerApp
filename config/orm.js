


connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = " SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (tableName, value, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) Values(?)";
        connection.query(queryString, [tableName, value], function (err, result) {
            if (err) throw err;
            cb(result)
        })

    },

    updateOne: function (burgerStatus, burgerId, callback) {
        var queryString = "UPDATE burgers SET devoured = " + burgerStatus + " WHERE id = " + burgerId;

        connection.query(queryString, function (error, result) {
            if (error) {
                console.log("MYSQL UPDATE QUERY ERROR: " + error);
            } else if (result.affectedRows === 0) {
                console.log("MYSQL UPDATE QUERY ERROR: " + error);
            } else {
                console.log("Status of burger has been updated!");
            }

            callback(result);
        });
    }
}
module.exports = orm