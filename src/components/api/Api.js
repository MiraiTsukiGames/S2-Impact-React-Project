import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Api.module.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const res = await axios.get(`https://api.quotable.io/random?maxLength=50`);
    setQuote(res.data.content);
    setAuthor(res.data.author);
  };

  return (
    <>
      <h2 className={styles.title}>Quotes</h2>
      <p className={styles.quotes}>{quote}</p>
      <p className={styles.author}>{author}</p>
      <button onClick={getQuote}>Quotes</button>
    </>
  );
};

export default Quotes;
