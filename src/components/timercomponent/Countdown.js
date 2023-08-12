import React, { useState, useEffect } from 'react'
import Button from '../button/Button'

export default function Countdown() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive) {
     timer = setTimeout(() =>{
      if (seconds === 0 && minutes === 0) {
        setIsActive(false);
      } else if (seconds === 0 && minutes > 0){
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
  } else {
    clearTimeout(timer);
  }

  return () => {
    clearTimeout(timer);
  };
}, [isActive, minutes, seconds]);


  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <h2> {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h2>
       <Button onClick={handleClick} text={isActive ? "Pause" : "Start"}/> 
    </>
  )
}

