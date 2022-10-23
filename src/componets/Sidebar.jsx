import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineSpaceDashboard ,MdOutlineBedroomChild,MdPeopleOutline } from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {SiGooglemessages} from 'react-icons/si'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {TbBrandBooking} from 'react-icons/tb'
import { Button, Tooltip } from '@material-tailwind/react'
const Sidebar = () => {
  return (
    <div>
      
      <div className="flex space-x-2">
   <div className='p-2'> 
    <Tooltip  content="Menu" placement='bottom'>
    <button className="p-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <AiOutlineMenu className='text-2xl'/>
    </button>

    </Tooltip>
   
    <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5 className="offcanvas-title text-black   mt-3 text-2xl mb-0 leading-normal font-bold" id="offcanvasExampleLabel">Pamus Admin</h5>
        <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body flex-grow p-6 items-center justify-center gap-9 overflow-y-auto">
          
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-gray-100 ext-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <MdOutlineSpaceDashboard className='mt-1'/>
              <Link to='/Dashboard'>Dashboard</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <TbBrandBooking  className='mt-1'/>
              <Link to='/bookings'>Bookings</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <MdPeopleOutline className='mt-1'/>
              <Link to='/occupants'>Occupants</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <IoIosPeople className='mt-1 '/>
              <Link to='/employees'>Employees</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <SiGooglemessages className='mt-1'/>
              <Link to='/messages'>Messages</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <FiUsers className='mt-1'/>
              <Link to='/users'>Users</Link>
           </Button>
           </div>
           <div className='mb-9 text-black '>
           <Button   className=' font-bold gap-3 w-full text-black bg-transparent hover:text-white hover:bg-gray-600 text-md hover:ease-in-out rounded-md px-3 pl-4 flex '>
              <MdOutlineBedroomChild className='mt-1'/>
              <Link to='/rooms'>Rooms</Link>
           </Button>
           </div>

        
        
      </div>
    </div>
  </div> 
</div>
    </div>
  )
}

export default Sidebar