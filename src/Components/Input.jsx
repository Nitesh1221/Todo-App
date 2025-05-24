import React from 'react'

const Input = (props) => {
  return (
    <input className={`bg-black/10 p-2 rounded-sm  ${props.className}`} type={props.type} placeholder={props.placeholder} ref={props.ref} onClick={props.onClick}  />
  )
}

export default Input