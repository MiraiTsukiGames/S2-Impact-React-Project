import React, { useRef } from 'react';
import Quote from '../components/api/Api';
import Countdown  from '../components/timercomponent/Countdown';
import Button from '../components/button/Button';
import Track from '../components/audiocomponent/Audio';
import styles from './Timer.module.css';

const Timer = () => {
  const audioRef = useRef(new Audio());
  
return (
    <div className={styles.container}>
      <>
      <Countdown  audioRef={audioRef}/>
      </>
      <>
      <Track audioRef={audioRef} />
      </>
      <section className="quotes">
      <Quote />
      </section>
      <Button onClick={() => window.location.href = '/'} text="Home"/>
       </div>
       );
}

export default Timer;
