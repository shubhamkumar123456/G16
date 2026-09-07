import React from 'react'
import './App.css'
import Home from './Home'
import About from './About';

const App = () => {
  let x = 10;
  let y = "john"

  return (
    <div style={{backgroundColor:"black", color:"white", padding:"20px"}}>
      <h1>This is App component</h1>
      <Home a={x} b={y}/>
      {/* <Home a={88} b={"jack"}/> */}
      <About/>
    </div>
  )
}

export default App
