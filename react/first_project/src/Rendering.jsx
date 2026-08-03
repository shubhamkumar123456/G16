import React, { useState } from 'react'

const Rendering = () => {

    // let val = true;
    const [val , setVal] = useState(true)
    console.log(val)

    function handleClick(){
        // console.log("hello")
        if(val===true){
            // 
            setVal(false)
        }
        else{
           setVal(true)
        }
    }

  return (
    <div>
      <h1>THis is conditional rendering page</h1>

    {/* Styntex 1 using && operator  */}

    {/* {  false &&  "hello" } */}


    {/* Syntex 2 using ternary operator */}

    {/* {  false ? " hello"  :  "bye bye"  } */}

    {  val ? <p>This is text one</p>  :  <p>this is text two</p>} 
      
      <button onClick={handleClick}>Swap Text</button>
    </div>
  )
}

export default Rendering
