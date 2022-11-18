import React from 'react'
import { MdOutlinePeopleAlt, MdOutlineRoomService,MdPeopleOutline } from 'react-icons/md';
import {Link} from 'react-router-dom';
import Messages from './Messages'
import { Button} from '@mui/material';
const Dashboard = () => {

   
  return (
    <div>
    
      <div>
        <div className="mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap
       justify-center">
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-hostellar bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center
          ">
             <div className="text-[#0080ff] text-8xl ">
        <MdOutlinePeopleAlt/>
        </div>
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
              Occupants
             </p>
             <p className="text-2xl">
              176
             </p>
             <div>
             <Link to='/Occupants'> <Button variant='outlined'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
            
          </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-room bg-no-repeat bg-cover bg-center flex ">
           <div className="text-[#0080ff] text-8xl ">
        <MdOutlineRoomService/>
        </div>
          <div className="flex justify-between items-center pl-3
          ">
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
              Rooms
             </p>
             <p className="text-2xl">
              72
             </p>
             <div>
        <Link to='/Rooms'> <Button variant='outlined'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
          </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-employer bg-no-repeat bg-cover flex bg-center">
         <div className="text-[#0080ff] font-semibold text-8xl ">
        <MdPeopleOutline/>
        </div>
          <div className="flex justify-between items-center pl-3
          ">
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
              Employees
             </p>
             <p className="text-2xl">
              10
             </p>
             <div>
        <Link to='/Employees'><Button variant='outlined'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
          </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center
       ">  
      </div>
    </div>
      </div>
     <div>
     </div>
          <div>
          <div>
      
          <Messages/>
        </div>
          </div>
  
     </div>
    
     
   
  )
}

export default Dashboard