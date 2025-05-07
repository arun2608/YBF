import connectDB from "@/app/_config/connect";
import uploadImage from "@/app/_helper/uploadImage";
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

    if (!description) {
      return NextResponse.json({
        message: "About me is required.",
        status: 0,
      });
    }

    const existingUser = await userModel
      .findById({ _id: decoded.id })
      .select(" voice_note");

    let voiceNotePath = existingUser.voice_note;

    if (voice_note && typeof voice_note === "object") {
      voiceNotePath = await uploadImage(voice_note, "profile");
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      decoded.id,
      {
        description: userData.description,
        voice_note: voiceNotePath,
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
      message: "User updated successfully.",
      status: 1,
      data: updatedUser, // optional: include updated data
    });
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json({
      message: "Internal server error",
      status: 0,
    });
  }
};
