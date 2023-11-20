import React from 'react';
import { Timeline, TimelineItem, TimelineHeader, TimelineConnector, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { ParagraphBold } from './Reusable Styles/ParagraphBold';
import { Typography } from '@material-tailwind/react';

export const TimelineExp = () => {
  const iconStyle = {
    backgroundColor: '#F2A227',
  };

  return (
    <div className="">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon style={iconStyle}/>
            <ParagraphBold><span className='text-[#16A34A]'>2019</span> Linkage Web Development</ParagraphBold>
          </TimelineHeader>
          <TimelineBody className="">
            <Typography className='p-sm'>Web Designer Intern</Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem className="sm:mt-3">
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon style={iconStyle} />
            <ParagraphBold><span className='text-[#16A34A]'>2019 - Present</span> New Media Services</ParagraphBold>
          </TimelineHeader>
          <TimelineBody>
          <Typography className='p-sm'>Web Designer</Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
