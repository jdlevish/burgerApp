const { query } = require("express");
const connection = require("../../bootcamp-in-class-activities/week14/14-1-Chirpy-mysql-unsolved/14-1-Chirpy-mysql-unsolved/app/config/connection.js");

connection = require("./connection.js");

var orm = {
    selectAll: function (tableName) {
        var queryString = " SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function (tableName, value) {
        var queryString = "INSERT INTO ?? Values(?)";
        connection.query(queryString, [tableName, value], function (err, result) {
            if (err) throw err;
            console.log(result)
        })

    },

    updateOne: function (tableName, whatToUpdate, valuesToUpdate, condition, conditionValue) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, whatToUpdate, valuesToUpdate, condition, conditionValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }

}