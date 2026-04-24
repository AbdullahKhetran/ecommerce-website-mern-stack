import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/"
})


// auth apis
export const UserSignUp = async (data) => {
    return await API.post("/user/signup", data)
}

export const UserSignIn = async (data) => {
    return await API.post("/user/signin", data)
}


// products apis
export const getAllProducts = async (filter) => {
    return await API.get(`/products?${filter}`)
}

export const getProductDetails = async (id) => {
    return await API.get(`/products/${id}`)
}


// cart apis
export const getCart = async (token) => {
    return await API.get("/user/cart", {
        headers: { Authorization: `Bearer ${token}`},
    })
}

export const addToCart = async (token, data) => {
    return await API.post("/user/cart", data, {
        headers: { Authorization: `Bearer ${token}`},
    })
}

export const deleteFromCart = async (token, data) => {
    return await API.patch("/user/cart", data, {
        headers: { Authorization: `Bearer ${token}`},
    })
}



// favorites apis
export const getFavorite = async (token) => {
    return await API.get("/user/favorite", {
        headers: { Authorization: `Bearer ${token}`},
    })
}

export const addToFavorite = async (token, data) => {
    return await API.post("/user/favorite", data, {
        headers: { Authorization: `Bearer ${token}`},
    })
}

export const deleteFromFavorite = async (token, data) => {
    return await API.patch("/user/favorite", data, {
        headers: { Authorization: `Bearer ${token}`},
    })
}


// orders apis
export const getOrders = async (token) => {
    return await API.get("/user/order", {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const placeOrder = async (token, data) => {
    return await API.post("/user/order", data, {
        headers: {Authorization: `Bearer ${token}`}
    })
}
