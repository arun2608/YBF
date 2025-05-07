import mongoose from "mongoose";

const seekingForSchema = new mongoose.Schema(
  {    
    seeking_for: {
      type: String,
      default: null,
    },   
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const seekingForModel = mongoose.models.seekingForModel || new mongoose.model("seekingForModel", seekingForSchema);
export default seekingForModel;
