import React from 'react'
//@ts-ignore
import { Link } from 'react-router-dom'
import ProductsPage from '../../pages/ProductsPage'
export const ProductsButton = () => {
  return (
    <Link to='/ProductsPage' className='btn'>
      all products
    </Link>
  )
}
