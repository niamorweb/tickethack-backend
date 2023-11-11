var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var app = express();

app.use(cors());

var logger = require("morgan");

require("./models/connections");

var indexRouter = require("./routes/index");
var tripsRouter = require("./routes/trips");
var ordersRouter = require("./routes/orders");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.use("/", indexRouter);
app.use("/trips", tripsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
