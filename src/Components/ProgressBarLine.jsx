import React from 'react';
import { Progress, Typography } from "@material-tailwind/react";
import { skills } from '../Utils/Data';

export const ProgressBarLine = () => {
  return (
    <div className="w-full space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="mb-2 flex items-center justify-between gap-4">
          <Typography className="p-sm text-black-dark">{skill.item}</Typography>
          <Progress className={`h-3 bg-white rounded-full`} value={parseFloat(skill.percentage)} color="green"/>
          <Typography className="p-sm text-black-dark">
            {skill.value}
          </Typography>
        </div>
      ))}
    </div>
  );
};
