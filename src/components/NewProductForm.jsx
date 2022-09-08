import React from 'react'
import { useState } from "react";

const NewProductForm = () => {
  const [characters, setCharacters] = useState("")

  const checkCharacterLength = (e, character) => {
    character(e.target.value)
  }
  return (
  <>
   <h1 className='text-xl text-center'>Add new product</h1>
    <form className="formContainer">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            id="title"
            name="title"
            className="form-control title"
            placeholder="Title"
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
            name="brand"
            className="form-control brand"
            placeholder="Brand"
            pattern="[A-Za-zÀ-ž\s]{1,30}"
            maxLength="30"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="price"
            id="price"
            name="price"
            className="form-control"
            placeholder="Price"
            required
          />
        </div>
      </div>
      <div className="input-group mb-3">
        <select className="form-select" id="inputGroupSelect01" required>
          <option selected>Choose category</option>
          <option value="1">Dress</option>
          <option value="2">Jacket</option>
          <option value="3">Tops</option>
          <option value="4">Shirts</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <input type="file" accept="image/*"className="form-control" id="inputGroupFile02" required />
        <label className="input-group-text" for="inputGroupFile02">Upload</label>
      </div>
      <p className="characterLength">{characters.length}/400 character limit</p>
      <div className="row mb-3">
        <div className="col">
          <textarea
            type="text"
            id="description"
            name="description"
            className="form-control"
            placeholder="Description"
            maxLength="400"
            onChange={(e) => checkCharacterLength(e, setCharacters)}
            required
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary">
        Add
      </button>
    </form>
  </>)
}

export default NewProductForm