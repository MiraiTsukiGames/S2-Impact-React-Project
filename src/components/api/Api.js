import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button/Button";
import styles from "./Api.module.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const res = await axios.get(`https://api.quotable.io/random`);
    setQuote(res.data.content);
    setAuthor(res.data.author);
  };

  return (
    <>
      <h2 className={styles.title}>Quotes</h2>
      <p className={styles.quotes}>{quote}</p>
      <p className={styles.author}>{author}</p>
      <Button onClick={getQuote} text="Quotes" />
    </>
  );
};

export default Quotes;
