import React from 'react'

const Counter = () => {

    // Script-->write here any variable or function decleration
        let x = "hello"
        let y = 0;

        let count = 0

        function handleIncrement(){
            console.log("i am running")
        }

  return (
    <div>
      <h1>This is counter page</h1>
      <p>0</p>
      <p>{"x"}</p>
      <p>x</p>
      <p>{x}</p>
      <h3>{y}</h3>

      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default Counter
