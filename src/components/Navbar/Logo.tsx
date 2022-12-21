import React from 'react'
//@ts-ignore
import whiteLogo from '../assets/logo_white.png'
//@ts-ignore
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={whiteLogo} alt='cute buddy' />
    </Link>
  )
}
