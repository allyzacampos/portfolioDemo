import React from 'react';
import { Carousel } from "@material-tailwind/react";
import carousel1 from '../../public/Images/carousel1.png';
import carousel2 from '../../public/Images/carousel2.png';

export const CarouselPortfolio = () => {
  return (
        <Carousel className="rounded-xl">
          <img
            src={carousel1}
            alt="image 1"
            className="h-full w-full object-cover"
            />
          <img
            src={carousel2}
            className="h-full w-full object-cover"
          />
          <img
            src={carousel1}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
  );
};
