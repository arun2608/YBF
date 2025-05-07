import connectDB from "@/app/_config/connect";
import districtModel from "@/app/_models/countryModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  connectDB();
  try {
    const { state } = await request.json();
    if (!state) {
      return NextResponse.json({
        message: "Please provide all the fields!",
        status: 0,
      });
    }
    
    const data = await districtModel.find({ state });
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
