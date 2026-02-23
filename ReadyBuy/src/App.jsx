import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import AppNavbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ShopCateogory from './Pages/ShopCateogory'
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer'

import men_banner from './Components/assets/man_banner.png'
import women_banner from './Components/assets/woman_banner.png'
import kids_banner from './Components/assets/kids_banner.png'


function App() {

  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCateogory banner={men_banner} category='men'/>}/>
          <Route path='/women' element={<ShopCateogory banner={women_banner} category='women'/>}/>
          <Route path='/kids' element={<ShopCateogory banner={kids_banner} category='kids'/>}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
