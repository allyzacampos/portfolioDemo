import React from "react";
import { Button } from "@material-tailwind/react";
import imgHero from './header-img.png';
import { H1 } from '../Components/H1';
import { Paragraph } from "../Components/Paragraph";
import { Section } from "../Components/Section";
import { Grid } from '../Components/gridCol';
import { TextCol } from '../Components/textCol';
import { ImgCol } from "../Components/imgCol";

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