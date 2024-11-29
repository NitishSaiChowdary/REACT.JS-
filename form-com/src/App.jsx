import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login.jsx';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/product-details/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import ProductDescription from './pages/product-details/ProductDescription';
import ProductSpecifications from './pages/product-details/ProductSpecifications';
import RatingsReviews from './pages/product-details/RatingsReviews';
import FrequentlyTogether from './pages/product-details/FrequentlyTogether';
import Layout from './components/Layout.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Login/>
  <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details/:productId" element={<ProductDetails />}>
        <Route path="description" element={<ProductDescription />} />
        <Route path="specifications" element={<ProductSpecifications />} />
        <Route path="rating-reviews" element={<RatingsReviews />} />
        <Route path="frequently-brought-together" element={<FrequentlyTogether />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Route>
  </Routes>
</>
  )
}

export default App
