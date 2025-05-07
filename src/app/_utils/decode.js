import { verifyToken } from "@/utils/jwt"; // Adjust path if needed
import { NextResponse } from "next/server";

export function authenticateRequest(request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json({ message: "No token provided", status: 0 }, { status: 401 });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
  
  if (!token) {
    return NextResponse.json({ message: "Token missing", status: 0 }, { status: 401 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ message: "Invalid or expired token", status: 0 }, { status: 401 });
  }

  return decoded; // Return decoded token if valid
}
