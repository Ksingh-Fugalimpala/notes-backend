import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    upass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema, "users");
