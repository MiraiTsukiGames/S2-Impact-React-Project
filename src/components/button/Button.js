import React from 'react'

export default function button(props) {
  return (
   <button disabled={props.disabled} onClick={props.onClick}>
        {props.text}
   </button>
  )
}
