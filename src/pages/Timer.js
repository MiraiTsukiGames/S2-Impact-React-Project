import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../components/api/Api";
import Countdown from "../components/timercomponent/Countdown";
import Button from "../components/button/Button";
import Track from "../components/audiocomponent/Audio";
import Title from "../components/title/Title";
import { Helmet } from "react-helmet";
import "./Timer.css";

const Timer = () => {
  const audioRef = useRef(new Audio()); // Audio hook
  const [isActive, setIsActive] = useState(false); // Active timer hook
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  return (
    <section className="container">
      <Helmet>
        <title>Timer</title>
        <meta name="description" content="timer for meditation-app" />
      </Helmet>
      <Title text="Timer" />
      <div className="countdownContainer">
        <Countdown
          audioRef={audioRef}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <div className="trackContainer">
        <Track audioRef={audioRef} isActive={isActive} />
      </div>
      <div className="quoteContainer">
        <Quote />
      </div>
      <div className="buttonContainer">
        <Button onClick={() => navigate("/")} text="Home" />
      </div>
    </section>
  );
};

export default Timer;
