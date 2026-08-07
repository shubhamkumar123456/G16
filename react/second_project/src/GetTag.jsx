import React, { useRef } from 'react'

const GetTag = () => {

    // useRef Hook --> can copt the address of any react element
    // let x = document.getElementById('demo') // <h1> </h1>

    let x  = useRef()   // {current : undefined} 
    console.log(x)

    let y = useRef()  //{ current: undefined}

    function handleSubmit(){
            // console.log(x)   // { current : <h1>This is get tag page</h1>}
            // console.log(x.current)  // <h1>This is get tag page</h1>
            // console.log(x.current.innerHTML)

            console.log(y.current)
            y.current.src = "https://images.pexels.com/photos/12941732/pexels-photo-12941732.jpeg?cs=tinysrgb&dpr=1&w=500"
    }


    let paraRef = useRef()  // {current : undefined} //{current:<p></p>}

    function handleContent(){
        paraRef.current.innerHTML = "THis is new Changed Content"
    }
  return (
    <div>
        <h1 ref={x} id='demo'>This is get tag page</h1>

        <button onClick={handleSubmit}>Click me</button>

        <img ref={y} style={{height:"300px", width:"300px"}} src="https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_test_b&w=740&q=80" alt="" />

        <p ref={paraRef}>This is para</p>

        <button onClick={handleContent}>Change Content</button>

    </div>
  )
}

export default GetTag

