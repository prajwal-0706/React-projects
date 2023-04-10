import React, { useEffect, useState } from 'react';
import './Timer.css';
const Timer = () => {
  const [timer, setTimer] = useState(false);
  const [count, setCount] = useState(0);



  useEffect(() => {}, []);

  return (
    <div className="timer">
      <span className="time hr">00</span>
      <span className="colon">:</span>
      <span className="time min">00</span>
      <span className="colon">:</span>
      <span className="time sec">00</span>
    </div>
  );
};

export default Timer;
