import React from 'react'
import CircularProgressBar from '../Components/ProgressBar'
import { Paragraph } from '../Components/Reusable Styles/Paragraph'
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
        <div className='flex'>
        {tools.map((tool, index) => (
          <Card key={index} className='flex-shrink-0 w-80 mx-4'>
            <CardBody>
              <div className='text-center'>
                <CircularProgressBar targetValue={tool.targetValue} />
                <Paragraph>{tool.title}</Paragraph>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  };
  
  
  
  
  
