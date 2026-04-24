import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {createError} from "../error.js";
import User from "../models/User.js" ;
import Orders from "../models/Orders.js";

dotenv.config();

// user register controller
export const UserRegister = async (req, res, next) => {
    try {
        const {email, password, name, img} = req.body;
        const existingUser = await User.findOne({email});

        if (existingUser) {
            return next(createError(409, "Email is already in use"));
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({
            name, email, password: hashedPassword, img,
        });
        const createdUser = user.save();
        const token = jwt.sign({id: createdUser._id}, process.env.JWT_SECRET, 
            {expiresIn: "7d"}
        );

        return res.status(200).json({token, user});

    } catch (error) {
        return next(error)
    }
}


// user login controller
export const UserLogin = async(req,res,next) => {
    try {
        const {email, password} = req.body;
        // console.log(email)

        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return next(createError(404, "User not found"));
        }

        const isPasswordCorrect = await bcrypt.compareSync(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect) {
            return next(createError(403, "Incorrect password"));
        }

        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        return res.status(200).json({token, user: existingUser});
    } catch (error) {
        return next(error)        
    }
};


