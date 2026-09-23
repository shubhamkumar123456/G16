
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserState from './context/UserState'

function App() {

  let x = 10;

  return (
    <>
        {/* <Home/>
        <About/> */}

      
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/abc' element={<About/>}/>
            </Routes>
        
        </BrowserRouter>
       

    </>
  )
}

export default App
