import React, { useState } from 'react'

const Counter = () => {

    // let x = 10; // normal variable
    // const [state , updateFunction] = useState(value)

    const [x, setX] = useState(10) // 11 //12
    let name = "john"

    function handleIncrement(){
      // x++;
      // console.log(x)
      // setX("hello")
      setX(x+1)
    }


    function handleDecrement(){
      setX(x-1)
    }

  return (
    <div>
      <h1>This is COunter page</h1>
      <p>{x}</p>
      <p>{name}</p>
      <p>Count : {x}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={()=>setX(10)}>Reset</button>
    </div>
  )
}

export default Counter
