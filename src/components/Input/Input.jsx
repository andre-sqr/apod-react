import React from 'react'

const Input = ({type, style, onChange}) => {
  return (
    <input className={style} type={type} onChange={onChange}></input>
  )
}

export default Input
