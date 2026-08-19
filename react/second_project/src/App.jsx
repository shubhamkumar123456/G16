import React from 'react'
import Navbar from './Navbar'
import Demo from './Demo'
import GetTag from './GetTag'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ShowContent from './pages/ShowContent'

import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        {/* <Home/>
        <About/>
        <Contact/> */}

        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
                  <Route path="/"   element ={<Home/>}/>
                  <Route path="/xyz"   element ={<About/>}/>
                  <Route path="/abc"   element ={<Contact/>}/>
                  <Route path="/content"   element ={<ShowContent/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
