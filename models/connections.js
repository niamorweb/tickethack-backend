const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://niamorlth13:kFveUIwPeN8W9cTT@cluster0.ivi0acp.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
