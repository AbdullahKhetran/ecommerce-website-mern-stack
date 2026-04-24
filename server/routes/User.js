import express from "express";
import { UserRegister, UserLogin, getAllCartItems, addToCart, removeFromCart, getAllOrders, placeOrder, getUserFavorites, addToFavorites, removeFromFavorites } from "../controllers/User.js";

const router = express.Router();

// auth
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

// cart
router.get("/cart", getAllCartItems);
router.post("/cart", addToCart);
router.patch("/cart", removeFromCart);

// order
router.get("/order", getAllOrders);
router.post("/order", placeOrder);

// favorites
router.get("/favorite", getUserFavorites);
router.post("/favorite", addToFavorites);
router.patch("/favorite", removeFromFavorites)


export default router;