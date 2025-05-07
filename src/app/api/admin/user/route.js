import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import userModel from "@/app/_models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  connectDB();
  try {
    const user = await getTokenFromCookies();
    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized", status: 0, data: user },
        { status: 401 }
      );
    }

    const data = await userModel.find({ type: 1 }).sort({ createdAt: -1 });
    if (!data || data.length <= 0) {
      return NextResponse.json({ message: "Unable to get data", status: 0 });
    }
    return NextResponse.json({
      message: "Get Data successfully.",
      status: 1,
      data: data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
