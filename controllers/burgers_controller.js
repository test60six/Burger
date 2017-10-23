var express = require("express");
var router = express.Router();

var burger= require("../models/burger.js");

router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function(req, res) {
  burger.create([
    
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    
    res.json({ id: result.insertId });
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;