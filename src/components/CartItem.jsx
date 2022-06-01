import React from 'react';
import { store } from '../redux/store';
import "../styles/index.css";

const CartItem = ({ image }) => {
  const handleRemove = () => {
    store.dispatch({ type: "REMOVE_IMAGE", payload: image.id });
  }
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image.url} alt=""/>
      </div>
      <div className="cart-item-info">
        <p className="cart-item-name">{image.name}</p>
        <p className="cart-item-anime">{image.anime}</p>
      </div>
      <div className="cart-item-remove">
        <button type="button" onClick={() => handleRemove()}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;