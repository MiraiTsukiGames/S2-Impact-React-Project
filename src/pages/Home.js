import React from "react";
import Button from "../components/button/Button";
import Title from "../components/Title/Title";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.banner}>
      <Title testo="Welcome to Borcelle Yoga Studio" />
      <p>Your healthcare is our mission.</p>
      <Button
        onClick={() => (window.location.href = "/timer")}
        text="Getting started"
      />
    </section>
  );
};

export default Home;
