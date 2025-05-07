import connectDB from "@/app/_config/connect";
import adminModel from "@/app/_models/adminModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();
  try {
    
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 0,
      });
    }

    const isExist = await adminModel.findOne({ email });
    if (!isExist || isExist.status !== 1) {
      return NextResponse.json({ message: "Invalid credentials!", status: 0 });
    }

    const comparePassword = await bcrypt.compare(password, isExist.password);
    if (!comparePassword) {
      return NextResponse.json({ message: "Invalid credentials!", status: 0 });
    }

    return NextResponse.json({
      message: "Login successful",
      status: 1,
      data: {
        id: isExist._id,
        name: isExist.name,
        role: isExist.role,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error!", status: 0 });
  }
};
