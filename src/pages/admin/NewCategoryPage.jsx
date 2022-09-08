import React from 'react'
import { useState, useEffect } from 'react'
import CategoryConfirmed from '../../components/CategoryConfirmed'
import Header from '../../components/Header'
import NewCategoryForm from '../../components/NewCategoryForm'

const NewCategoryPage = () => {
  const [confirmed, setConfirmed] = useState(false)
  
    const getConfirmation = (confirm) => {
      setConfirmed(confirm)
    }

  return (
    <>
    <Header/>
    {!confirmed && <NewCategoryForm getConfirmation={getConfirmation}/>} 
    {confirmed && <CategoryConfirmed/>}
    </>
  )
}

export default NewCategoryPage