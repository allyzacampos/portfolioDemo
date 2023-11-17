import React, { useEffect } from 'react';
import { TextCol } from '../Components/Reusable Styles/textCol';
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold';
import { TimelineExp } from '../Components/TimelineExp';
import { Typography } from '@material-tailwind/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SkillsAndExperience = () => {
  useEffect(() => {
    AOS.init();
    
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <div className="bg-[#ECEFF5] rounded-t-[95px] py-[80px]" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 justify-center">
          <TextCol>
            <Typography className='h2 font-bold text-black-dark'>Skills & Experience</Typography>
            <Paragraph>I'm your creative Swiss Army knife, skilled in graphic design, web wizardry, and WordPress magic. I've crafted logos, built beautiful websites, and sprinkled SEO fairy dust to boost online visibility. Let's make your project sparkle!</Paragraph>
            <ParagraphBold>Experience</ParagraphBold>

            <div className=''>
              <TimelineExp />
            </div>
          </TextCol>

          <div className="md:p-10 p-5 space-y-[20px]">
          </div>
        </div>
      </div>
    </div>
  );
};
