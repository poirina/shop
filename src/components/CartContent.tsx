import React from 'react'
import { useCartContext } from '../context/cartContext'
//@ts-ignore
import { Link } from 'react-router-dom'
import CartColumns from './CartColums'
import CartItem from './CartItem'
//@ts-ignore
import styled from 'styled-components'
import CartTotals from './CartTotal'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper className='section section-center'>
    <CartColumns />
    {cart.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />
    })}
    <hr />
    <Buttons clearCart={clearCart} />
    <CartTotals />
  </Wrapper>
  )
}

const Buttons: React.FC<{ clearCart: () => void }> = ({ clearCart }) => {
  return (
    <div className='link-container'>
      <Link to='/products' className='link-btn'>
        continue shopping
      </Link>
      <button type='button' className='link-btn clear-btn' onClick={clearCart}>
        clear shopping cart
      </button>
    </div>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    column-gap: 0.25rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
