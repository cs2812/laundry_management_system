const express = require("express");
const userCollection = require("../model/userModel");
const {otpCollection} = require("../model/resetPasswordModel");
const otpRoute = express.Router();

otpRoute.post("/request", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const response = await userCollection.findOne({ email });
    if (!response) {
      return res.status(401).send({ message: "User not found" });
    }
    let data = new otpCollection({
      email,
      otp,
    });
    await data.save();
    res.status(200).send({ message: "otp sent", data: data });
  } catch (erro) {
    res.status(500).json({ message: "Server error", error });
  }
});

otpRoute.post("/verify", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const response = await otpCollection.findOne({
      $and: [{ otp }, { email }],
    });
    if (response) {
      return res.status(200).send({ message: "otp verified", data: response });
    }
    res.status(401).send({ message: "Invalide otp" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = otpRoute;
