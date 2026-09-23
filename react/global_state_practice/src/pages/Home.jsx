import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Home = () => {

    let ctx = useContext(UserContext);
    console.log(ctx)
  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  )
}

export default Home
