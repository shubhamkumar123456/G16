import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-yellow-700 px-5 text-white justify-between h-[60px] flex items-center'>
      <h1>Ecom Web</h1>
      <ul className='flex gap-5 items-center bg-black'>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/about'}>About</Link> </li>
        <li> <Link to={'/cart'}>Cart</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
