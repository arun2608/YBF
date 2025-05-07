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

    const requiredFields = ["country", "state", "city", "pincode"];

    for (const field of requiredFields) {
      if (!userData[field] || userData[field].toString().trim() === "") {
        return NextResponse.json({
          message: `Missing or empty field: ${field}`,
          status: 0,
        });
      }
    }

    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(userData.pincode)) {
      return NextResponse.json({
        message: "Enter a valid 6-digit pincode!",
        status: 0,
      });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      decoded.id,
      {
        country: userData.country,
        state: userData.state,
        city: userData.city,
        pincode: userData.pincode,
      },
      { new: true } // to return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: 0,
      });
    }

    return NextResponse.json({
      message: "Address updated successfully.",
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
