import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectPassword, setEmail, setPassword } from '../redux/features/auth/loginSlice';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import authServices from '../services/authServices';


const Login = () => {
  const email=useSelector(selectEmail);
  const password=useSelector(selectPassword);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogin=async (e)=>{
    e.preventDefault();
    
    //Call the register function from the authServices
    try{
      const response=await authServices.login({email,password});
  
      if (response.status==200){
        toast.success('Login successfully!')
      }
  
      //Clear the form
      dispatch(setEmail(''));
      dispatch(setPassword(''));
  
      //Redirect to the login page
      setTimeout(()=>{
        navigate('/');
      },500);
  
    }catch(error){
      toast.error(error.response.data.message);
    }
  
   }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=' max-w-xs mx-auto w-96 mt-20 p-4 border rounded border-gray-400 shadow'>
        <h2 className=' text-xl mb-4'>Login</h2>
        <form className=' flex flex-col' onSubmit={handleLogin}>
          <label className=' mb-2'>Email</label>
          <input type="email" className=' p-2 border rounded mb-4' placeholder='Enter your email' value={email} onChange={(e)=>dispatch(setEmail(e.target.value))}/>
          <label className=' mb-2'>Password</label>
          <input type="password" className=' p-2 border rounded mb-4' placeholder='Enter your password' value={password} onChange={(e)=>dispatch(setPassword(e.target.value))}/>
          <button type="submit" className=' bg-blue-500 text-white p-2 rounded'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login