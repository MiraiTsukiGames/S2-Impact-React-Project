import React from 'react';
import Quote from '../components/api/Api';
import Countdown  from '../components/timercomponent/Countdown';
import Button from '../components/button/Button';


const Timer = () => {
 
  return (
    <div className="container">
      <>
      <Countdown />
      </>
          <div className="quotes">
            <Quote />
        </div>
        <Button onClick={() => window.location.href = '/'} text="Home"/>
    </div>
  );
}




export default Timer;
