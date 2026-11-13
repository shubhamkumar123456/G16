import React from 'react'
import { memo } from 'react'

const About = () => {
    console.log("i am about page")
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  )
}

export default  memo(About)
