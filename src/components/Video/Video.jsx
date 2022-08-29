import React from 'react'

const Video = ({src, style}) => {
  return (
    <iframe src={src} className={style}></iframe>
  )
}

export default Video