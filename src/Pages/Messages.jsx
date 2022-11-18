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
     {messages.map((doc, index) => {
        return(
     <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-sm bg-white w-full">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{doc.fullname}</h5>
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{doc.email}</h5>
    <p class="text-gray-700 text-base mb-4">
    {doc.message}
    </p>
    <Button   className='lowercase' onClick={(e) => 
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]' />}>
               Delete Message
</Button>
  </div>
</div>
  )
})}
    </div>
     
  )
}

export default Messages