"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Label from '../components/label';
import Input from '../components/input';

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
    <div className='flex flex-col items-center justify-center py-20 mb-20 border-t border-t-black px-3'>
      <h1 className='font-semibold text-2xl md:text-4xl'>Get in touch with us</h1>
      <h6 className='mt-3 md:text-lg mb-2'>Have questions? Want to partner with us?</h6>
      <h6 className='text-center italic'>Kindly send us a message and we will get in touch with you as soon as possible.</h6>
      <form className='mt-10 w-[70%] lg:w-[50%] xl:w-[40%] border-black border rounded-md p-7 flex flex-col gap-3 md:gap-5' ref={ref} onSubmit={handleSubmit}>
        <div>
          <Label content={'Name'} htmlFor="name" />
          <Input className='block' placeholder="Jamie" type="text" id="name" name="from_name" />
        </div>

        <div>
          <Label content='Email' htmlFor="email" />
          <Input className='block' placeholder="abc@gmail.com" type="email" name="reply_to" id="email" />
        </div>

        <div>
          <Label content='Message' htmlFor="message" className='block mb-3 text-md' />
          <textarea name="message" id="message" className='border rounded-md w-full' rows={5} />
        </div>

        <button className='w-full py-1 md:py-3 text-sm md:text-md rounded-md bg-black text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUsPage