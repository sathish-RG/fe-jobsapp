import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from '../redux/features/auth/registerSlice';

const Register = () => {

 const name= useSelector(selectName);
 const email=useSelector(selectEmail);
 const password=useSelector(selectPassword);

 const dispatch=useDispatch();

 const handleRegister=async (e)=>{
  e.preventDefault();
  console.log('Registering.......')
  console.log(name, email, password)
  
 }

  return (
    <div className=' max-w-xs mx-auto mt-10 p-4 border rounded border-gray-400 shadow'>
    <h2 className=' text-xl mb-4'>Candidate Registration</h2>
    <form className=' flex flex-col' onSubmit={handleRegister}>
      <label className=' mb-2'>Name</label>
      <input type="text" className=' p-2 border rounded mb-4' placeholder='Enter your name' value={name} onChange={(e)=>dispatch(setName(e.target.value))}/>
      <label className=' mb-2'>Email</label>
      <input type="email" className=' p-2 border rounded mb-4' placeholder='Enter your email' value={email} onChange={(e)=>dispatch(setEmail(e.target.value))}/>
      <label className=' mb-2'>Password</label>
      <input type="password" className=' p-2 border rounded mb-4' placeholder='Enter your password' value={password} onChange={(e)=>dispatch(setPassword(e.target.value))}/>
      <button type="submit" className=' bg-blue-500 text-white p-2 rounded'>Register</button>
    </form>
    </div>
  )
}

export default Register