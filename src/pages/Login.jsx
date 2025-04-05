import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=' max-w-xs mx-auto w-96 mt-20 p-4 border rounded border-gray-400 shadow bg-white'>
        <h2 className=' text-xl mb-4'>Login</h2>
        <form className=' flex flex-col'>
          <label className=' mb-2'>Email</label>
          <input type="email" className=' p-2 border rounded mb-4' placeholder='Enter your email'/>
          <label className=' mb-2'>Password</label>
          <input type="password" className=' p-2 border rounded mb-4' placeholder='Enter your password'/>
          <button type="submit" className=' bg-blue-500 text-white p-2 rounded'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login