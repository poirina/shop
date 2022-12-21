import React, { useEffect } from 'react'
//@ts-ignore
import styled from 'styled-components'
import {  ProductList, Sort, PageHero } from '../components'
import { useFilterContext } from '../context/filterContext'

const ProductsPage = () => {
  const { clearFilters, isClickFromServices, resetIsClickFromServices } =
    useFilterContext()

  useEffect(() => {
    if (isClickFromServices) {
      resetIsClickFromServices()
    } else {
      // when component mounts clear the filter
      clearFilters()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`


export default ProductsPage
