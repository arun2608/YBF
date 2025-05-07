import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import uploadImage from "@/app/_helper/uploadImage";

import blogModel from "@/app/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  connectDB();
  try {
    const user = await getTokenFromCookies();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized", status: 0 },
        { status: 401 }
      );
    }

    const data = await request.formData();
    const id = data.get("id");
    const heading = data.get("heading");
    const heading_url = data.get("heading_url");
    const thumb_image = data.get("thumb_image");
    const banner_image = data.get("banner_image");
    const blog_date = data.get("blog_date");
    const short_description = data.get("short_description");
    const description = data.get("description");
    const meta_title = data.get("meta_title");
    const meta_description = data.get("meta_description");

    const chars = /[!"#$%&\/()?\*\+\-.,;:_= '\s]+/g;
    const url = heading_url
      .toLowerCase()
      .replace(chars, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (typeof heading !== "string" || heading.trim() === "") {
      return NextResponse.json({ message: "Missing Heading!", status: 0 });
    }

    if (typeof heading_url !== "string" || heading_url.trim() === "") {
      return NextResponse.json({ message: "Missing Heading URL!", status: 0 });
    }

    if (typeof blog_date !== "string" || blog_date.trim() === "") {
      return NextResponse.json({ message: "Missing Blog Date!", status: 0 });
    }

    if (
      typeof short_description !== "string" ||
      short_description.trim() === ""
    ) {
      return NextResponse.json({
        message: "Missing short description!",
        status: 0,
      });
    }

    if (typeof description !== "string" || description.trim() === "") {
      return NextResponse.json({ message: "Missing Description!", status: 0 });
    }

    if (typeof meta_title !== "string" || meta_title.trim() === "") {
      return NextResponse.json({ message: "Missing Meta Title!", status: 0 });
    }

    if (
      typeof meta_description !== "string" ||
      meta_description.trim() === ""
    ) {
      return NextResponse.json({
        message: "Missing Meta Description!",
        status: 0,
      });
    }

    const existingBlog = await blogModel.findById(id);

    const isBlogExist = await blogModel.findOne({ url: url, _id: { $ne: id } });

    if (isBlogExist) {
      return NextResponse.json({
        message: "Blog already exist.",
        status: 2,
      });
    }

    let thumbImagePath = existingBlog.thumb_image;
    let bannerImagePath = existingBlog.banner_image;

    if (thumb_image && typeof thumb_image === "object") {
      thumbImagePath = await uploadImage(thumb_image, "blog");
    }
    if (banner_image && typeof banner_image === "object") {
      bannerImagePath = await uploadImage(banner_image, "blog");
    }

    const updatedBlog = await blogModel.findByIdAndUpdate(
          id,
          {
            heading,
            heading_url,
            url,
            blog_date,
            short_description,
            description,
            meta_title,
            meta_description,
            thumb_image: thumbImagePath,
            banner_image: bannerImagePath,
          },
          { new: true }
        );

    
    return NextResponse.json({
      message: "Blog updated successfully.",
      status: 1,
      data: updatedBlog,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
