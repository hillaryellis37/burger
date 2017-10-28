var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {

	burger.selectAll(function(data) {
    console.log(data);
    });
    

    res.render("index", {
      burgers: "test"
    });

});

router.post("/api/burgers", function(req, res) {

	burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
		res.json({ id: result.insertId});
	});

})




module.exports = router;