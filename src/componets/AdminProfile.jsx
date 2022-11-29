import { Alert, Modal, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../contexts/UserAuthContext';
import { upload } from '../Operations';
import {FiLogOut} from 'react-icons/fi'
import {Menu,MenuHandler,MenuList,MenuItem,} from "@material-tailwind/react";
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SignUp from './SignUp';
 
const AdminProfile = () => {
    const [photo,setPhoto] = useState(null)
    const [message, setmessage] = useState()
    const [loading,setLoading] = useState(false)
    const [photoURL, setPhotoURL] = useState("https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png")
    const handleChange=(e)=> {
       if  ( e.target.files[0]){
        setPhoto(e.target.files[0])
       }
    }
    const handleClick=()=> {
       upload(photo,user,setLoading)
    }
    const { user,logOut } = useUserAuth();
    useEffect(() => {
        if (user?.photoURL ) {
            setPhotoURL(user.photoURL)   
            console.log(user.photoURL)
        }
    }, [user])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // width: 900,
      bgcolor: 'white',
      border: '2px solid #white',
      boxShadow: 24,
      p: 4,
    };
    const navigate = useNavigate()
    const handlelogout= async ()=>{
        try{
            await logOut();
               navigate('/')
        }catch{     
        }
      }
  return (
    <div>
            <Menu>
      <MenuHandler>
      <Tooltip title="Account settings">
      <button className='rounded-full flex gap-2 '>
            <img src={photoURL} alt="Photo" className='md:h-8 md:w-8 w-8 h-8  object-fit-cover rounded-full'/>
            </button>
            </Tooltip>
      </MenuHandler>
     
      <MenuList>
        <div className='flex justify-center'>
        <img src={photoURL} alt="Photo" className='md:h-16 md:w-16 w-12 h-12  object-fit-cover rounded-full'/>
        </div>
           <h1 className='text-center font-bold my-3 text-black'>Account Details</h1>
           <p>UserName</p>
        <MenuItem className='mb-3 text-black'>{user && user.displayName}</MenuItem>
        <p>Email</p>
        <MenuItem className='mb-3 text-black'> {user && user.email}</MenuItem>

        <MenuItem className='mb-3 text-black'><button  onClick={handleOpen}>Update Account Details</button></MenuItem>
        <Link to='/' className='text-[red] cursor-pointer '>
        <MenuItem className='flex gap-2'>
        <button onClick={handlelogout}>Logout</button>
        <FiLogOut/>
        </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  <div>
  <Modal className=' px-3 md:px-9'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-full px-3 '>
        {message?.msg && (
         <Alert 
 color={message?.error?'error' :'info'}
 onClose={()=> setmessage('')}
 dismissible='true'
 >
   {''}
   {message?.msg}
 </Alert>
)} 
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <input  type='file'
            onChange={handleChange}/>
            <button disabled={loading || !photo} onClick={handleClick} className='bg-gray-700 px-2 py-1 rounded-md mt-2 text-white '>upload</button> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
          <div className='md:w-full w-96 m-5'>
          <SignUp/>
          </div>
         
        </Box>
      </Modal>
  </div>
      </div>
    
  )
}

export default AdminProfile