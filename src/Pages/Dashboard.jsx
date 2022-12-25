import { IconButton } from '@material-tailwind/react'
import { Container, Modal, Typography } from '@mui/material'
import React from 'react'
import {TbBrandBooking} from 'react-icons/tb'
import {BsPeople} from 'react-icons/bs'
import {MdPeopleOutline} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'
import { Link } from 'react-router-dom'
import Messages from './Messages'
import Notices from './Notices'
import NoticeAdd from './NoticeAdd'
import { Box } from '@mui/system'
const Dashboard = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'white',
    border: '2px solid #white',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className='mt-12 pt-11'>
      <Container>
      <div className="grid md:grid-cols-4 mb-3 gap-3">
          <div className="w-full md:w-60 py-2   rounded-md mb-4 bg-gray-100">
            <IconButton className=' bg-transparent m-3 border border-[#03C9D7]'>
           <TbBrandBooking className='text-[#03C9D7] text-3xl'/>
            </IconButton>
            <div  className='flex justify-center'>
            <p>Bookings</p>
            </div>
            <Link  className='flex justify-end pr-3' to='/bookings'><button className=' border border-[#03C9D7] px-6 rounded-md  text-black py-1'>View</button></Link>
          </div>
          <div className="w-full md:w-60   rounded-md mb-4 bg-gray-100">
          <IconButton className='bg-transparent m-3 border border-[#03C9D7]'>
           <BsPeople className='text-[#03C9D7] text-3xl'/>
            </IconButton>
            <div  className='flex justify-center'>
            <p>Occupants</p>
            </div>
            <Link  className='flex justify-end pr-3' to='/occupants'><button className=' border border-[#03C9D7] px-6 rounded-md  text-black py-1'>View</button></Link>
          </div>
          <div className="w-full md:w-60   rounded-md mb-4 bg-gray-100">
          <IconButton className='bg-transparent m-3 border border-[#03C9D7]'>
           <MdPeopleOutline className='text-[#03C9D7] text-3xl'/>
            </IconButton>
            <div>
            <p className='flex justify-center'>Employees</p>
            </div>
            <Link  className='flex justify-end pr-3' to='/employees'><button className=' border border-[#03C9D7] px-6 rounded-md  text-black py-1'>View</button></Link>
          </div>
          <div className="w-full md:w-60   rounded-md mb-4 bg-gray-100">
          <IconButton className='bg-transparent m-3 border border-[#03C9D7]'>
           <SiGoogleclassroom className='text-[#03C9D7] text-3xl'/>
            </IconButton>
            <div  className='flex justify-center'>
            <p>Rooms</p>
            </div>
            <Link  className='flex justify-end pr-3' to='/rooms'><button className='  border-[#03C9D7] px-6 rounded-md border text-black py-1'>View</button></Link>
          </div>
      </div>
      <div className='grid md:grid-cols-2 gap-3'>
                 <div className=''>
                  <h1  className='text-center text-2xl font-bold text-gray-800 mb-4'>Messages And Notifications</h1>
                       <Messages/>
                 </div>
                  
                 <div className='md:mx-9'>
                 <Modal className=''
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-full px-3 '>
    
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <NoticeAdd/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
      <h1 className='text-center text-2xl font-bold text-gray-800 mb-4'>Notices to Students</h1>
      <div className='flex justify-end'>
      <button className=' border border-[#03C9D7] px-6 rounded-md  text-black py-1' onClick={handleOpen}>Add  Notice</button>
      </div>
     
                      <Notices/>
                 </div>
      </div>
      </Container>
  
    </div>
  )
}

export default Dashboard