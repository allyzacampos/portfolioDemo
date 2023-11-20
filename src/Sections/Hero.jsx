import React from "react";
import imgHero from '../../public/Images/Hero/main-hero.png';
import imgElement1 from '../../public/Images/Hero/hero-element1.svg';
import imgElement2 from '../../public/Images/Hero/hero-element2.svg';
import imgBg from '../../public/Images/Hero/hero-bg2.svg';
import { H1 } from '../Components/Reusable Styles/H1';
import { Paragraph } from "../Components/Reusable Styles/Paragraph";
import { Grid } from '../Components/Reusable Styles/gridCol';
import { ButtonStyleHover } from "../Components/ButtonStyleHover";

function Hero() {
  const backgroundStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-[#eceff5] rounded-b-[95px] py-[70px] sm:py-[50px] bg-fixed overflow-hidden" style={backgroundStyle} id="hero">
      <div className="container mx-auto">
        <Grid>
          <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-right">
            <H1>Good Day!</H1>
            <Paragraph>Welcome to my creative world! I'm Ally, a passionate Web and Graphic Designer with 
            a knack for turning ideas into stunning realities.</Paragraph>
            <ButtonStyleHover>Get Started</ButtonStyleHover>
          </div>

          <div className="p-5 md:p-3 justify-center items-center flex">
            <div className="min-w-min relative">
              <img src={imgHero} alt="Header" draggable="false" className="p-5"/>
              <img src={imgElement1} alt="Header" draggable="false" className="absolute lg:max-w-[250px] md:max-w-[200px] left-0 bottom-0 mb-[6rem] animate-shake animate-infinite animate-duration-[1500ms] animate-ease-linear"/>
            <img src={imgElement2} alt="Header" draggable="false" className="absolute right-0 top-0 animate-wiggle animate-infinite animate-duration-[1000ms] animate-ease-linear"/>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Hero;
