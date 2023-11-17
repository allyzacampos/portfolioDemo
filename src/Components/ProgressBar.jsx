import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({ targetValue }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const increment = targetValue / 100;
    const interval = setInterval(() => {
      if (percentage < targetValue) {
        setPercentage((prevPercentage) => prevPercentage + increment);
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [percentage, targetValue]);

  return (
    <div className='w-20'>
      <CircularProgressbar
        value={percentage}
        text={`${Math.round(percentage)}%`}
        styles={buildStyles({
          pathColor: '#16A34A',
          textColor: 'inherit',
          trailColor: '#aadebe', 
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
