const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertId })
    });
});



router.put("/api/burgers/:id", function (request, response) {
    burger.update(request.body.devoured, request.params.id, function (data) {

        if (data.affectedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});


module.exports = router;