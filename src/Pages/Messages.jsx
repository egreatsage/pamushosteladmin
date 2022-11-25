import React,{ Fragment, useEffect, useState }from 'react';
import { Divider} from '@mui/material' 
import EmployeeDataService from '../Operations';
import {Accordion, AccordionBody, AccordionHeader, Button} from '@material-tailwind/react';
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(0);
  useEffect(() => {
    getAllMessages();
  }, []);
   
  const getAllMessages = async () => {
    const data = await EmployeeDataService.getAllMessages();
    setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteMessage(id);
    getAllMessages();
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  function Icon({ id, open, }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  
  
  return (
   
              <div>
                  {messages.map((doc,index)=>{
return(
  <div className=' shadow-lg w-full px-2 my-4'>
         <p className='text-center leading-tight font-bold text-xl'>Notifications</p>
         <div className='flex justify-between'>
          <div className=''>
         
             <div className=''>
              <p><span className='font-bold'>Name: </span> {doc.fullname}</p>
             </div>
             <div className=''>
              <p><span className='font-bold'>Email:</span>{doc.email}</p>
             </div>
         </div>           
         </div>
         <div className='pt-4 mb-2'>
             <Divider/>
             <p className='text-gray-700 pb-3'>{doc.message}</p>
             <Divider/>
             <Divider/>
             <Divider/>
             <Divider className='pb-3'/>
         </div>
</div>
)
})}

              </div>
        
     
  )
}

export default Messages