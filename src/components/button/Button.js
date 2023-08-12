import React from 'react'

export default function button(props) {
  return (
   <button onClick={props.onClick}>
        {props.text}
   </button>
  )
}
