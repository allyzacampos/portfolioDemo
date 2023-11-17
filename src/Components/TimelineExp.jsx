import React from 'react';
import { Timeline, TimelineItem, TimelineHeader, TimelineConnector, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { ParagraphBold } from './Reusable Styles/ParagraphBold';

export const TimelineExp = () => {
  const iconStyle = {
    backgroundColor: '#16A34A',
  };

  return (
    <div className="h-full w-full md:w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon style={iconStyle}/>
            <ParagraphBold><span className='text-[#F2A227]'>2019</span> Linkage Web Development</ParagraphBold>
          </TimelineHeader>
          <TimelineBody className="">
            <Paragraph>Web Designer Intern</Paragraph>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem className="sm:mt-3">
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon style={iconStyle} />
            <ParagraphBold><span className='text-[#F2A227]'>2019 - Present</span> New Media Services</ParagraphBold>
          </TimelineHeader>
          <TimelineBody>
            <Paragraph>Web Designer</Paragraph>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
