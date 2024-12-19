import React from 'react'
import Section from '../components/section'
import image from '@/assets/image1.jpg'

const WhoWeAre = () => {
  return (
    <Section
      heading='Who We Are'
      image={image.src}
      text='We are more than just a foundation, we are a movement. From providing essential menstrual kits to empowering women with vocational skills, we strive to uplift communities and foster understanding across genders. By educating men, we bridge the gap in menstrual care, ensuring that support and compassion become universal.'
    />
  )

}

export default WhoWeAre