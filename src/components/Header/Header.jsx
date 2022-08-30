import React from 'react'
import S from './Header.module.css'
import rocket from '../../assets/rocket.svg'

const Header = () => {
  return (
    <div className={S.container}>
        <h1>APOD API</h1>
        <img src={rocket}/>
    </div>
  )
}

export default Header