import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart">
        {cart.map(image => (
          <CartItem key={image.id} image={image} />
        ))}
      </div>
      <button type="button">Post</button>
    </div>
  );
};

export default Cart;
