import React from 'react';
import { Timeline, TimelineItem, TimelineHeader, TimelineConnector, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { Paragraph } from '../Components/Reusable Styles/Paragraph'

export const TimelineExp = () => {
  return (
    <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon />
              <Paragraph>Company</Paragraph>
            </TimelineHeader>
            <TimelineBody>
              <Paragraph>Insert Text Here</Paragraph>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon />
              <Paragraph>Company</Paragraph>
            </TimelineHeader>
            <TimelineBody>
              <Paragraph>Insert Text Here</Paragraph>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
  );
};
