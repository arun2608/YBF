import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import districtModel from "@/app/_models/countryModel";
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

    const isDistrictExist = await districtModel.findOne({
      state: state,
      district: district,
      _id: { $ne: id },
    });
    if (isDistrictExist) {
      return NextResponse.json({
        message: "District already exist.",
        status: 2,
      });
    }

    const updatedDistrict = await districtModel.findByIdAndUpdate(
      id,
      {
        state,
        district,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "District update successfully.",
      status: 1,
      data: updatedDistrict,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
