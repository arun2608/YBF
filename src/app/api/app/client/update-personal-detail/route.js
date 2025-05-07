import connectDB from "@/app/_config/connect";
import userModel from "@/app/_models/userModel";
import { verifyToken } from "@/app/_utils/jwt-app";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();

  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "No token provided", status: 0 },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded || !decoded.id) {
      return NextResponse.json(
        { message: "Invalid or expired token", status: 0 },
        { status: 401 }
      );
    }

    const userData = await request.json();

    const requiredFields = [
      "first_name",
      "last_name",
      "dob",
      "gender",
      "email",
    ];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (const field of requiredFields) {
      if (!userData[field] || userData[field].toString().trim() === "") {
        return NextResponse.json({
          message: `Missing or empty field: ${field}`,
          status: 0,
        });
      }
    }

    //const pincodeRegex = /^[0-9]{6}$/;
    if (!emailRegex.test(userData.email)) {
      return NextResponse.json({
        message: "Enter valid email id!",
        status: 0,
      });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      decoded.id,
      {
        first_name: userData.first_name,
        last_name: userData.last_name,
        dob: userData.dob,
        gender: userData.gender,
        email: userData.email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: 0,
      });
    }

    return NextResponse.json({
      message: "Profile detail updated.",
      status: 1,
      data: userData, // optional: include updated data
    });
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json({
      message: "Internal server error",
      status: 0,
    });
  }
};
