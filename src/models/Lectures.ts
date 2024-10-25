import mongoose, { Schema } from "mongoose";

const LecturesSchema = new Schema(
  {
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    imagesURLs: {
      type: [String]
    },
    videoMedia: {
      type: Object,
      select: false
    },
    videoURL: {
      type: Object,
      select: false
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: [true, "Department is required"],
    },
    level: {
      type: Number,
      required: [true, "Level is required"],
    },
    filename: {
      type: String,
      required: [true, "Name is required"],
    },
    
  },
  {
    timestamps: true
  }
);
function populateLectures(next: any) {
  //@ts-ignore
  this.populate("uploadedBy").populate("department");
  //@ts-ignore
  next();
}

LecturesSchema.pre("find", populateLectures)
  .pre("findOne", populateLectures)
  .pre("findOneAndUpdate", populateLectures);
  
export const Lectures = mongoose.model(
  "Lectures",
  LecturesSchema
);
