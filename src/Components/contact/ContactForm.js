import React, { useState } from 'react'
import './ContactForm.css'
export const ContactForm = () => {
    const [Name,setName]= useState('')
    const [Email,setEmail]= useState('')
    const [Subject,setSubject]= useState('')
    const [message,setmessage]= useState('')

    const hanld = (e)=>{
        e.preventDefault();
        console.log("test")
    }
  return (
    <div className='Form'>
            <form onSubmit={hanld}>
                <input type='text' name='Name' value={Name} placeholder='Name' onChange={e => setName(e.target.value)}/>
                <input type='email' name='Email' value={Email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                <input type='text' name='Subject' value={Subject} placeholder='Subject' onChange={e => setSubject(e.target.value)}/>
                <textarea placeholder='Message' rows="4" cols="50" value={message} onChange={e => setmessage(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
