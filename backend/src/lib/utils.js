import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token  = jwt.sign({ userId }, process.env.JWT_SECERT, {
        expiresIn: "7d",
    });

    res.cookie("jwt",token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevent XSS attacks: xross-site scripting
        sameSite : "strict", //CSRF attacks
        secure: process.env.NODE_ENV === "development" ? false : true,
    });

    return token;
};
