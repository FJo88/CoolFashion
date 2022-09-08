import React from 'react'
import NewProductForm from '../../components/NewProductForm'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import { girls } from '../../components/Header'

const NewProductPage = () => {

  const [data, setData] = useState(girls)

  return (
    <>
    <Header />
    <NewProductForm categories={data}/>
    </>
  )
}

export default NewProductPage