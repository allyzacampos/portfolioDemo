import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
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
    }, 5); // Decreased interval to 10 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [percentage, targetValue]);

  return (
      <div style={{ width: 80 }}>
        <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`} />
      </div>
  );
}
export default CircularProgressBar;