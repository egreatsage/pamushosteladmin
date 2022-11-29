
import { Input,Button, IconButton } from '@material-tailwind/react';
import { Alert, Card } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserAuthContext';


const SignUp = () => {
  const {signUp,googleSignIn} = useUserAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUserName] = useState()
  const [error, setError] = useState()
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
 const handleSubmit = async (e)=>{

  // submitting the form

        e.preventDefault();
        setError("")
        try{
          await signUp(username,email,password);
            navigate('/Dashboard')
        }catch(err){
          setError("Wrong Credentials")
                }        }
  
  return (
    <div >
       <form onSubmit={handleSubmit} className='border border-gray rounded-md p-3'>
        <p className='text-center text-xl mb-3'>Add Admin</p>
        <div className='mb-3'>
        <Input className='mb-6'  label='Username' type='text'
         onChange={e=>setUserName(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <Input className='mb-6'  label='Email' type='email'
         onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <Input className='mb-6'  label='Password' type='password'
         onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className='justify-end flex'>
            <button className='px-2 bg-gray-700 text-white rounded-md py-1' type='submit'>Submit</button>
        </div>
       </form>
    </div>
  )
}

export default SignUp