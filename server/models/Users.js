import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: null,
        },
        cart: {
            type: [
                {
                    product: {type: mongoose.Schema.Types.ObjectId, ref: "Products"},
                    quantity: {type: Number, default: 1},
                },
            ],
            default: [],
        }, 
        favorites: {
            type: [mongoose.Schema.Types.ObjectId],
            red: "Products",
            default: [],
        },
        orders:{
            type: [mongoose.Schema.Types.ObjectId],
            red: "Shopping-Orders",
            default: [],
        }
    },
    {timestamps: true}
);

export default mongoose.model("User", UserSchema);