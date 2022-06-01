import React from "react";
import { store } from "../redux/store";

const Form = () => {
  const handleSubmit = ({ info }) => {
    store.dispatch({ type: "ADD_IMAGE", payload: info });
    console.log(info);
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="anime">Anime</label>
          <input type="text" name="anime" id="anime" />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input type="text" name="url" id="url" />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <textarea name="tags" id="tags" cols="20" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="hair-color">Hair Color</label>
          <input type="text" name="hair-color" id="hair-color" />
        </div>
        <div className="form-group">
          <label htmlFor="hair-length">Hair Length</label>
          <input type="text" name="hair-length" id="hair-length" />
        </div>
        <div className="form-group">
          <label htmlFor="eye-color">Eye Color</label>
          <input type="text" name="eye-color" id="eye-color" />
        </div>
        <div className="form-group">
          <label htmlFor="breast">Breast</label>
          <input type="text" name="breast" id="breast" />
        </div>
        <div className="form-group">
          <label htmlFor="is-nsfw">NSFW</label>
          <input className="checkbox" type="checkbox" name="is-nsfw" id="is-nsfw" />
        </div>
        <button type="button" onClick={() => {
          handleSubmit({
            info: {
              id: Math.floor(Math.random() * 100),
              name: document.getElementById("name").value,
              anime: document.getElementById("anime").value,
              url: document.getElementById("url").value,
              tags: document.getElementById("tags").value,
              hairColor: document.getElementById("hair-color").value,
              hairLength: document.getElementById("hair-length").value,
              eyeColor: document.getElementById("eye-color").value,
              breast: document.getElementById("breast").value,
              isNSFW: document.getElementById("is-nsfw").checked,
            }
          });
        }}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
