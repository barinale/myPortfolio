import React from 'react'
import { HeaderContact } from '../Components/contact/HeaderContact'
import './Contact.css'
import { ContactForm } from '../Components/contact/ContactForm'

export const Contact = () => {
  return (
    <div id="contact">
        <HeaderContact/>
        <ContactForm />
    </div>
  )
}
