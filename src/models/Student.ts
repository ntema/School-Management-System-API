import { Schema } from "mongoose";

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    name: {
      type: String
    },
    city: {
      type: String
    },
     status: {
      type: String,
      default: "unverified",
      enum: ["unverified", "verified"]
    },
    LGA: {
      type: String
    },
    phone: {
      type: String
    },
    dob: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male"
    },
    address: {
      type: String
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    username: {
      type: String
    },
    department: {
    type: String
    },
     level: {
    type: String
    },
    faculty: {
    type: String
    },
    role: {
      type: String,
      enum: ["rep", "user", "admin"],
      default: "user"
    },
    validIdMedia: {
      type: Object,
      select: false
    },
    validIdURL: {
      type: String
    },
    pictureMedia: {
      type: Object,
      select: false
    },
    pictureURL: {
      type: String
    },
  },
  {
    timestamps: true
  }
);


export const User = mongoose.model("User", UserSchema);
