import { Tooltip } from '@mui/material'
import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {TbBrandBooking} from 'react-icons/tb'
import {BsPeople} from 'react-icons/bs'
import {MdPeopleOutline,MdOutlinePeopleOutline,MdOutlineAdminPanelSettings} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'
import {FcTodoList} from 'react-icons/fc'
import {GrUserAdmin} from 'react-icons/gr'
import AdminProfile from './AdminProfile'
const Navbar = () => {
  return (
    <div className='my-4  shadow-lg'>
         <div className='flex justify-between my-2 md:mx-4 mx-1 '>
        <div>
        <div class="flex space-x-2">
  <div>
    <Tooltip title='Menu'>
    <BiMenuAltLeft class="inline-block  text-[indigo] text-2xl  transition duration-300 ease-in-out mr-1.5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"/>
    </Tooltip>
   

    <div class="offcanvas offcanvas-start shadow-lg fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding  outline-gray-100 transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w- w-88" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header flex items-center justify-between p-4">
        <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">Pamus Admin</h5>
        <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body m-7 p-9 ">
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><MdOutlineAdminPanelSettings className='text-[indigo] text-2xl'/><Link  to='/'>Dashboard</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><TbBrandBooking className='text-[indigo] text-2xl'/><Link  to='/bookings'>Bookings</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><BsPeople className='text-[indigo] text-2xl'/><Link  to='/occupants'>Occupants</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><MdOutlinePeopleOutline className='text-[indigo] text-2xl'/><Link  to='/employees'>Employees</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><SiGoogleclassroom className='text-[indigo] text-2xl'/><Link  to='/rooms'>Rooms</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><MdPeopleOutline className='text-[indigo] text-2xl'/><Link  to='/users'>Users</Link></div>
        <div className='flex gap-4 mb-5  rounded-md px-4 py-2 hover:bg-gray-100 hover:text-black '><FcTodoList className='text-[indigo] text-2xl' /><Link  to='/reminders'>My ToDo</Link></div>
      </div>
    </div>
  </div>
</div>
        </div>
        <div>
          <AdminProfile/>
        </div>
         </div>
    </div>
  )
}

export default Navbar