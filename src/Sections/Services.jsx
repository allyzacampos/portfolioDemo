import React from 'react'
import { Paragraph } from '../Components/Paragraph'
import { Section } from '../Components/Section'
import { Grid } from '../Components/gridCol'
import { TextCol } from '../Components/textCol'
import { H1 } from '../Components/H1'
import { Button, Card, CardBody } from "@material-tailwind/react";
import { ParagraphBold } from '../Components/ParagraphBold'
import { IconStyle } from '../Components/IconStyle';

export const Services = () => {

  return (
    <Section>
        <TextCol>
            <H1>How Can I Help</H1>
            <Paragraph>Are you looking to elevate your online presence or give your brand a fresh new look? I'm here to assist you in creating impactful designs and seamless online experiences. Here's how I can help you:</Paragraph>
        </TextCol>
        
        <div className='px-10 md:flex flex-none space-x-5 justify-center'>
            <Card className="mt-6 p-5 rounded-lg border-2 border-green-600">
                <CardBody className='p-5 space-y-2'>
                    <IconStyle>
                        <ion-icon name="color-fill"></ion-icon>
                    </IconStyle>

                    <ParagraphBold>Graphic Design</ParagraphBold>
                    <Paragraph>Create eye-catching logos, marketing materials, and custom graphics.</Paragraph>
                </CardBody>
            </Card>
            <Card className="mt-6 p-5 rounded-lg border-2 border-green-600">
                <CardBody className='p-5 space-y-2'>
                    <IconStyle>
                        <ion-icon name="desktop"></ion-icon>
                    </IconStyle>

                    <ParagraphBold>Web Design</ParagraphBold>
                    <Paragraph>Create eye-catching logos, marketing materials, and custom graphics.</Paragraph>
                </CardBody>
            </Card>
            <Card className="mt-6 p-5 rounded-lg border-2 border-green-600">
                <CardBody className='p-5 space-y-2'>
                    <IconStyle>
                        <ion-icon name="construct"></ion-icon>
                    </IconStyle>

                    <ParagraphBold>Wordpress Development</ParagraphBold>
                    <Paragraph>Create eye-catching logos, marketing materials, and custom graphics.</Paragraph>
                </CardBody>
            </Card>
        </div>
    </Section>
  )
}
