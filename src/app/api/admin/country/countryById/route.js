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

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "mising country id", status: 0 });
    }
    const countryData = await countryModel.findById({ _id: id });
    if (!countryData || countryData.length <= 0) {
      return NextResponse.json({ message: "Unable to get data", status: 0 });
    }

    return NextResponse.json({
      message: "Get Data successfully.",
      status: 1,
      data: countryData,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
