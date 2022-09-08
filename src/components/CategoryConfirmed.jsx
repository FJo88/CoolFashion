import React, { useEffect } from 'react'
import "../style.css";
import {useNavigate} from 'react-router-dom'

const CategoryConfirmed = () => {
  let navigate = useNavigate() 

   setTimeout(() => {

    navigate('/admin/')
    }, 4000);

  return (
    <div>
        <p className="contactMessageOne text-xl">Your category have now been created.</p>
    </div>
  )
}

export default CategoryConfirmed