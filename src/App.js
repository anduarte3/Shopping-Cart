import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Checkout from './components/Checkout'
import './App.css';

function App() {
  return (
    <>
      <nav className='nav-bar'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/shop' className='nav-link'>Shop</Link>
        <Link to='/checkout' className='nav-link'>Checkout</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  )
}

export default App

//Home maybe add shop button
//Shop
//Display products and add button to cart
// and also add increment or decrement button
//Cart icon (that updates by adding products) 
//and leads to checkout on click

