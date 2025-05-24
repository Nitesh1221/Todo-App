import React from 'react'

const Container = (props) => {
  return (
    <div className={`p-2 rounded-md border-slate-900 ${props.className}`} onClick={props.onClick}>
        {props.children}
    </div>
  )
}

export default Container