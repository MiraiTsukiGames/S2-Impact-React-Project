import React from 'react'
import styles from './Button.module.css';

export default function button(props) {
  return (
   <button className={styles.button} disabled={props.disabled} onClick={props.onClick}>
        {props.text}
   </button>
  )
}
