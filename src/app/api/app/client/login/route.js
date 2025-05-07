import connectDB from "@/app/_config/connect";
import userModel from "@/app/_models/userModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();

  try {
    const { country_code, mobile } = await request.json();
    const mobileRegex = /^\d{10}$/;

    if (!mobile) {
      return NextResponse.json({
        message: "Mobile number is required.",
        status: 0,
      });
    }

    if (!mobileRegex.test(mobile)) {
      return NextResponse.json({
        message: "Invalid mobile number format.",
        status: 0,
      });
    }

    const otp = "1234";

    let user = await userModel.findOne({ mobile, type: 1 });

    if (!user) {
      user = new userModel({
        type: 1,
        mobile,
        country_code,
        otp,
        status: 0,
      });

      await user.save();

      return NextResponse.json({
        message: "User created. OTP sent.",
        status: 1,
        data: { id: user._id, otp },
      });
    }

    if (user.status !== 1) {
      return NextResponse.json({
        message: "User is not active.",
        status: 0,
      });
    }

    const updated = await userModel.findOneAndUpdate(
      { _id: user._id, status: 1 },
      { otp }
    );

    if (!updated) {
      return NextResponse.json({
        message: "Failed to update OTP.",
        status: 0,
      });
    }

    return NextResponse.json({
      message: "OTP sent successfully.",
      status: 1,
      data: { id: user._id, otp },
    });
  } catch (err) {
    console.error("Error in OTP POST handler:", err);
    return NextResponse.json({ message: "Internal server error.", status: 0 });
  }
};
