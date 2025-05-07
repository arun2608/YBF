import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import cityModel from "@/app/_models/cityModel";
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

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "mising city id", status: 0 });
    }
    const cityData = await cityModel.findById({ _id: id });
    if (!cityData || cityData.length <= 0) {
      return NextResponse.json({ message: "Unable to get data", status: 0 });
    }

    const districtData = await districtModel.find({ state: cityData.state });
    const districts = districtData.length > 0 ? districtData : null;

    return NextResponse.json({
      message: "Get Data successfully.",
      status: 1,
      data: {
        cities: cityData,
        districts: districts,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
