import React from 'react';
import CircularProgressBar from '../Components/ProgressBar';
import { Paragraph } from '../Components/Reusable Styles/Paragraph';
import { Card, CardBody } from "@material-tailwind/react";

export const ToolsCard = () => {
  const tools = [
    {
      title: 'Adobe Photoshop',
      targetValue: 70,
    },
    {
      title: 'Adobe Illustrator',
      targetValue: 85,
    },
    {
      title: 'Figma',
      targetValue: 90,
    },
    {
      title: 'Canva',
      targetValue: 90,
    },
  ];

  return (
    <div className='flex flex-wrap gap-y-2'>
      {tools.map((tool, index) => (
        <Card
          key={index}
          color="transparent" 
          className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-5 mb-5 shadow-none space-y-4'
        >
          <CardBody>
            <div className='space-y-3 '>
              <CircularProgressBar targetValue={tool.targetValue} />
              <Paragraph>{tool.title}</Paragraph>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
