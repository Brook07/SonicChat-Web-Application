import { generateToken } from "../lib/utils.js";
import User  from "../models/User.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
    const {fullname, email, password} = req.body

    try {
         if (!fullname || !email || !password ){
            return res.status(400).json({ message : "All fields are required" });
         }

         if (password.length < 6){
            return res.status(400).json({ message : "Password must be at least 6 characters"});
         }

         // check if emails valid: regex
         const emailRegex = /^[^\s@] + @[^+\s@] + \.[^\@] +$/;
         if (!emailRegex.test(email)) {
             return res.status(400).json({ message : "Invaild email format" });
        }
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message:"Email already exists"})

            // 12345 => $dnjasdkasj_?dmsakmk
            const salt = await bcrypt.genSalt(10)
            const hashedPassword =  await bcrypt.hash(password,salt)

            const newUser = new User({
                fullName,
                email,
                password: hashedPassword
            })
            
            if(newUser){
                generateToken(newUser._id, res);
                await newUser.save();

                res.status(201).json({
                    _id:newUser._id,
                    fullName:newUser.fullName,
                    email:newUser.email,
                    profile:newUser.profilePic,
                    }
                );
            }else{
                res.status(400).json({message: "Invaild user data"})
            }
    }
    catch (error) {
        console.log("Error in signup controller:", error)
        res.status(500).json({ message:"Internal server error" });
    }
};