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

    const { id, country } = await request.json();

    if (!id || !country) {
      return NextResponse.json({
        message: "All field is mandatory !",
        status: 0,
      });
    }
    const updatedCountry = await countryModel.findByIdAndUpdate(
      { _id: id },
      { country }
    );

    if (!updatedCountry) {
      return NextResponse.json({
        message: "Country not found",
        status: 0,
      });
    }

    return NextResponse.json({
      message: "Country updated successfully.",
      status: 1,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
