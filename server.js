var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = 3000;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/catsController.js");

app.use("/", routes);

app.listen(port);