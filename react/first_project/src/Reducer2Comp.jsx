import React, { useReducer, useState } from 'react'

const Reducer2Comp = () => {

    function counterReducer(state, action){
        if(action.type ==="increment"){
                return state+1
        }
       
    }
    const[state, dispatch] = useReducer(counterReducer , {
        data:{name:"john",email:"john@gmail.com"},
        count:10
    });
      
    function handleIncrement(){
        dispatch({type:"increment", value:10})
    }

   
  return (
    <div>
      <h1>This is use reducer hook component</h1>
        <p>{state.data.name}</p>
        <p>{state.data.email}</p>
        <p>{state.count}</p>

        <button onClick={handleIncrement} >Increment</button>
        <button>Update Email</button>

    </div>
  )
}

export default Reducer2Comp
