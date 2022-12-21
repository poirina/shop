import React from 'react'
//@ts-ignore
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
//@ts-ignore
import { Navbar,  Footer } from './components/index'
import {
  HomePage,
  ErrorPage,
  CartPage,
  SuccessfulPayment,
  ShippingPage,
  ProductsPage,
  SingleProductPage
} from './pages'

function App() {
  type Props = {
    children?: React.ReactNode
  };
 const Layout: React.FC<Props> = ({children}) =>{
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }
  return (
    <Router>
      <Layout>
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/ShippingPage' element={<ShippingPage />}/>
          <Route  path='/CartPage' element={ <CartPage />} />
          <Route  path='/ProductsPage' element={<ProductsPage />} />
          <Route  path='/Products/:slug' element={<SingleProductPage />}/>
          <Route  path='/Successful_payment' element={<SuccessfulPayment />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App