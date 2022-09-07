import React, { useState } from 'react'
import Header from './Header'

const NewCategoryForm = () => {
    const [characters, setCharacters] = useState("")

    const checkCharacterLength = (e, character) => {
      character(e.target.value)
    }
  return (
  <>
<h1 className='text-xl text-center'>Add new category</h1>
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

  <div className="input-group mb-3">
    <input type="file" accept="image/*"className="form-control" id="inputGroupFile02" required />
    <label className="input-group-text" htmlfor="inputGroupFile02">Upload</label>
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
</>
  )
}
export default NewCategoryForm


