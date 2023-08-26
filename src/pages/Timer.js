import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../components/api/Api";
import Countdown from "../components/timercomponent/Countdown";
import Button from "../components/button/Button";
import Track from "../components/audiocomponent/Audio";
import Title from "../components/title/Title";
import "./Timer.css";

const Timer = () => {
  const audioRef = useRef(new Audio()); // Audio hook
  const [isActive, setIsActive] = useState(false); // Active timer hook
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  return (
    <section className="container">
      <Title text="Timer" /> {/* Component for the section title */}
      <div className="countdownContainer">
        <Countdown
          audioRef={audioRef}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        {/* Component for the section countdown */}
      </div>
      <div className="trackContainer">
        <Track audioRef={audioRef} isActive={isActive} />
        {/* Component for the section track */}
      </div>
      <div className="quoteContainer">
        <Quote /> {/* Component for the section quote */}
      </div>
      <div className="buttonContainer">
        <Button onClick={() => navigate("/")} text="Home" />
        {/* Button to initiate navigation to the "home" page */}
      </div>
    </section>
  );
};

export default Timer;
