import React from "react";
import { Button } from "@material-tailwind/react";
import imgHero from '../../public/Images/header-img.png';
import { H1 } from '../Components/Reusable Styles/H1';
import { Paragraph } from "../Components/Reusable Styles/Paragraph";
import { Section } from "../Components/Reusable Styles/Section";
import { Grid } from '../Components/Reusable Styles/gridCol';
import { TextCol } from '../Components/Reusable Styles/textCol';
import { ImgCol } from "../Components/Reusable Styles/imgCol";

function Hero() {
  return ( 
    <Section>
      <Grid>
        <TextCol>
          <H1>Good Day!</H1>
          <Paragraph>Welcome to my creative world! I'm Ally, a passionate Web and Graphic Designer with 
          a knack for turning ideas into stunning realities.</Paragraph>
          <Button variant="outlined" className='rounded-full bg-green-600 text-white py-2 px-8'>Get Started</Button>
        </TextCol>

        <ImgCol>
          <img src={imgHero} draggable="false" className=""/>
        </ImgCol>
      </Grid>
    </Section>
   );
}

export default Hero;