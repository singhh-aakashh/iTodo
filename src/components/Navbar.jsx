import React from 'react'
import notep from '../assets/notes.png'
const Navbar = () => {
  return (
  <>
  <div className="sticky top-0 bg-indigo-500 text-white ">
    <div className="max-w-4xl flex justify-between items-center p-4 mx-auto">
    <h1 className="text-3xl flex gap-4 font-medium"><img src={notep} className="w-10" alt="" /> iTodo</h1>
    <div className="hidden sm:block text-3xl font-medium space-x-8">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div className="sm:hidden text-3xl"> 
   &#9776;
    </div>
    </div>
  </div>
  </>
  )
}


export default Navbar
