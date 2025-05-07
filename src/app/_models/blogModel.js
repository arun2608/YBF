import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      default: null,
    },
    heading_url: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    blog_date: {
      type: Date,
      default: null,
    },
    short_description: {
      type: String,
      default: null,
    },
    thumb_image: {
      type: String,
      default: null,
    },
    banner_image: {
      type: String,
      default: null,
    },
    meta_title: {
      type: String,
      default: null,
    },
    meta_description: {
      type: String,
      default: null,
    },
    description: {
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

const blogModel =
  mongoose.models.blogModel || new mongoose.model("blogModel", blogSchema);
export default blogModel;
