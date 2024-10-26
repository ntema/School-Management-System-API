// import { Document, Schema } from "mongoose";

const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  lecturer: {
     type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

export const Lecture = mongoose.model(
  "Lectures",
  LectureSchema
);
