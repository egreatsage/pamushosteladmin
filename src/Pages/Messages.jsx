import React,{ useEffect, useState }from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md';
import {Button, Divider} from '@mui/material' 
   import EmployeeDataService from '../Operations';
import {Card} from '@material-tailwind/react';
const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getAllMessages();
  }, []);
   
  //Getting All the Messages
  const getAllMessages = async () => {
    const data = await EmployeeDataService.getAllMessages();
    setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
 //Deleting Messages by ID
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteMessage(id);
    getAllMessages();
  };
  return (
    <div className=''>
                 <h1> Messages And Notifications</h1>
            <div>

            </div>
            <div className=' pt-3 bg-blue-gray-500 md:px-3 rounded-md'>
        {messages.map((doc, index) => {
        return(
          <div  className=''key={doc.id}>
            <div className=' flex'>
              <p className="">SNO:  </p>
              {""}
            <h1 className=''>{index + 1}.</h1>
            </div>
            <Divider/>

            <div className="flex">
                <h1 className='mr-10 bold'> Name:</h1>
              <p className='ml-4 text-gray-800'>{doc.fullname}</p>
            </div>

            <Divider/>
            <div className="flex">
            <h1 className='mr-10'>Email:</h1>
            
            <h1 className='ml-4'>{doc.email}</h1>
            </div>
            <Divider/>
            <div className="flex">
            <h1 className='mr-7'>Message:</h1>
            <h1 className=''>{doc.message}</h1>
            </div>
          
            <Divider/>
           
            <div className='text-[red] lowercase'>
            <Button variant="text"  className='lowercase' onClick={(e) => 
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]' />}>
               Delete Message
</Button>
</div> 
          </div>
           )
          })}
     </div>
    </div>
     
  )
}

export default Messages