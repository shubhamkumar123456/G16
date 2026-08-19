import React from 'react'
import Navbar from '../components/Navbar'

const ShowContent = () => {
        let x = 10
        let text = "hello"
        let data = {name:"one", age:34 , course:"fullstack"}

        let arr = [10, 20 , 30, 40, 50];

    let details = [
        {name:"iphone", price:3300, rating:4},
        {name:"xbox", price:7300, rating:5},
        {name:"MI", price:6300, rating:2},
        {name:"Realme", price:5300, rating:1},
        {name:"Nokia", price:4300, rating:3},
    ]

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


      <div>
        {details.map((val , i)=>{
            return <div>
                <p>{val.name}</p>
                <p>{val.price}</p>
                <p>{val.rating}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default ShowContent
