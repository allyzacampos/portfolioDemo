import React from 'react'
import { Paragraph } from '../Components/Reusable Styles/Paragraph'
import { Section } from '../Components/Reusable Styles/Section'
import { TextCol } from '../Components/Reusable Styles/textCol'
import { H1 } from '../Components/Reusable Styles/H1'
import { Card, CardBody } from "@material-tailwind/react";
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold'
import graphicIcon from '../../public/Icons/graphic-design.svg';
import webIcon from '../../public/Icons/web-design.svg';
import devIcon from '../../public/Icons/web-dev.svg';

export const Services = () => {

  return (
    <Section>
        <TextCol>
            <H1>How Can I Help</H1>
            <Paragraph>Are you looking to elevate your online presence or give your brand a fresh new look? I'm here to assist you in creating impactful designs and seamless online experiences. Here's how I can help you:</Paragraph>
        </TextCol>
        
        <div className='md:px-10 w-full px-5 sm-md:flex-none lg:flex justify-center gap-4'>
            <Card className="mt-6 p-5 rounded-[30px] border-[1px] border-green-600 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={graphicIcon} draggable="false" className="mb-7"/>

                    <ParagraphBold>Graphic Design</ParagraphBold>
                    <Paragraph>Create eye-catching logos, marketing materials, and custom graphics.</Paragraph>
                </CardBody>
            </Card>

            <Card className="mt-6 p-5 rounded-[30px] border-[1px] border-green-600 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={webIcon} draggable="false" className="mb-7"/>

                    <ParagraphBold>Web Design</ParagraphBold>
                    <Paragraph>Design beautiful, user-friendly websites that reflect your brand.</Paragraph>
                </CardBody>
            </Card>

            <Card className="mt-6 p-5 rounded-[30px] border-[1px] border-green-600 w-full shadow-none">
                <CardBody className='p-5 space-y-2'>
                    <img src={devIcon} draggable="false" className="mb-7"/>

                    <ParagraphBold>Wordpress Development</ParagraphBold>
                    <Paragraph>Build and customize WordPress websites for a strong online presence.</Paragraph>
                </CardBody>
            </Card>
        </div>
    </Section>
  )
}
