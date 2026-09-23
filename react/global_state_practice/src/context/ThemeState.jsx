import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
const ThemeState = (props) => {
    const [bgcolor, setcolor] = useState("black");
  return (
    <ThemeContext.Provider value={{bgcolor, setcolor}}>
        <div style={{backgroundColor:bgcolor, color:"white" , height:"50vh"}}>
                {props.children}
        </div>
    </ThemeContext.Provider>
  )
}

export default ThemeState
