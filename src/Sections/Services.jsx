import React from 'react'
import { Paragraph } from '../Components/Reusable Styles/Paragraph'
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold'
import graphicIcon from '../../public/Images/Services/graphic.svg';
import webIcon from '../../public/Images/Services/webdesign.svg';
import devIcon from '../../public/Images/Services/worddev.svg';

export const Services = () => {

  return (
    <div className="container mx-auto my-[90px] md:px-10 sm:px-5 overflow-hidden" data-aos="zoom-in-right" id='services'>
        <div className="md:p-10 p-5 space-y-4">
            <Typography className='h2 font-bold text-black-dark'>How Can I Help</Typography>
            <Paragraph>Are you looking to elevate your online presence or give your brand a fresh new look? I'm here to assist you in creating impactful designs and seamless online experiences. Here's how I can help you:</Paragraph>
        </div>
        
        <div className='md:px-10 w-full sm-md:flex-none lg:flex justify-center gap-8'>
            <Card className="sm:mt-6 md:mt-6 lg:mt-0 p-5 rounded-[30px] border-[1px] border-gray-300 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={graphicIcon} draggable="false" className="mb-7 transform hover:rotate-[-12deg] transition duration-500"/>

                    <ParagraphBold>Graphic Design</ParagraphBold>
                    <Paragraph>Create eye-catching logos, marketing materials, and custom graphics.</Paragraph>
                </CardBody>
            </Card>

            <Card className="sm:mt-6 md:mt-6 lg:mt-0 p-5 rounded-[30px] border-[1px] border-gray-300 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={webIcon} draggable="false" className="mb-7 transform hover:rotate-[-12deg] transition duration-500"/>

                    <ParagraphBold>Web Design</ParagraphBold>
                    <Paragraph>Design beautiful, user-friendly websites that reflect your brand.</Paragraph>
                </CardBody>
            </Card>

            <Card className="sm:mt-6 md:mt-6 lg:mt-0 p-5 rounded-[30px] border-[1px] border-gray-300 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={devIcon} draggable="false" className="mb-7 transform hover:rotate-[-12deg] transition duration-500"/>

                    <ParagraphBold>Wordpress Development</ParagraphBold>
                    <Paragraph>Build and customize WordPress websites for a strong online presence.</Paragraph>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}
