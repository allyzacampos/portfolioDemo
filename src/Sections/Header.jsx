import React, { useState } from 'react';
import { ButtonStyleHover } from '../Components/ButtonStyleHover';
import { headerLinks } from '../Utils/Data';

const Nav = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className='w-full sticky top-0 left-0 z-50'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center text-black-dark'>
            <span className='text-3xl text-green-600 mr-1 pt-2'>
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            Logo
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`text-black-dark md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {headerLinks.map((link) => (
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <li className='md:ml-8 text-lg md:my-0 my-7'>
              <ButtonStyleHover link="#contact">Contact</ButtonStyleHover>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
