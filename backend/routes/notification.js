const express = require("express");
const { default: mongoose } = require("mongoose");
const notificationRoute = express.Router();

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
});

const Notification = mongoose.model("Notification", notificationSchema);

//sending notification
notificationRoute.post("/send", async (req, res) => {
  try {
    let newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(200).json({ message: "notification set successfully",data:newNotification });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//geting notification by userId
notificationRoute.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Notification.find({ userId:id });
    if (!data) {
      return res.json({ message: "Notification not found" });
    }
    res.status(200).json({ message: "notification get successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

notificationRoute.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Notification.findByIdAndDelete({ _id:id });
    if (!data) {
      return res.json({ message: "Notification not found" });
    }
    res
      .status(200)
      .json({ message: "notification deleted successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = notificationRoute;
