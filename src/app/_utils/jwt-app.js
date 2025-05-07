import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

// Generate JWT Token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    SECRET_KEY,
    { expiresIn: "24h" } // Token expires in 24 hours (or set your preferred duration)
  );
};

// Verify JWT Token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
