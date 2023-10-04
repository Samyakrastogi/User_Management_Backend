const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_name: { type: String },
    user_email: { type: String, unique: true },
    user_password: { type: String },
    user_image: { type: String },
    total_orders: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
