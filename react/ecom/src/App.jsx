// rafce
import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import PNF from './pages/PNF'
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'


const App = () => {
  return (
    <div>
      {/* <h1>This is app component</h1>
      <Home/>
      <Cart/>
      <About/> */}
      <BrowserRouter>
          <Navbar/>
          <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/cart'  element={<Cart/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='*'  element={<PNF/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
