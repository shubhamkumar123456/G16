import React, { useState } from 'react'

const Demo = () => {

    // decleare any variable and function here ...
    let x = 10;
    let name = "john"

    // let val = true;
    // console.log(val)

    // const [state , updateStateFunction] = useState(value)
    const [val , setVal] = useState(true)
    console.log(val)
    
    function handleText(){
        // console.log("running")
        if(val===true){
            setVal(false)
        }
        else{
            setVal(true)
        }
    }

  return (
    <div>
      <h1>This is demo text</h1>
      <p> {x} </p>
      <p>{name}</p>

        { !val  &&  <h1>This is new text</h1>}
        { val  &&  <h1>This is new text 2</h1>}

        <button onClick={handleText}>Click me</button>
    </div>
  )
}

export default Demo
