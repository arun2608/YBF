import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import cityModel from "@/app/_models/cityModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  connectDB();
  try {
    const user = await getTokenFromCookies();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized", status: 0 },
        { status: 401 }
      );
    }
    
    const data = await cityModel.find();
    if (!data || data.length <= 0) {
      return NextResponse.json({ message: "Unable to get data!", status: 0 });
    }
    return NextResponse.json({
      message: "Get district data successfully.",
      status: 1,
      data: data,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
