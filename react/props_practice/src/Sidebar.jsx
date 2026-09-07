import React from 'react'

const Sidebar = (props) => {
    console.log(props) // {color: "" , text:""}
  return (
    <div style={{backgroundColor:props.color}}>
      <h1>This is Sidebar</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Sidebar
