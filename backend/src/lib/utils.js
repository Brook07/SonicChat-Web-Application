import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Use process.env to access environment variables
  const { JWT_SECRET, NODE_ENV } = process.env;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks: cross-site scripting
    sameSite: "strict", // CSRF attacks
    secure: NODE_ENV === "development" ? false : true, // Adjust secure cookie setting based on environment
  });

  return token;
};
