import connectDB from "@/app/_config/connect";
import seekingForModel from "@/app/_models/seekingForModel";
import { verifyToken } from "@/app/_utils/jwt-app";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  connectDB();
  try {
    const authHeader = request.headers.get("Authorization"); // Correct way to get headers in Next.js

    if (!authHeader) {
      return NextResponse.json(
        { message: "No token provided", status: 0 },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { message: "Invalid or expired token", status: 0 },
        { status: 401 }
      );
    }

    const data = await seekingForModel.find({ status: 1 }).select(" _id seeking_for ");
    if (!data || data.length <= 0) {
      return NextResponse.json({ message: "Unable to get data", status: 0 });
    }
    return NextResponse.json({
      message: "Get Data successfully.",
      status: 1,
      data: data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
