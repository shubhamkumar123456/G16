import React from 'react'
import Navbar from '../components/Navbar'

const ShowContent = () => {
        let x = 10
        let text = "hello"
        let data = {name:"one", age:34 , course:"fullstack"}

        let arr = [10, 20 , 30, 40, 50];

  return (
    <div>
        <Navbar/>
      <h1>This is Show Component</h1>
      <p>{x}</p>
      <p>{text}</p>

      <p> username = {data.name}</p>
      <p> user age = {data.age}</p>
      <p> course =  {data.course}</p>


        {/* <p>{arr[0]}</p>
        <p>{arr[1]}</p>
        <p>{arr[2]}</p>
        <p>{arr[3]}</p>
        <p>{arr[4]}</p> */}

      <div>
            {arr.map((val , i)=>{
                return <p>{val}</p>
            })}
      </div>
    </div>
  )
}

export default ShowContent
