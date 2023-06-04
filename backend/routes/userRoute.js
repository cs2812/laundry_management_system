const express = require("express");
const userRoute = express.Router();
const userCollection = require("../model/userModel");

userRoute.get("/", async (req, res) => {
  let data = await userCollection.find();
  res.send(data);
});

userRoute.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const newUser = new userCollection(req.body);
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
});

userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userCollection.findOne({
      $and: [{ email }, { password }],
    });

    if (existingUser) {
      return res
        .status(200)
        .json({ message: "User logedin successfully", data: existingUser });
    } else {
      return res.status(400).json({ error: "User not exists" });
    }
  } catch (error) {
    res.status(500).send({ message: "server error", error });
  }
});

userRoute.put("/change-password/:id", async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const id = req.params.id;
    const user = await userCollection.findOne({
      $and: [{ _id: id }, { password: currentPassword }],
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.password = newPassword;
    await user.save();
    res
      .status(200)
      .json({ message: "Password changed successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
});

userRoute.put("/forget-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await userCollection.findOne({email});
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.password = newPassword;
    await user.save();
    res
      .status(200)
      .json({ message: "Password changed successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
});

userRoute.put("/change-profile/:id", async (req, res) => {
  try {
    const { newUsername } = req.body;
    const id = req.params.id;
    const user = await userCollection.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.username = newUsername;
    await user.save();
    res
      .status(200)
      .json({ message: "Profile changed successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
});

userRoute.put("/update-profile-image", async (req, res) => {
  try {
    const { userId, avatar } = req.body;

    // Update profile image in the database
    const user = await userCollection.findById({ _id: userId }); // Specify the user ID
    user.avatar = avatar;
    await user.save();

    res
      .status(200)
      .json({ message: "Profile image updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = userRoute;
