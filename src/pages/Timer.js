import React, { useRef } from 'react';
import Quote from '../components/api/Api';
import Countdown  from '../components/timercomponent/Countdown';
import Button from '../components/button/Button';
import Track from '../components/audiocomponent/Audio';
import Title from '../components/Title/Title';
import styles from './Timer.module.css';

const Timer = () => {
  const audioRef = useRef(new Audio());
  
return (
    <div className={styles.container}>
      <Title testo="Timer"/>
      <p className={styles.paragraph}>Please select the time and click play</p>
      <>
      <Countdown  audioRef={audioRef}/>
      </>
      <>
      <Track audioRef={audioRef} />
      </>
      <>
      <Quote />
      </>
      <Button onClick={() => window.location.href = '/'} text="Home"/>
       </div>
       );
}

export default Timer;
