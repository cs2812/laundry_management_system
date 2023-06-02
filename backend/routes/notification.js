const express = require("express");
const Notification = require("../model/Notification");
const notificationRoute = express.Router();

//sending notification
notificationRoute.post("/send", async (req, res) => {
  try {
    let newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(200).json({
      message: "notification send successfully",
      data: newNotification,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//geting notification by userId
notificationRoute.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Notification.find({ userId: id }).sort({ _id: -1 });
    if (!data) {
      return res.json({ message: "Notification not found" });
    }
    res.status(200).json({ message: "notification get successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//reading notification by userId
notificationRoute.put("/read/:id", async (req, res) => {
  // res.send(req.params.id)
  try {
    let { id } = req.params;
    let response = await Notification.updateMany(
      { userId: id },
      { $set: { isRead: true } }
    );
    if (response.acknowledged) {
      let data = await Notification.find({ userId: id }).sort({ _id: -1 });
      return res
        .status(200)
        .json({ message: "notification read successfully", data });
    } else {
      res.json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

notificationRoute.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Notification.findByIdAndDelete({ _id: id });
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
