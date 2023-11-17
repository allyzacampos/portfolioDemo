import React from 'react';
import { Section } from '../Components/Reusable Styles/Section';
import { ContactForm } from '../Components/ContactForm';
import { Typography } from '@material-tailwind/react';

export const Contact = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 justify-center items-center" data-aos="zoom-in-right">
        <div className="p-10 space-y-4 border-solid rounded-[30px] border-[1px] border-gray-300 ">
          <ContactForm />
        </div>
        
        <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-left">
          <Typography className='h2 font-bold text-black-dark'>Say Hello!</Typography>
          <Typography className='p-bold text-black-dark'>Have a project or a question? </Typography>

          <Typography className='p text-black-dark'>Let's chat! Fill out the form below 
          for a quick start to our conversation. Whether it's design collaboration, a quote request, or just to say hello, 
          I'm here and excited to hear from you.</Typography>
        </div>
      </div>
    </Section>
  );
};
