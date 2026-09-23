import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const About = () => {

    let ctx = useContext(UserContext);

    console.log(ctx)
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  )
}

export default About
