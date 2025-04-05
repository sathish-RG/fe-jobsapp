import { Link } from "react-router"

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <nav className="bg-gray-800 text-white font-bold shadow-md w-full p-4 flex justify-between items-center">
     <div>
      <Link to='/' className="mr-4">Home</Link>
     </div>
      <div className="flex space-x-4">
        <Link to='/register' className="text-blue-500">Register</Link>
        <Link to='/login' className="text-blue-500">Login</Link> </div>

    </nav>
    <main className="flex-grow container mx-auto p-4">
      {children}
      </main>
    <footer className="bg-gray-800 text-white font-bold p-4 w-full text-center">  
      <p>&copy; 2023 Job Portal. All rights reserved.</p>
    </footer>
      
    </div>
  )
}

export default Layout