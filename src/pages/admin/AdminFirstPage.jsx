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
    <div className='flex justify-between'>
      <div className='mt-3'>
       <Link to='/admin/new/product'>
      <span className='text-white underline '>Create new product.</span>
      </Link>
      </div>
      <div className='mt-3'>
        <Link to='/admin/new/category'>
      <span className='text-white underline'>Create new category.</span>
      </Link>
      </div>
      </div>
    </>
  )
  
}
export default AdminFirstPage