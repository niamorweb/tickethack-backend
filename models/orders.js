const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  isValidate: Boolean,
});

const Order = mongoose.model("orders", ordersSchema);

module.exports = Order;
