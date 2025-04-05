import React, { useState } from 'react'

const Register = () => {

  const [form, setForm]=useState({
    name:'',
    email:'',
    password:''
  })

 const handleRegister=async (e)=>{
  e.preventDefault();
  console.log('Registering.......')
  console.log(form)
 }

  return (
    <div className=' max-w-xs mx-auto mt-20 p-4 border rounded shadow'>
    <h2 className=' text-xl mb-4'>Candidate Registration</h2>
    <form className=' flex flex-col' onSubmit={handleRegister}>
      <label className=' mb-2'>Name</label>
      <input type="text" className=' p-2 border rounded mb-4' placeholder='Enter your name' value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
      <label className=' mb-2'>Email</label>
      <input type="email" className=' p-2 border rounded mb-4' placeholder='Enter your email' value={form.email} onChange={(e)=>setForm({...form, email:e.target.value })}/>
      <label className=' mb-2'>Password</label>
      <input type="password" className=' p-2 border rounded mb-4' placeholder='Enter your password' value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
      <button type="submit" className=' bg-blue-500 text-white p-2 rounded'>Register</button>
    </form>
    </div>
  )
}

export default Register