const { default: mongoose } = require("mongoose");

const otpCollectionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, require: true },
    email: { type: String, required: true },
    otp: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const laundryPriceSchema = new mongoose.Schema({
  topwear: { type: String },
  bootomwear: { type: String },
  woolen: { type: String },
  other: { type: String },
});

const otpCollection = mongoose.model("resetCode", otpCollectionSchema);
const laundryPrice = mongoose.model("laundryPrice", laundryPriceSchema);
module.exports = { otpCollection, laundryPrice };
