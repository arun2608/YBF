import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import countryModel from "@/app/_models/countryModel";
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

    const { country } = await request.json();

    if (!country) {
      return NextResponse.json({
        message: "Please enter country name",
        status: 0,
      });
    }
    const isExist = await countryModel.findOne({ country: country });
    if (isExist) {
      return NextResponse.json({
        message: "Country already exist.",
        status: 2,
      });
    }
    const newCountry = new countryModel({
      state,
      status: 1,
    });

    await newCountry.save();
    return NextResponse.json({
      message: "Country created successfully.",
      status: 1,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
