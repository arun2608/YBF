import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET is not set in environment variables.");
}

export async function getTokenFromCookies() {
  try {
    // Get the cookies object
    const cookieStore = await cookies();
    // const token = cookieStore.get("next-auth.session-token");
    const token =
      cookieStore.get("__Secure-next-auth.session-token") ||
      cookieStore.get("next-auth.session-token");


    if (!token?.value) {
      console.error("No token found in cookies");
      return null; // No token found
    }

    // Verify the token using NextAuth's getToken method (JWT verification)
    const decoded = await getToken({
      req: { cookies: cookieStore },
      secret: SECRET_KEY,
    });

    if (!decoded) {
      console.error("Invalid or expired token");
      return null; // Token is invalid or expired
    }

    console.log("Decoded Token:", decoded);
    return decoded; // Return the decoded token (user info)
  } catch (error) {
    console.error("Error extracting token from cookies:", error);
    return null; // Return null if any error occurs
  }
}
