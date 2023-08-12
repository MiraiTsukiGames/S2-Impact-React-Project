import React from 'react';
import Quote from '../components/api/Api';
import Countdown from '../components/timercomponent/Countdown';

const Timer = () => {
 
  return (
    <div className="container">
      <div className="countdown">
        <Countdown />
          </div>
          <div className="quotes">
            <Quote />
        </div>
    </div>
  );
}




export default Timer;
