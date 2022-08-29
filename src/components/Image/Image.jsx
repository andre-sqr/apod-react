import React from 'react'

const Image = ({src, style}) => {
  return (
    <img src={src} className={style}/>
  )
}

export default Image