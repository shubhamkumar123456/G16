import React, { useEffect, useState } from 'react'

const EffectHookPractice = () => {
    const[counter , setCounter] = useState(10); //11

    useEffect(()=>{
            for(let i =1; i<=5; i++){
                console.log(i);
            }
    } , [])  //10 , 11

    console.log(counter);

    // for(let i =1; i<=5; i++){
    //     console.log(i);
    // }

    

    function handleIncrement(){
            setCounter( counter+ 1 );
    }
  return (
    <div>
      <h1>This is UseEffect Hook Component</h1>

      <p>Count = {counter}</p>
      <button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default EffectHookPractice
