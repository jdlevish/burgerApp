const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers")
app.use(routes);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("listening on port: " + PORT)
});