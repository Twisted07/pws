"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUsPage = () => {

  const ref = useRef({} as HTMLFormElement);

  function handleSubmit(e : any) {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string, // service ID
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // template ID
      ref.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY // public key
    ).then (
      () => {console.log("Success!")},
      (err) => {console.error("Error: ", err)}
    );
  }
  
  return (
    <div>
      <h1>Get in touch with us</h1>
      <form ref={ref} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="reply_to" id="email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={20} cols={30}/>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactUsPage