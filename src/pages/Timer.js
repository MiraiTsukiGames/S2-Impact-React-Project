import React, { useRef } from 'react';
import Quote from '../components/api/Api';
import Countdown from '../components/timercomponent/Countdown';
import Button from '../components/button/Button';
import Track from '../components/audiocomponent/Audio';
import Title from '../components/Title/Title';
import styles from './Timer.module.css';

const Timer = () => {
  const audioRef = useRef(new Audio());

  return (
    <section className={styles.container}>
      <Title testo="Timer"/>
      <div className={styles.countdownContainer}>
        <Countdown audioRef={audioRef} />
      </div>
      <div className={styles.trackContainer}>
        <Track audioRef={audioRef} />
      </div>
      <div className={styles.quoteContainer}>
        <Quote />
      </div>
      <div className={styles.buttonContainer}>
      <Button onClick={() => (window.location.href = '/')} text="Home" />
      </div>
    </section>
  );
};

export default Timer;
