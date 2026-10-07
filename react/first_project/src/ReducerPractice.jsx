import React, { useReducer, useState } from 'react'

const ReducerPractice = () => {

    // UseState example -->
    // const[count , setCount] = useState(0);

    // function handleIncrement(){
    //     // console.log("running")
    //     // setCount("hello")
    //     setCount(count + 1)
    // }

    // UseReducer example -->

    // const[state, dispatch] = useReducer(counterReducer , initialState);
    function counterReducer(state, action){
        if(action.type ==="increment"){
                return state+1
        }
        if(action.type==='decrement'){
                return state -1;
        }
        if(action.type==="multiply"){
            return state *2
        }
        if(action.type ==="resetState"){
            return 10
        }
    }
    const[state, dispatch] = useReducer(counterReducer , 10);
        console.log(state)
    function handleIncrement(){
        dispatch({type:"increment", value:10})
    }

    function handleDecrement(){
        dispatch({type:"decrement"})
    }
  return (
    <div>
      <h1>This is use reducer hook component</h1>

        {/* <p>Count : {count}</p> */}
        <p>Count : {state}</p>

        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <button onClick={()=>dispatch({type:"multiply"})}>Multiply by 2</button>
        <button onClick={()=>dispatch({type:"resetState"})}>Reset State</button>

    </div>
  )
}

export default ReducerPractice
