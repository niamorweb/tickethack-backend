var express = require("express");
var router = express.Router();

var Order = require("../models/orders");

router.post("/", (req, res) => {
  const newOrder = new Order({
    trip: req.body.trip,
    isValidate: false,
  });

  newOrder.save().then((data) => {
    Order.find().then((data) => {
      res.json({ allTrips: data });
    });
  });
});

router.get("/", (req, res) => {
  Order.find({})
    .populate("trip")
    .then((data) => {
      res.json({ allTrips: data });
    });
});

router.delete("/:orderId", (req, res) => {
  Order.deleteOne({ _id: req.params.orderId }).then(() => {
    Order.find().then((data) => {
      res.json({ allTrips: data });
    });
  });
});

router.put("/validate", (req, res) => {
  Order.updateMany({}, { isValidate: true }).then(() => {
    Order.find().then((data) => {
      res.json({ allTrips: data });
    });
  });
});

router.get("/booked", (req, res) => {
  Order.find({ isValidate: true })
    .populate("trip")
    .then((data) => {
      res.json({ allTrips: data });
    });
});

module.exports = router;
