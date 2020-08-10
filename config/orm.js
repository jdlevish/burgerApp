


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
        var queryString = "INSERT INTO ?? Values(?)";
        connection.query(queryString, [tableName, value], function (err, result) {
            if (err) throw err;
            cb(result)
        })

    },

    updateOne: function (tableName, whatToUpdate, valuesToUpdate, condition, conditionValue, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, whatToUpdate, valuesToUpdate, condition, conditionValue], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }

}
module.exports = orm