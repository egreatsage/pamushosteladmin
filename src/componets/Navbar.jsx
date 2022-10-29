import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { Avatar, Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import {  AiOutlineLogout } from 'react-icons/ai'
import Sidebar from './Sidebar'
import {useUserAuth} from '../contexts/UserAuthContext'
const Navbar = () => {
  const {logOut, user} = useUserAuth();
  const handlelogout= async ()=>{
    try{
        await logOut();
    }catch{     
    }
  }
  
  return (
    <div>
        <div className='relative flex justify-between  p-2 bg-gray-100 '>
      <Sidebar/>

      <p className='md:text-2xl text pt-2 text-xl'>Pamus Hostel</p>
      <div className='flex gap-7'>
      
    <Tooltip title="Account Settings" placement='bottom'>
    <Menu>
      <MenuHandler>
        <IconButton>
        <img src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" className='w-14 h-14 rounded-lg' alt="" />
        </IconButton>
        
      </MenuHandler>
      <MenuList>
        <MenuItem>Account:</MenuItem>
        <MenuItem>{user && user.email} </MenuItem>
        <div class="bottom-0 flex  mt-3 mb-3">
        <Button onClick={handlelogout} variant="text" color="error">
          Log Out
          </Button>
          <AiOutlineLogout className='mt-3 text-red-700'/>
        
        </div>
      </MenuList>
     
    </Menu>
</Tooltip>


    </div> 
    </div>
  
  
    </div>
  
    
 
   
  )
}

export default Navbar