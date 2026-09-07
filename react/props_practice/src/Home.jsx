import React from 'react'
import Sidebar from './Sidebar'
const Home = (props) => {

    console.log(props)
  return (
    <div style={{backgroundColor:"aqua",color:"black"}}>
      <h1>This is Home Page</h1>
      <p>{props.a}</p>
      <p>{props.b}</p>
        <Sidebar color="red" text="helo i am coming from home page"/>
    </div>
  )
}

export default Home
