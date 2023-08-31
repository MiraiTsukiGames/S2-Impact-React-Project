import React from "react";
import Button from "../components/button/Button";
import Title from "../components/title/Title";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  return (
    <section className={styles.banner}>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Borcelle Yoga Studio</title>
    <meta name="description" content="meditation app" />
    </Helmet>
      <div className={styles.card}>
        <Title text="Welcome to Borcelle Yoga Studio" />
        <p>Your healthcare is our mission.</p>
        <Button onClick={() => navigate("timer")} text="Getting started" />
      </div>
    </section>
  );
};

