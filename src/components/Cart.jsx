import React from "react";
import { useSelector } from "react-redux";
import usePostImage from "../hooks/usePostImage";
import CartItem from "./CartItem";

const API = "https://anime-gurls-backend.herokuapp.com/api/v1/imgs/upload"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const handleUpload = () => {
    cart.forEach(async (item) => {
      const response = await usePostImage(API, { girl: item });
      console.log(response);
    })
  }
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart">
        {cart.map(image => (
          <CartItem key={image.id} image={image} />
        ))}
      </div>
      <button type="button" onClick={() => handleUpload()}>Post</button>
    </div>
  );
};

export default Cart;
