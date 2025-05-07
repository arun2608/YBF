import connectDB from "@/app/_config/connect";
import userModel from "@/app/_models/userModel";
import { generateToken } from "@/app/_utils/jwt-app";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();

  try {
    const { id, otp } = await request.json();

    if (!id || !otp) {
      return NextResponse.json({
        message: "All fields required!",
        status: 0,
      });
    }

    let user = await userModel.findOne({ _id: id, otp });

    if (!user) {
      return NextResponse.json({
        message: "Invalid OTP or user not found!",
        status: 0,
      });
    }

    if (user.status !== 1) {
      user = await userModel.findOneAndUpdate(
        { _id: id },
        { status: 1 },
        { new: true }
      );
    }

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = generateToken(userData);

    return NextResponse.json({
      message: "Login successful",
      status: 1,
      token,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Internal server error!",
      status: 0,
    });
  }
};
