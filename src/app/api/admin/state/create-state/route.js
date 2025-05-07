import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import stateModel from "@/app/_models/stateModel";
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

    const { state } = await request.json();
    
    if (!state) {
        return NextResponse.json({ message: "Please enter state name", status: 0 })
    }
    const isExist = await stateModel.findOne({ state: state });
    if (isExist) {
      return NextResponse.json({
        message: "State already exist.",
        status: 2,
      });
    }
    const newState = new stateModel({
      state,
      status: 1
    });

    await newState.save();
    return NextResponse.json({
      message: "State created successfully.",
      status: 1,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
