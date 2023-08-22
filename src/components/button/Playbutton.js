import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import styles from "./Playbutton.module.css";

const SpecificButton = ({ onClick, isActive }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={isActive ? faPause : faPlay} />
    </button>
  );
};

export default SpecificButton;
