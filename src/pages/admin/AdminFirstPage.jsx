import React from 'react'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminFirstPage = () => {
  
  const [checkedBox, setCheckedbox] = useState(false)

  console.log(checkedBox)
  
  const handleCheckBox = () => {setCheckedbox(!checkedBox)}

  return (
    <>
    <Header/>
      <h1 className='text-center'>Welcome Hans-Christian.</h1>
      <h2 className='text-center text-white'>Would you like to create a new product or a new category?</h2>
    <div className='d-flex justify-content-around'>
      <div className='mt-3'>
       <Link to='/admin/new/product'>
      <button className='text-white btn btn-secondary btn-s'>Create new product</button>
      </Link>
      </div>
      <div className='mt-3'>
        <Link to='/admin/new/category'>
      <button className='text-white btn btn-secondary btn-s '>Create new category</button>
      </Link>
      </div>
      </div>
    </>
  )
  
}
export default AdminFirstPage