
import { Input } from '@material-tailwind/react';
import { Alert, LinearProgress} from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
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
                const [passwordShown, setPasswordShown] = useState(false);
                const togglePassword = () => {
                
                  setPasswordShown(!passwordShown);
                };
                const [isloading, setisloading] = useState(false)
  const  handleclick=()=>{
    setisloading(true)
    setTimeout(() => {
      setisloading(false);
    }, 3000);
  }
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-900/40   lg:max-w-xl">
                <h1 className="text-3xl mb-10 text-center text-black font-semibold uppercase ">
                   Admin Login
                </h1>
                {error && <Alert color='error'>{error}</Alert>}
                <form className="mt-6" onSubmit={handleSubmit} >
                    <div className="mb-7">
                      
                        <Input
                        color='teal'
                           className='text-black text-md'
                           type='email'
                           variant='standard'
                           label='Email Or Username'
                            onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="my-6">
                      
                        <Input 
                        color='teal'
                        className='text-black text-md'
                        type={passwordShown ? "text" : "password"} label='Password' variant='standard' icon={<AiOutlineEye className='cursor-pointer' onClick={togglePassword}/>}
                          onChange={e=>setPassword(e.target.value)} />
                    </div>
                   
                    <div className="mt-12">
                    {
            isloading ?(
             
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none ">
             <span>Signing in</span> <LinearProgress />
          </button>
            ):(
                <button onClick={handleclick} type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black">
                            Sign In
                        </button>
            )
          }
                     
                    </div>
                </form>

               
            </div>
        </div>
    </div>
  )
}

export default Login