import React, { useEffect } from 'react';
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold';
import { TimelineExp } from '../Components/TimelineExp';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { activities } from '../Utils/Data';
import { ProgressBarLine } from '../Components/ProgressBarLine';
import { ChipLanguage } from '../Components/ChipLanguage';
import { ChipSkills } from '../Components/ChipSkills';
import { skillBackground } from '../Utils/Data';

export const SkillsAndExperience = () => {
  useEffect(() => {
    AOS.init();
    
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <div className="bg-[#ECEFF5] rounded-t-[95px] py-[80px]" data-aos="zoom-in-up" style={skillBackground} id='portfolio'>
      <div className="container mx-auto md:px-10 sm:px-0">
        <div className="md:p-10 p-5 space-y-4" >
          <Typography className='h2 font-bold text-black-dark'>Skills & Experience</Typography>
          <Paragraph>
            I'm your creative Swiss Army knife, skilled in graphic design, web wizardry, and WordPress magic. I've crafted logos, built beautiful websites, and sprinkled SEO fairy dust to boost online visibility. Let's make your project sparkle!
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center" data-aos="zoom-out-right">
          <div className="md:p-10 p-5 space-y-4">
            <ParagraphBold>Experience</ParagraphBold>
            <TimelineExp />
          </div>
          
          <div className='p-5 md:p-10 space-y-4' data-aos="zoom-out-left">
            <ParagraphBold>Design Tools</ParagraphBold>
              <ChipSkills />
              <br />
              <ParagraphBold>Skills</ParagraphBold>
              <ChipLanguage />
              {/* <ParagraphBold>Hobbies</ParagraphBold>
              <div className="flex flex-wrap">
              {activities.map((activity, index) => (
                <Card key={index} className='bg-transparent shadow-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                  <CardBody className='space-y-4'>
                    <img
                      src={activity.image}
                      alt="Header"
                      draggable="false"
                      className="inset-0 transform hover:rotate-[-12deg] transition duration-500 w-min h-12"
                    />
                    <Typography className='p-sm text-black-dark w-full'>{activity.name}</Typography>
                  </CardBody>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
