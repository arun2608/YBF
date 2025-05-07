import mongoose from "mongoose";

const userSeekingForSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      default: null,
    },
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

const userSeekingForModel =
  mongoose.models.userSeekingForModel || new mongoose.model("userSeekingForModel", userSeekingForSchema);
export default userSeekingForModel;
