import React from "react";
import "../style.css";
import { useState } from "react";

const ContactUs = (props) => {

  const [characters, setCharacters] = useState("")

  const checkCharacterLength = (e, character) => {
    character(e.target.value)
  }

  const handleSend = () => {
    props.getConfirmation(true);
  }

  return (
      <form className="formContainer" onSubmit={handleSend}>
        <h2 className="contactTitle">Contact our support</h2>
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
              rows="4" 
              cols="50"
              maxLength="400"
              onChange={(e) => checkCharacterLength(e, setCharacters)}
              required 
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary sendBtn">
        Send
      </button>
      {/* {message && <p className="contactMessageOne">Thank you for contacting our support!</p>}
      {message && <p className="contactMessageTwo">We'll get back to you as soon as possible</p>} */}
      </form>
  );
};

export default ContactUs;
