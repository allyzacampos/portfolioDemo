import React from "react";
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { Typography } from "@material-tailwind/react";
import PortfolioSlider from "../Components/PortfolioSlider";
import { portfolioBackground } from '../Utils/Data';
import { ButtonStyleHover } from "../Components/ButtonStyleHover";

function Portfolio() {
  return (
    <div className="bg-[#ECEFF5] pb-[80px] overflow-hidden" style={portfolioBackground}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10 sm:px-0 justify-center items-center">
          <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-right">
            <Typography className='h2 font-bold text-black-dark'>My Works</Typography>
            <Paragraph>Dive into a showcase of my work— from eye-catching logos to user-friendly websites. Experience the blend of creativity and functionality. Let's bring your ideas to life!</Paragraph>
            <ButtonStyleHover>View More</ButtonStyleHover>
            <div className="space-y-4">
              
            </div>
          </div>
          <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-left">
            <PortfolioSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
