const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const appRoute = require("./routes/appRoute");
const notificationRoute = require("./routes/notification");
const otpRoute = require("./routes/resetPasswordRoute");

require("dotenv").config();
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/laundry", appRoute);
app.use("/notification", notificationRoute);
app.use("/otp", otpRoute);

app.get("/", (req, res) => {
  res.send("Welcome to laundry");
});

app.listen(PORT, async () => {
  await mongoose.connect(process.env.MONGODB_LINK);
  console.log("server is running on", PORT);
});
