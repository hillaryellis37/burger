var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {

	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
	console.log(hbsObject);
    res.render("index", hbsObject);
    });


});

router.post("/api/burgers", function(req, res) {
	console.log(req.body);


	burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
		console.log(result);
		res.json({ id: result.insertId});
	});

});




module.exports = router;