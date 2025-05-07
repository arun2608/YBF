import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET is not set in environment variables.");
}

export const verifyToken = (token) => {
  if (!token || token.split(".").length !== 3) {
    console.error("Invalid JWT format:", token);
    return null;
  }

  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
};
