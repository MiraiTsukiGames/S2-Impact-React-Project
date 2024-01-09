import React from "react";
import styles from "./Footer.module.css";

// Footer function
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © {new Date().getFullYear()} Samanta Mancini </p>
    </footer>
  );
};

export default Footer;
