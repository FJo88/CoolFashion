import React from 'react'
import { useState } from 'react'
import ContactConfimed from '../components/ContactConfimed'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactUsPage = () => {

  const getConfirmation = (confirm) => {
    setConfirmed(confirm)
  }

  const [confirmed, setConfirmed] = useState(false)

  return (
    <div>
      <Header />
      {confirmed && <ContactConfimed />}
      {!confirmed && <ContactUs getConfirmation={getConfirmation}/>}
      <Footer />
    </div>
  )
}

export default ContactUsPage