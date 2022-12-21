import React from 'react'
//@ts-ignore
import { FaBars } from 'react-icons/fa'
import { useProductsContext } from '../../context/productsContext'

export const MenuIcon = () => {
  const { openSidebar } = useProductsContext()
  return (
    <button type='button' className='nav-toggle' onClick={openSidebar}>
      <FaBars />
    </button>
  )
}
