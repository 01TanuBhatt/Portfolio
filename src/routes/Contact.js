import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section2 from '../components/Section2'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="CONTACT" text="Lets connect"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
