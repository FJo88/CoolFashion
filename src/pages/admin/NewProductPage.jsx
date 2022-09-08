import React from 'react'
import NewProductForm from '../../components/NewProductForm'
import Header from '../../components/Header'
import { useState,} from 'react'
import ProductConfirmed from '../../components/ProductConfirmed'

const NewProductPage = () => {

  // const [data, setData] = useState(girls)

  const [confirmed, setConfirmed] = useState(false)

  const getConfirmation = (confirm) => {
    setConfirmed(confirm)
  }

return (
    <>
    <Header/>
    {!confirmed && <NewProductForm getConfirmation={getConfirmation} />}
    {confirmed && <ProductConfirmed getConfirmation={getConfirmation}/>}
    </>
  )
}

export default NewProductPage