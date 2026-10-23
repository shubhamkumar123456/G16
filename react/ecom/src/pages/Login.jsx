import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../redux/authSlice';

const Login = () => {
  let emailRef = useRef();  //{current:undefined}
  let passwordRef = useRef(); //{current:undefined}

  let dispatch = useDispatch();


  let usersArr = JSON.parse(localStorage.getItem('ecomSignup')) ||  []
  console.log(usersArr)

  let navigate = useNavigate();

  function handleSubmit(e){
      e.preventDefault();
      let obj = {
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
      console.log(obj)
      let find = usersArr.find((ele)=>ele.email === obj.email);
      if(find){
          if(find.password === obj.password){
              toast.success("log in successfull");
              dispatch(loginUser());
              navigate('/');
          }
          else{
              toast.error("wrong password", {position:"top-center"})
          }
      }
      else{
        toast.error("user not found please signup", {position:"top-center"})
      }
  }
  return (
    <div>
        {/*example of  controlled component */} 

        <h1 className='text-center my-[30px] text-4xl font-bold '>Login Page</h1>
      <form action="" className='flex flex-col mx-auto  p-5 gap-3 border w-[40%] min-w-[380px]'>
            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" className='border p-2'  placeholder='enter your email' />

            <label  htmlFor="">Password</label>
            <input ref={passwordRef} type="text" className='border p-2' placeholder='enter your password' />

            <button onClick={handleSubmit} className='bg-blue-950 text-white hover:bg-blue-700 px-4 py-2 rounded-md cursor-pointer'>Login</button>
            <p className='text-center'>Don't have an account ? <Link className='text-blue-600' to={'/register'}>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
