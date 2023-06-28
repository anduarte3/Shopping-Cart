import { useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Checkout from './components/Checkout'
import cart from './img/cart.png'
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='main-page'>
      <nav className='nav-bar'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/shop' className='nav-link'>Shop</Link>
        <Link to='/checkout' className='nav-link'>
          <img src={cart} className='cart-icon'/>
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App

//Home maybe add shop button
//Shop
//Display products and add button to cart
// and also add increment or decrement button
//Cart icon (that updates by adding products) 
//and leads to checkout on click

