import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../components/api/Api";
import Countdown from "../components/timercomponent/Countdown";
import Button from "../components/button/Button";
import Track from "../components/audiocomponent/Audio";
import Title from "../components/Title/Title";
import "./Timer.css";

const Timer = () => {
  const audioRef = useRef(new Audio());
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="container">
      <Title testo="Timer" />
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
