
import { Input} from '@material-tailwind/react';
import { Alert } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserAuthContext';
const SignUp = () => {
  const {signUp} = useUserAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUserName] = useState()
  const [setError] = useState()
  const [message, setmessage] = useState()
  const navigate = useNavigate();
 const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("")
        try{
          await signUp(username,email,password);
            navigate('/Dashboard')
        }catch(err){
          setError("Wrong Credentials")
                }}
  return (
    <div >
       {message?.msg && (

<Alert className='Relative'
color={message?.error? 'error' :'info'}
onClose={()=> setmessage('')}
dismissible='true'
>
  {''}
  {message?.msg}
  <div>
 
  </div>

</Alert>
)}
       <form onSubmit={handleSubmit} className='border border-gray rounded-md  md:w-96 '>
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