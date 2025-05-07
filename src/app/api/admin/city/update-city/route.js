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

    const data = await request.formData();
    const id = data.get("id");
    const state = data.get("state");
    const district = data.get("district");
    const city = data.get("city");

    const isCityExist = await cityModel.findOne({
      state: state,
      district: district,
      city: city,
      _id: { $ne: id },
    });
    if (isCityExist) {
      return NextResponse.json({
        message: "City already exist.",
        status: 2,
      });
    }

    const updatedCity = await cityModel.findByIdAndUpdate(
      id,
      {
        state,
        district,
        city,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "City update successfully.",
      status: 1,
      data: updatedCity,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
