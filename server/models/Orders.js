import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: mongoose.Types.Decimal128, required: true },
        quantity: { type: Number, default: 1 },
        size: { type: String, required: true },
      },
    ],
    totalAmount: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    deliveryDetails: {
      fullName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum : [
        "COD",
        "Online",
      ],
      default: "COD",
    },
    paymentStatus: {
      type: String,
      enum: [
        "Paid",
        "Pending",
      ],
      default: "Paid",
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Shipped",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Delivered",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Shopping-Orders", OrdersSchema);