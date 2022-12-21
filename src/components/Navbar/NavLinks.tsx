import React from 'react'
//@ts-ignore
import { Link } from 'react-router-dom'
//@ts-ignore

import { useProductsContext } from '../../context/productsContext'

export const NavLinks: React.FC<{ className: string; isSidebar?: boolean }> = ({
  className,
  isSidebar,
}) => {
  const { closeSidebar } = useProductsContext()
  return (
    <ul className={className}>
   
      {/* 'checkout' only available in sidebar, not in Navbar */}
      {isSidebar && (
        <li>
          <Link to='/checkout' onClick={closeSidebar}>
            checkout
          </Link>
        </li>
      )}
    </ul>
  )
}
