import connectDB from "@/app/_config/connect";
import { getTokenFromCookies } from "@/app/_helper/authHelper";
import uploadImage from "@/app/_helper/uploadImage";
import { default as userModel } from "@/app/_models/userModel";
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

    const data = await request.formData();
    const type = 1;
    const id = data.get("id");
    const name = data.get("name");
    const email = data.get("email");
    const mobile = data.get("mobile");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid Email!", status: 0 });
    }

    const mobileRegex = /^\+?\d{10}$/; // allows optional + and 10 to 15 digits
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json({
        message: "Invalid Mobile Number!",
        status: 0,
      });
    }

    const isEmailExist = await userModel.findOne({
      email: email,
      _id: { $ne: id },
    });
    if (isEmailExist) {
      return NextResponse.json({
        message: "Email already exist.",
        status: 2,
      });
    }

    const isMobileExist = await userModel.findOne({
      mobile: mobile,
      _id: { $ne: id },
    });
    if (isMobileExist) {
      return NextResponse.json({
        message: "Mobile no. already exist.",
        status: 3,
      });
    }

   
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        mobile,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "User update successfully.",
      status: 1,
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
