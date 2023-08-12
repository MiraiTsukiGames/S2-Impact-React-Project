import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button/Button";

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
      <div className="content">
        <p>{quote}</p>
        <p>{author}</p>
        <Button onClick={getQuote} text="Quotes"/>
      </div>
    );
  }


export default Quotes;