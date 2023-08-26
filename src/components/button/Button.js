import React from "react";
import styles from "./Button.module.css";

export default function button(props) {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
