import React from 'react'

const Button = ({onClick, style, text, icon}) => {
  return (
    <button onClick={onClick} className={style}>{text}{icon}</button>
  )
}

export default Button