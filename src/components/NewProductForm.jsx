import React from 'react'
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addProduct} from '../redux/slices/productSlice'
import { girls } from './Header';

const NewProductForm = (props) => {

  const [title, setTitle] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [productImg, setProductImg] = useState("https://placehold.jp/300x400.png")
  const [description, setDescription] = useState("")

  const {latestId} = useSelector((state) => state.products)
  const allProducts = useSelector((state) => state.products.products)

  const dispatch = useDispatch()

  const handleState = (e, setState) => {
    setState(e.target.value)
  }

  const handleAddProduct = () => {
    dispatch(addProduct({
      id: latestId + 1,
      title: title,
      brand: brand,
      price: +price,
      category: category,
      imageurl: productImg,
      description: description
    }))
    props.getConfirmation(true);
    console.log(allProducts)
  }

  return (
  <>
   <h1 className='text-xl text-center'>Add new product</h1>
    <form className="formContainer" onSubmit={handleAddProduct}>
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
            onChange={(e) => handleState(e, setTitle)}
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
            onChange={(e) => handleState(e, setBrand)}
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
            onChange={(e) => handleState(e, setPrice)}
            required
          />
        </div>
      </div>
      <div className="input-group mb-3">
        <select className="form-select" id="inputGroupSelect01" defaultValue={'DEFAULT'} onChange={(e) => handleState(e, setCategory)} required>
          <option value="DEFAULT" disabled>Choose category</option>
          {girls.map((category, i) => (
            <option value={category.name} key={i}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="input-group mb-3">
        <input type="file" accept="image/*"className="form-control" id="inputGroupFile02" required />
        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
      </div>
      <p className="characterLength">{description.length}/400 character limit</p>
      <div className="row mb-3">
        <div className="col">
          <textarea
            type="text"
            id="description"
            name="description"
            className="form-control"
            placeholder="Description"
            maxLength="400"
            onChange={(e) => handleState(e, setDescription)}
            required
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary" >
        Add
      </button>
    </form>
  </>)
}

export default NewProductForm