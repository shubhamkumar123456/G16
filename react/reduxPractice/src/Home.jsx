// rafce
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increment } from './redux/counterSlice'

const Home = () => {
     const ctx = useSelector(state => state.counter)
     console.log(ctx)  // {value:0, obj:{name,email}, arr:[]}

     let dispatch = useDispatch();
  return (
    <div style={{backgroundColor:"yellow" , color:"black"}}>
      <h1>This is Home Page</h1>

        <h1>Count : {ctx.value}</h1>
        <p>user name = {ctx.obj.name}</p>
        <p>user email = {ctx.obj.email}</p>

        <button onClick={()=>dispatch(increment())}>Increment</button>

        <button>Decrement</button>

        <button onClick={()=>dispatch(changeName("nick"))}>Change name</button>

        {
            ctx.arr.map((ele, i)=>{
                return <p key={i}>{ele}</p>
            })
        }

    </div>
  )
}

export default Home
