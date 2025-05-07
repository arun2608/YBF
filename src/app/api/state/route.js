import connectDB from "@/app/_config/connect";
import stateModel from "@/app/_models/stateModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectDB();

    const data = await stateModel.find({});
    if (!data || data.length<=0) {
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
