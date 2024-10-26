import mongoose, { Schema } from "mongoose";

const LectureMaterialSchema = new Schema(
  {
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    fileMediaUrl: {
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
    course: {
      type: String,
      required: [true, "Name is required"],
    },
    lecturer: {
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

LectureMaterialSchema.pre("find", populateLectures)
  .pre("findOne", populateLectures)
  .pre("findOneAndUpdate", populateLectures);
  
export const LectureMaterial = mongoose.model(
  "LectureMaterials",
  LectureMaterialSchema
);
