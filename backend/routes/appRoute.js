const express = require("express");
const appRoute = express.Router();
const LaundryRequest = require("../model/appModel");
const { laundryPrice } = require("../model/resetPasswordModel");

// get laundry requests
appRoute.get("/price", async (req, res) => {
  try {
    let data = await laundryPrice.find();
    res.status(200).json({ data:data[0] });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
appRoute.post("/set-price", async (req, res) => {
  try {
    let data = new laundryPrice(req.body);
    await data.save();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

appRoute.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await LaundryRequest.find({ userId: id }).sort({ _id: -1 });
    if (!data) {
      return res.json({ message: "Not request found" });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

appRoute.post("/create-request", async (req, res) => {
  try {
    let newRequest = new LaundryRequest(req.body);
    await newRequest.save();
    res.status(200).json({
      message: "Laundry request created successfully",
      data: newRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// confirming request by request id
appRoute.put("/confirm-request/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the laundry request by ID
    const laundryRequest = await LaundryRequest.findById({ _id: id });

    if (!laundryRequest) {
      return res.status(404).json({ error: "Laundry request not found" });
    }

    // Update the status to confirmed
    laundryRequest.status = "confirmed";
    await laundryRequest.save();

    res.status(200).json({
      message: "Laundry request confirmed successfully",
      data: laundryRequest,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = appRoute;
