const { default: mongoose } = require("mongoose");

const otpCollectionSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,require:true},
  email: { type: String, required: true },
  otp: { type: String, required: true },
});

const otpCollection = mongoose.model("resetCode", otpCollectionSchema);
module.exports = otpCollection;