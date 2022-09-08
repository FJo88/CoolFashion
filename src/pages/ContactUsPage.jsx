import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import ContactConfirmed from '../components/ContactConfirmed'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactUsPage = () => {

  const [confirmed, setConfirmed] = useState(false)

  const location = useLocation();

  useEffect(() => {
    setConfirmed(location.state.confirm)
  }, [])

  const getConfirmation = (confirm) => {
    setConfirmed(confirm)
  }

  return (
    <div>
      <Header />
      {confirmed && <ContactConfirmed />}
      {!confirmed && <ContactUs getConfirmation={getConfirmation}/>}
      <Footer />
    </div>
  )
}

export default ContactUsPage