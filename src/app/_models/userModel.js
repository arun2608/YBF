import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    type: {
      type: Number,
      default: null,
    },
    first_name: {
      type: String,
      default: null,
    },
    last_name: {
      type: String,
      default: null,
    },
    user_name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      default: null,
    },
    dob: {
      type: String,
      default: null,
    },
    country_code: {
      type: String,
      default: null,
    },
    mobile: {
      type: String,
      default: null,
    },
    otp: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    pincode: {
      type: String,
      default: null,
    },
    profile_pic: {
      type: String,
      default: null,
    },
    interest: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    voice_note: {
      type: String,
      default: null,
    },
    institute_name: {
      type: String,
      default: null,
    },
    degree_name: {
      type: String,
      default: null,
    },
    start_year: {
      type: String,
      default: null,
    },
    end_year: {
      type: String,
      default: null,
    },
    designation: {
      type: String,
      default: null,
    },
    company_name: {
      type: String,
      default: null,
    },
    exp_start_year: {
      type: String,
      default: null,
    },
    exp_end_year: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
    instagram: {
      type: String,
      default: null,
    },
    facebook: {
      type: String,
      default: null,
    },
    linkedin: {
      type: String,
      default: null,
    },
    twitter: {
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

const userModel =
  mongoose.models.userModel || new mongoose.model("userModel", userSchema);
export default userModel;
