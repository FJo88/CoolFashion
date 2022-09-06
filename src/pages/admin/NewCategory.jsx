import React from 'react'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { useState } from 'react'


const NewCategory = () => {
  return (<>

  const [checkedBox, setCheckedbox] = useState(false)

  console.log(checkedBox)
  
  const handleCheckBox = () => {setCheckedbox(!checkedBox)}


  return (
    <>
      <h1 className='text-center'>Welcome Hans-Christian.</h1>
    <label htmlFor="large-toggle" className="flex relative items-center justify-center cursor-pointer">
      <input onClick={handleCheckBox} type="checkbox" value="" id="large-toggle" className="sr-only peer" />
      <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:relative after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-red-600">

      </div>
      {!checkedBox &&
        <span className=" text-center ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add a new category.</span>
}
{checkedBox && 
<span className=" text-center ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add a new product.</span>
}
</label>
{!checkedBox &&
  <h1 className='text-center'>Component 1</h1>}
{checkedBox && (
<h1 className='text-center'>Component 2</h1>)}



    </>
  )
  </>)
}

export default NewCategory