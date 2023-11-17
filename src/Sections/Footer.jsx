import React from 'react';
import { Typography } from "@material-tailwind/react";
import { headerLinks } from '../Utils/Data';

export const Footer = ({ links }) => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className='font-bold text-2xl cursor-pointer flex items-center text-black-dark'>
          <span className='text-3xl text-green-600 mr-1 pt-2'>
            <ion-icon name="heart-outline"></ion-icon>
          </span>
          Logo
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
          {headerLinks.map((link) => (
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
              <a
                href={link.link}
                className="font-normal text-blue-gray transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className='md:ml-8 text-lg md:my-0 my-7'>
            <a
              href="#"
              className="font-normal text-blue-gray transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center">
        &copy; 2023 Portfolio
      </Typography>
    </footer>
  );
};
