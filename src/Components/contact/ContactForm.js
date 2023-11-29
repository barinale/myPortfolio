import React, { useState } from 'react'
import './ContactForm.css'
export const ContactForm = () => {
    const [Name,setName]= useState('')
    const [Email,setEmail]= useState('')
    const [Subject,setSubject]= useState('')
    const [message,setmessage]= useState('')

  return (
    <div className='Form'>
          <h1 className='titleContacts'>Message Me</h1>
            <form action="https://formsubmit.co/mekkmohammed08@gmail.com" method="POST">
                <input type='text' name='Name'  placeholder='Name' />
                <input type='email' name='Email'  placeholder='Email' />
                <input type='text' name='Subject'  placeholder='Subject' />
                <textarea placeholder='Message' rows="4" cols="50"  />
                <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
