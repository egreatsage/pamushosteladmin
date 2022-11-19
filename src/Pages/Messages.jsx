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
    <div className='mx-5 px-5 md:mx-0 md:px-0'>
                 <h1 className='text-center '> Messages And Notifications</h1>
   {messages.map((doc,index)=>{
             return(
    <Fragment>
      <Accordion className="w-full mb-4 overflow-x-hidden" open={open === 1} icon={<Icon id={1} open={open} />}>
     
              <div>
          <AccordionHeader onClick={() => handleOpen(1)} className='md:flex text-md font-semibold md:justify between'>
            <div> <p className=''>Name: {doc.fullname} </p></div>
            <div><p>Email/Phone:{doc.email}</p> </div>
        </AccordionHeader>
        <AccordionBody className='mb-3'>
          {doc.message}
         <div className="flex justify-between">
           <div></div>
         <Button onClick={(e) =>  deleteHandler(doc.id)}
             className='py-2  mt-2 bg-gray-700 text-white'>Delete Message
         </Button>
         </div>
        </AccordionBody>
          </div>
      </Accordion>
      <Divider/>
    <Divider/>
    </Fragment>
    )
  })}
   </div>
  
     
  )
}

export default Messages