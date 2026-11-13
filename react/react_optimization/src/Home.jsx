import React from 'react'
import { memo } from 'react'

const Home = (props) => {
    console.log("i am home")
  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  )
}

export default memo(Home)
