import React from 'react'
import imgAbout from '../../public/Images/imgAbout.png';
import { H1 } from '../Components/Reusable Styles/H1';
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { Section } from '../Components/Reusable Styles/Section';
import { Grid } from '../Components/Reusable Styles/gridCol'
import { TextCol } from '../Components/Reusable Styles/textCol';
import { ImgCol } from "../Components/Reusable Styles/imgCol";

const About = () => {
  return (
    <Section>
        <Grid>
            <ImgCol>
                <img src={imgAbout} draggable="false" className=""/>
            </ImgCol>

            <TextCol>
                <H1>About Me</H1>

                <Paragraph>Hey there! I'm your go-to graphic and web designer with a zest for all things creative. I'm on a mission to make your brand shine with designs that are not just good but great! 
                <br /><br />
                My work is a joyful blend of pixels, colors, and innovation. I've had the privilege of working on a wide range of projects, from startups to well-established brands, and I'm eager to bring that experience to your project.
                </Paragraph>
            </TextCol>
        </Grid>
    </Section>
  )
}

export default About