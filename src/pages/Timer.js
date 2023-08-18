import React, { useRef } from 'react';
import Quote from '../components/api/Api';
import Countdown  from '../components/timercomponent/Countdown';
import Button from '../components/button/Button';
import Track from '../components/audiocomponent/Audio';


const Timer = () => {
  const audioRef = useRef(new Audio());
  
return (
    <div className="container">
      <>
      <Countdown  audioRef={audioRef}/>
      </>
      <>
      <Track audioRef={audioRef} />
      </>
          <div className="quotes">
            <Quote />
        </div>
        <Button onClick={() => window.location.href = '/'} text="Home"/>
       </div>
       );
}

export default Timer;
