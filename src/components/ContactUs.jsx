import React from "react";
import "../style.css";
import { useState } from "react";

const ContactUs = () => {

  const [characters, setCharacters] = useState("")

  const checkCharacterLength = (e, character) => {
    character(e.target.value)
  }

  return (
      <form className="formContainer">
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              id="first-name"
              name="firstName"
              className="form-control firstName"
              placeholder="First name"
              pattern="[A-Za-zÀ-ž\s]{1,20}"
              maxLength="20"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="lastName"
              className="form-control lastName"
              placeholder="Last name"
              pattern="[A-Za-zÀ-ž\s]{1,30}"
              maxLength="30"
              required 
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required 
            />
          </div>
        </div>
        <p className="characterLength">{characters.length}/400 character limit</p>
        <div className="row mb-3">
          <div className="col">
            <textarea
              type="text"
              id="user-question"
              name="userQuestion"
              className="form-control"
              placeholder="Fill out your question here"
              maxLength="400"
              onChange={(e) => checkCharacterLength(e, setCharacters)}
              required 
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary">
        Send
      </button>
      </form>
  );
};

export default ContactUs;
