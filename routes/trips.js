var express = require("express");
var router = express.Router();
var Trip = require("../models/trips");

router.get("/:departure/:arrival", (req, res) => {
  Trip.find({
    departure: req.params.departure,
    arrival: req.params.arrival,
  }).then((data) => {
    res.json({ trip: data });
  });
});

module.exports = router;
