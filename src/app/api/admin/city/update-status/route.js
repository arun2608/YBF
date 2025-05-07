import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import cityModel from "@/app/_models/cityModel";
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

    const { id, status } = await request.json();
    
    if (!id || !status) {
        return NextResponse.json({ message: "All field is mandatory !", status: 0 })
    }
    const updatedCity = await cityModel.findByIdAndUpdate(
      { _id: id },
      { status }
    );

    if (!updatedCity) {
      return NextResponse.json({
        message: "City not found",
        status: 0,
      });
    }

    return NextResponse.json({
      message: "City status updated successfully.",
      status: 1,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
