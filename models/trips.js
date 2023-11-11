const mongoose = require("mongoose");

const tripsSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: String,
});

const Trip = mongoose.model("trips", tripsSchema);

module.exports = Trip;
