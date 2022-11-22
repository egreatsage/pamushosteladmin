import React from 'react'
import { MdOutlinePeopleAlt, MdOutlineRoomService,MdPeopleOutline } from 'react-icons/md';
import {Link} from 'react-router-dom';
import Messages from './Messages'
import { Button} from '@material-tailwind/react';
import Notices from './Notices';
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
             <div className="text-gray-800 text-8xl ">
        <MdOutlinePeopleAlt/>
        </div>
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
            Bookings
             </p>
             <p className="text-2xl">
              176
             </p>
             <div>
             <Link to='/bookings'><Button className='py-2 px-2 bg-gray-700 text-white'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
            
          </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-hostellar bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center
          ">
             <div className="text-gray-800 text-8xl ">
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
             <Link to='/Occupants'><Button className='py-2 px-2 bg-gray-700 text-white'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
            
          </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-hostellar bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center
          ">
             <div className="text-gray-800 text-8xl ">
             <MdOutlineRoomService/>
        </div>
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
              Rooms
             </p>
             <p className="text-2xl">
              40
             </p>
             <div>
             <Link to='/rooms'><Button className='py-2 px-2 bg-gray-700 text-white'>View Details</Button></Link>
        </div>
            </div>
            <div className="mt-6">
            
          </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 pt-9 p-8 m-3
        bg-hostellar bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center
          ">
             <div className="text-gray-800 text-8xl ">
             <MdPeopleOutline/>
        </div>
            <div>
            <p className="font-extrabold text-gray-800 dark:text-blue-gray-700">
              Employees
             </p>
             <p className="text-2xl">
              10
             </p>
             <div>
             <Link to='/employees'><Button className='py-2 px-2 bg-gray-700 text-white'>View Details</Button></Link>
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
          <div className='grid gap-5  md:grid-cols-2 overflow-auto'>
             <div className='bg-white rounded-md shadow-lg border border-gray-300 md:px-5'>
             <Messages/>
             </div>
             <div className=' pl-4 text-center bg-white rounded-md shadow-lg border border-gray-300'>
                     <p className='text-2xl md:text-3xl font-bold pt-4 leading-tight'>Notices</p>
                        <Notices/>
                     </div>      
                </div>
          </div>
     </div>
  )
}

export default Dashboard