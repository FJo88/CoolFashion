import React, {useEffect} from 'react'
import "../style.css";
import {useNavigate} from 'react-router-dom'


const ProductConfirmed = () => {

  let navigate = useNavigate()

  setTimeout(() => {
    navigate('/admin/')
    }, 4000);

  return (
    <div>
        <p className="contactMessageOne text-xl">Your product has now been created.</p>


    </div>
  )
}

export default ProductConfirmed