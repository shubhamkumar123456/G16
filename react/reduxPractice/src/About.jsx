// rafce

import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    let ctx = useSelector(state=>state.counter)
    console.log(ctx)
  return (
    <div style={{backgroundColor:"brown" , color:"white"}}>
      <h1>This is About Page</h1>
       <h1>Count : {ctx.value}</h1>
        <p>user name = {ctx.obj.name}</p>
        <p>user email = {ctx.obj.email}</p>

        {
            ctx.arr.map((ele, i)=>{
                return <p key={i}>{ele}</p>
            })
        }
    </div>
  )
}

export default About
