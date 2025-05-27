import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} className={`bg-blue-500 px-4 py-1 rounded-md hover:cursor-pointer ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button