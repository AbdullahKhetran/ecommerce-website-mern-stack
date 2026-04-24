import jwt from "jsonwebtoken";
import {createError} from "../error.js";

export const verifyToken = async (req,res,next) => {
    try {
        // auth header missing
        if (!req.headers.authorization) {
            return next(createError(410, "You are not authenticated"));
        }

        const token = req.headers.authorization.split(" ")[1];
        // auth token missing
        if (!token) {
            return next(createError(401, "You are not authenticated"));
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;

        return next();
        
    } catch (error) {
        next(error)
    }
}