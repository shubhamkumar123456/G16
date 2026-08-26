// rafce
import React, { useRef, useState } from 'react'

const Home = () => {

    let x = useRef()  //{current : undefined} // {current : <input/>}
    let y = useRef()  //{current : undefined}  //{current : <input/>}
    let z = useRef()  //{current : undefined} //{current : <input/>}


    const [arr , setArr] = useState([
      {id:1 , expenseName:"zoo", price:300, date:"24-08-26"},
      {id:2 , expenseName:"dinner", price:100, date:"24-08-26"},
      {id:3 , expenseName:"parking", price:300, date:"22-08-26"},
      {id:4 , expenseName:"petrol", price:200, date:"23-08-26"},
      {id:5 , expenseName:"movies", price:1000, date:"21-08-26"},
    ])

    // let arr = [
    //   {id:1 , expenseName:"zoo", price:300, date:"24-08-26"},
    //   {id:2 , expenseName:"dinner", price:100, date:"24-08-26"},
    //   {id:3 , expenseName:"parking", price:300, date:"22-08-26"},
    //   {id:4 , expenseName:"petrol", price:200, date:"23-08-26"},
    //   {id:5 , expenseName:"movies", price:1000, date:"21-08-26"},
    // ]

    function handleAddExpense(e){
      e.preventDefault();
        console.log("running")
        let obj = {
          id:arr.length+1,
          expenseName : x.current.value,
          price: y.current.value,
          date:z.current.value
        }
        console.log(obj)
        arr.push(obj);
        console.log(arr);

    }

    // Class test on friday
  return (
    <div>
      <h1>This is Expense App</h1>

        <form action="">
            <input ref={x} placeholder='enter expense name' type="text" />
            <input ref={y} placeholder='enter price' type="number" />
            <input ref={z} type="date" />
            <button onClick={handleAddExpense}>Add Expense</button>
        </form>
      <table border={1} style={{margin:"30px auto"}}>
        <thead>
          <tr>
              <th>Sno</th>
              <th>Expense Name</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
           {
            arr.map((val, i)=>{
              return <tr>
                <td>{val.id}</td>
                <td>{val.expenseName}</td>
                <td>{val.price}</td>
                <td>{val.date}</td>
                <td><button>delete</button></td>
              </tr>
            })
           }
        </tbody>
      </table>

    </div>
  )
}

export default Home
