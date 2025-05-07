import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import blogModel from "@/app/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();
  try {
    const user = await getTokenFromCookies();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized", status: 0 },
        { status: 401 }
      );
    }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "mising blog id", status: 0 });
    }
    const blogData = await blogModel.findById({ _id: id });

    if (!blogData || blogData.length <= 0) {
      return NextResponse.json({ message: "Unable to get data", status: 0 });
    }

    return NextResponse.json({
      message: "Get Data successfully.",
      status: 1,
      data: blogData,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
