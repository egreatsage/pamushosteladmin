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
          await logIn(email,password).then(()=>{navigate('/')})
          
        }catch(err){
          setError("Wrong Credentials")
                }}
  return (
    <div>
      <div className="items-center min-h-screen max-w-full justify-center flex flex-col shadow-lg">
      {error && <Alert color='error'>{error}</Alert>}
           <form onSubmit={handleSubmit}>
              <div> <Input label='Email Or Username' type="email" variant='standard' icon={<AiOutlineMail/>}
               onChange={e=>setEmail(e.target.value)}/></div>
              <div>  <Input label='Password' type='password' variant='standard' icon={<AiOutlineLock/>}
              onChange={e=>setPassword(e.target.value)}/></div>
               <div className='justify-end flex '><button className='bg-gray-50 text-black' type='submit'>Login</button></div>
           </form>
      </div>
    </div>
  )
}

export default Login