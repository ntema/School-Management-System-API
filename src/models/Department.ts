import mongoose, { Document, Schema } from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: [true, "Faculty is required"],
    },
  },
  { 
    timestamps: true
  },
);
function populateDepartment(next: any) {
  //@ts-ignore
  this.populate("faculty");
  //@ts-ignore
  next();
}

departmentSchema.pre("find", populateDepartment)
  .pre("findOne", populateDepartment)
  .pre("findOneAndUpdate", populateDepartment);
  
export const Department = mongoose.model(
  "department",
  departmentSchema
);

