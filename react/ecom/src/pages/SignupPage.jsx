import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignupPage = () => {

  let nameRef = useRef() //{current:undefined}  {current:<input/>}
  let emailRef = useRef()
  let passwordRef = useRef()
  let navigate = useNavigate()

  let arr = JSON.parse(localStorage.getItem('ecomSignup')) ||  [];
  console.log(arr)

  function handleSubmit(e){
      e.preventDefault();
      let obj = {
        name: nameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
      }

      console.log(obj);
      let find = arr.find((ele)=>ele.email === obj.email);
      if(find){
            return toast.error("user already registered",{position:"top-center",theme:"dark"})
      }
      else{
           arr.push(obj)
        localStorage.setItem('ecomSignup', JSON.stringify(arr))
        console.log(arr)
        navigate('/login');
        toast.success("user registered successfully")
      }
     
  }

  return (
    <div>
        {/*example of  controlled component */} 

        <h1 className='text-center my-[30px] text-4xl font-bold '>Signup Page</h1>
      <form action="" className='flex flex-col mx-auto  p-5 gap-3 border w-[40%] min-w-[380px]'>
            <label htmlFor="">Name</label>
            <input ref={nameRef} type="text" className='border p-2'  placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" className='border p-2'  placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input ref={passwordRef} type="password" className='border p-2' placeholder='enter your password' />

            <button onClick={handleSubmit} className='bg-blue-950 text-white hover:bg-blue-700 px-4 py-2 rounded-md cursor-pointer'>Signup</button>

            <p className='text-center'>Already have an account ? <Link className='text-blue-600' to={'/login'}>login</Link></p>
      </form>
    </div>
  )
}

export default SignupPage
