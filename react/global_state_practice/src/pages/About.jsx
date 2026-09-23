import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import ThemeState from '../context/ThemeState';

const About = () => {

    let ctx = useContext(UserContext);

    console.log(ctx)
  return (
    <ThemeState>
      <h1 style={{color:"white"}}>This is About Page</h1>
    </ThemeState>
  )
}

export default About
