var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function (vals, cb) {
        orm.insertOne("burgers", vals, function (res) {
            cb(res);
        });
    },

    update: function (burgerStatus, burgerId, cb) {
        orm.updateOne(burgerStatus, burgerId, function (response) {
            cb(response);
        });
    }

};

module.exports = burger;