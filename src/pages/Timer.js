import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../components/api/Api";
import Countdown from "../components/timercomponent/Countdown";
import Button from "../components/button/Button";
import Track from "../components/audiocomponent/Audio";
import Title from "../components/Title/Title";
import styles from "./Timer.module.css";

const Timer = () => {
  const audioRef = useRef(new Audio());
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.container}>
      <Title testo="Timer" />
      <div className={styles.countdownContainer}>
        <Countdown audioRef={audioRef} />
      </div>
      <div className={styles.trackContainer}>
        <Track audioRef={audioRef} />
      </div>
      <div className={isOpen ? "open" : ""}>
      <button className="toggle-button" onClick={toggleMenu}>
      Toggle Menu
      </button>
      <div className={styles.quoteContainer}>
        <Quote />
      </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => navigate("/")} text="Home" />
      </div>
    </section>
  );
};

export default Timer;
