import React, { useState, useEffect } from "react";
import SpecificButton from "../button/Playbutton";
import styles from "./Countdown.module.css";

export default function Countdown({ audioRef, isActive, setIsActive }) {
  // Countdown Time hook
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 10,
    seconds: 59,
  }); 
  const [inputsEnabled, setInputsEnabled] = useState(true); // Inputs Enabled hook

  useEffect(() => {
    let intervalId = null; // Interval id variable

    // Check if the timer is active
    if (isActive) {
      audioRef.current.play(); // Audio play
      intervalId = setInterval(() => {
        // Timer active
        setCountdownTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime; // Hours, minutes and seconds variables

          // Calculate hours, minutes, seconds
          let newSeconds = seconds - 1;
          let newMinutes = newSeconds < 0 ? minutes - 1 : minutes;
          let newHours = newMinutes < 0 ? hours - 1 : hours;

          newSeconds = newSeconds < 0 ? 59 : newSeconds;
          newMinutes = newMinutes < 0 ? 59 : newMinutes;
          newHours = newHours < 0 ? 0 : newHours;

          // Check if seconds, minutes and hours is 0 stop timer
          if (newSeconds === 0 && newMinutes === 0 && newHours === 0) {
            setIsActive(false);
            setInputsEnabled(true);
          }

          // Return hours, minutes, seconds
          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);
    } else {
      clearInterval(intervalId); //Clear timer
      audioRef.current.pause(); // Audio pause
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, audioRef, setIsActive]);

  //Handle Time Change function event key Backspace
  const handleTimeChange = (event, name) => {
    const inputValue = event.target.value;
    const key = event.key;

    if (key === "Backspace") {
      setCountdownTime((prevTime) => ({
        ...prevTime,
        [name]: "",
      }));
      return;
    }

    // Min and max value
    const parsedValue = parseInt(inputValue);

    // Check if the value is NaN or exceeds the maximum value
    if (isNaN(parsedValue)) return;

    const maxValue = 59;
    const minValue = 0;

    // Clamp min and max value
    let clampedValue = Math.min(Math.max(parsedValue, minValue), maxValue);
      
    // Clamp only for the "hours" field
    if (name === "hours") {
      const maxHoursValue = 23;
      clampedValue = Math.min(clampedValue, maxHoursValue);
    }

    setCountdownTime((prevTime) => ({
      ...prevTime,
      [name]: clampedValue,
    }));
  };

  // Handle click button stop and play function
  const handleClick = () => {
    // Check if countdown is all empty or 0 timer false
    if (
      (countdownTime.hours === "" || countdownTime.minutes === "" || countdownTime.seconds === "") ||
      (countdownTime.hours === 0 && countdownTime.minutes === 0 && countdownTime.seconds === 0)
    ) {
      setIsActive(false);

      // If countdown input hours, minutes or seconds is empty or exceeds the maximum value, set to 0
      setCountdownTime({
        hours: (countdownTime.hours === ""  ? 0 : countdownTime.hours),
        minutes: (countdownTime.minutes === "" ? 0 : countdownTime.minutes),
        seconds: (countdownTime.seconds === "" ? 0 : countdownTime.seconds)
      });
      return;
    }

    setIsActive((current) => !current);
    setInputsEnabled((enabled) => !enabled);
  };

  return (
    <section>
      {/* Display the countdown timer */}
      <span className={styles.timer}>
        {countdownTime.hours} : {countdownTime.minutes} :
        {countdownTime.seconds}
      </span>
      {/* Display the instruction */}
      <p className={styles.paragraph}>Please select the time and click play</p>
      {/* Render the SpecificButton component */}
      <SpecificButton onClick={handleClick} isActive={isActive} />
        {/* Render Hours, minutes, seconds letters*/}
        <div className={styles.letters}>
        <p>Hours:</p>
        <p>Minutes:</p>
        <p>Seconds:</p>
        </div>
        {/* Render Hours, minutes, seconds input*/}
        <div className={styles.numbers}>
        <input
          type="number"
          id="hours"
          min={0}
          max={23}
          placeholder={0}
          onKeyDown={(event) => handleTimeChange(event, "hours")}
          onChange={(event) => handleTimeChange(event, "hours")}
          disabled={!inputsEnabled}
        />
        <input
          type="number"
          id="minutes"
          min={0}
          max={59}
          placeholder={0}
          onKeyDown={(event) => handleTimeChange(event, "minutes")}
          onChange={(event) => handleTimeChange(event, "minutes")}
          disabled={!inputsEnabled}
        />
        <input
          type="number"
          id="seconds"
          min={0}
          max={59}
          placeholder={0}
          onKeyDown={(event) => handleTimeChange(event, "seconds")}
          onChange={(event) => handleTimeChange(event, "seconds")}
          disabled={!inputsEnabled}
        />
        </div>
    </section>
  );
}
