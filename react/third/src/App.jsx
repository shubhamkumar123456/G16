import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
          {/* <h1>This is App component</h1>
          <Home/>
          <About/>
          <Contact/> */}
          <BrowserRouter>
              <Routes>
                    <Route path='/'  element={<Home/>}/>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/xyz' element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
