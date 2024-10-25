import mongoose, { Schema } from "mongoose";

const facultySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: [true, "department is required"],
    },
  },
  { 
    timestamps: true, 
 },
);
function populateDepartment(next: any) {
  //@ts-ignore
  this.populate("department");
  //@ts-ignore
  next();
}

facultySchema.pre("find", populateDepartment)
  .pre("findOne", populateDepartment)
  .pre("findOneAndUpdate", populateDepartment);
  
export const Faculty = mongoose.model(
  "faculty",
  facultySchema
);

