import { verifyToken } from "@/app/_utils/jwt-app";
import { NextResponse } from "next/server";

export const GET = async (request) => {
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

    return NextResponse.json({
      message: "Token verified successfully",
      status: 1,
      user: decoded, // optional: return decoded info
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
