import React from "react";
import styles from "./Title.module.css";

const Title = ({ testo }) => {
  return <h1 className={styles.title}>{testo}</h1>;
};

export default Title;
