import React from 'react';
import { ContactForm } from '../Components/ContactForm';
import { Typography } from '@material-tailwind/react';
import { emailAddress } from '../Utils/Data';

export const Contact = () => {
  return (
    <div className="container mx-auto my-[90px]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10 sm:px-5" data-aos="zoom-in-right">
        <div className="p-10 space-y-4 border-solid rounded-[30px] border-[1px] border-gray-300 ">
          <ContactForm />
        </div>
        
        <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-left">
          <Typography className='h2 font-bold text-black-dark'>Say Hello!</Typography>

          <Typography className='p text-black-dark'>Let's chat! Fill out the form below 
          for a quick start to our conversation. Whether it's design collaboration, a quote request, or just to say hello, 
          I'm here and excited to hear from you.</Typography>

          <div>
          <Typography className='p-bold text-black-dark'>Email</Typography>
            <div className='flex space-x-2 items-center'>
              <span className='text-3xl text-green-600 mr-1 pt-2'>
                <ion-icon name="mail" className=""></ion-icon>
              </span>
              <Typography className='p text-black-dark' as="a" href={`mailto:${emailAddress}`}>allycmps@gmail.com</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
