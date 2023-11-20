import React from 'react'
import imgAbout from '../../public/Images/imgAbout.png';
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { Grid } from '../Components/Reusable Styles/gridCol'
import { Typography } from '@material-tailwind/react';


const About = () => {
  return (
    <div className="container mx-auto my-[90px] overflow-hidden" id='about'>
        <Grid>
            <div className="p-5 md:p-3 justify-center items-center flex" data-aos="zoom-in-right">
                <img src={imgAbout} draggable="false" className=""/>
            </div>

            <div className="md:p-10 p-5 space-y-4" data-aos="zoom-in-left">
                <Typography className='h2 font-bold text-black-dark'>About Me</Typography>

                <Paragraph>Hey there! I'm your go-to graphic and web designer with a zest for all things creative. I'm on a mission to make your brand shine with designs that are not just good but great! 
                <br /><br />
                My work is a joyful blend of pixels, colors, and innovation. I've had the privilege of working on a wide range of projects, from startups to well-established brands, and I'm eager to bring that experience to your project.
                </Paragraph>
            </div>
        </Grid>
    </div>
  )
}

export default About