import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const API = "https://anime-gurls-backend.herokuapp.com/api/v1/imgs/upload"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const handlePost = () => {
    cart.forEach(image => {
      const getMeta = (url) => {
        let img = new Image();
        img.src = url;
        return img;
      }
      let item = {
        name: image.name,
          anime: image.anime,
          url: image.url,
          width: getMeta(image.url).width,
          height: getMeta(image.url).height,
          is_nsfw: image.is_nsfw,
          properties: {
            hair_color: image.properties.hairColor,
            hair_length: image.properties.hairLength,
            breasts: image.properties.breasts,
            eye_color: image.properties.eyeColor,
          },
          tags: image.tags
      }
      axios.post(API, JSON.stringify(item), {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart">
        {cart.map(image => (
          <CartItem key={image.url} image={image} />
        ))}
      </div>
      <button type="button" onClick={() => handlePost()}>Post</button>
    </div>
  );
};

export default Cart;
