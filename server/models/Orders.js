import mongoose from "mongoose";

const OrdersScehema = new mongoose.Schema(
    {
        products: {
            type: [
                {
                    product: {type: mongoose.Schema.Types.ObjectId, ref: "Products"},
                    quantity: {type: Number, default: 1},
                },
            ],
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        total_amount: {
            type: mongoose.Types.Decimal128,
            required: true,
        },
        address: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "Payment Done",
        },        
    },
    {timestamps: true}
);

export default mongoose.model("Shoppoing-Orders", OrdersScehema);