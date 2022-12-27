import { Input } from '@material-tailwind/react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { Alert} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserAuthContext';
const Login = () => {
  const {logIn} = useUserAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate();
 const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("")
        try{
          await logIn(email,password);
          navigate('/')
          
        }catch(err){
          setError("Wrong Credentials")
                }}
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-900/40   lg:max-w-xl">
                <h1 className="text-3xl mb-10 text-center text-indigo-700 uppercase ">
                   Admin Sign In
                </h1>
                {error && <Alert color='error'>{error}</Alert>}
                <form className="mt-6" onSubmit={handleSubmit} >
                    <div className="mb-7">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt- text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e=>setPassword(e.target.value)} />
                    </div>
                   
                    <div className="mt-12">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Login
                        </button>
                    </div>
                </form>

               
            </div>
        </div>
    </div>
  )
}

export default Login