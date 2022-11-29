

import { Alert} from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserAuthContext';


const Login = () => {
  const {logIn} = useUserAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate();
 const handleSubmit = async (e)=>{

  // submitting the form

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
         <div
      className="min-h-screen max-w-full flex flex-col items-center justify-center bg-gray-50"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          md:py-8
          rounded-3xl
          w-full
          max-w-md
        "
      >
         {error && <Alert color='error'>{error}</Alert>}

         <div className="font-medium self-center mt-2 text-xl sm:text-3xl text-gray-800">
         Admin Login
        </div>
       {''}
       
  
  
       

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
        
            
            <div className="flex flex-col mb-5">
              <label
                
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <AiOutlineMail/>
                </div>

                <input
                 
                  type="email"
                 
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <AiOutlineLock/>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login