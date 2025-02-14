import React from 'react'
import FooterNav from './components/footerNav'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

  const quickLinks : INavList[] = [
    {
      text: 'About us',
      link: '/about-us',
    },
    {
      text: 'Our Programs',
      link: '/our-programs',
    },
    {
      text: 'Our Schedule',
      link: '/our-schedule',
    },
    {
      text: 'Contact us',
      link: '/contact-us'
    }
  ];

  const legalLinks : INavList [] = [
    {
      text: 'Terms and Conditions',
      link: '/terms-and-conditions',
    },
    {
      text: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'Return Policy',
      link: '/return-policy'
    }
  ];

  const contactLinks = [
    {
      text: 'periodwithsmile@gmail.com',
      link: 'mailto:periodwithsmile@gmail.com'
    },
    {
      text: '+2348101026254',
      link: 'tel:+2348101026254'
    },
  ];

  return (
    <footer className='bg-stone-700 text-white px-8 pt-16 pb-8 lg:px-16 lg:pt-20 lg:pb-10'>
      <div className='flex flex-wrap gap-y-10 gap-x-3 justify-between items-start lg:gap-5'>
        <h1>Logo</h1>
        <FooterNav list={quickLinks} heading='Quick Links'/>
        <FooterNav list={legalLinks} heading='Legal Links' />
        <FooterNav list={contactLinks} heading='Contact' />

        <div>
          <h1 className='lg:text-3xl text-md font-semibold lg:font-bold tracking-normal'>Follow us</h1>
          <div className='flex lg:gap-5 lg:mt-3 gap-3 mt-2 items-center justify-between'>
            <FaFacebook color='white' size={27} />
            <FaInstagram color='white' size={27} />
            <FaXTwitter color='white' size={27}/>

          </div>
        </div>
      </div>

      <h6 className='text-center mt-20 italic font-extralight tracking-wide'>2024 &copy; periodwithsmile</h6>

    </footer>
  )
}

export default Footer