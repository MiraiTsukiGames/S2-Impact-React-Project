import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import styles from './Countdown.module.css';

export default function Countdown({ audioRef }) {
  const [time, setTime] = useState({ hours: 0, minutes: 10, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const [inputsEnabled, setInputsEnabled] = useState(true);
  
  useEffect(() => {
    let intervalId = null;

    if (isActive) {
      audioRef.current.play();
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            setIsActive(false);
            setInputsEnabled(true);
            clearInterval(intervalId);
            audioRef.current.pause();
            return { hours: 0, minutes: 0, seconds: 0 };
          }

          let newSeconds = seconds - 1;
          let newMinutes = minutes;
          let newHours = hours;

          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes -= 1;
          }

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
          }

          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
      audioRef.current.pause();
      
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, audioRef]);

  const handleTimeChange = (event, name) => {
    const value = event.target.value;
    const key = event.key;

    if (key === 'Backspace') {
      setTime({ ...time, [name]: '' });
      return;
    }

    const MAX_VALUES = {
      hours: 23,
      minutes: 59,
      seconds: 59,
    };

    const MIN_VALUES = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) return;

    const maxValue = MAX_VALUES[name];
    const minValue = MIN_VALUES[name];
    if (parsedValue > maxValue || parsedValue < minValue) return;

    setTime((prevTime) => ({
      ...prevTime,
      [name]: parsedValue,
    }));
  };

  const handleClick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      return;
    }
    setIsActive((current) => !current);
    setInputsEnabled((enabled) => !enabled);
  };

  return (
    <section>
      <span className={styles.timer}>{time.hours} : {time.minutes} : {time.seconds}</span>
      <p className={styles.paragraph}>Please select the time and click play</p>
      <Button className={styles.play} onClick={handleClick}  text={isActive ? 'Pause' : 'Play'} />
      <div>
      <label htmlFor="hours" className={styles.letters}>Hours:</label>
      <input
        type="number"
        id="hours"
        min={0}
        max={23}
        placeholder="0"
        onKeyDown={(event) => handleTimeChange(event, 'hours')}
        onChange={(event) => handleTimeChange(event, 'hours')}
        disabled={!inputsEnabled}
        className={styles.numbers}
      />
      <label htmlFor="minutes" className={styles.letters}>Minutes:</label>
      <input
        type="number"
        id="minutes"
        min={0}
        max={59}
        placeholder="10"
        onKeyDown={(event) => handleTimeChange(event, 'minutes')}
        onChange={(event) => handleTimeChange(event, 'minutes')}
        disabled={!inputsEnabled}
        className={styles.numbers}
      />
      <label htmlFor="seconds" className={styles.letters}>Seconds:</label>
      <input
        type="number"
        id="seconds"
        min={0}
        max={59}
        placeholder="0"
        onKeyDown={(event) => handleTimeChange(event, 'seconds')}
        onChange={(event) => handleTimeChange(event, 'seconds')}
        disabled={!inputsEnabled}
        className={styles.numbers}
      />
      </div>
    </section>
  );
}

