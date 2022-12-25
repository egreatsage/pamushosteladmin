import React,{useEffect, useState }from 'react';
import { Divider} from '@mui/material' 
import EmployeeDataService from '../Operations';
const Messages = () => {
  const [messages, setMessages] = useState([]);
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
  return (
              <div>
                  {messages.map((doc,index)=>{
return(
  <div className=' shadow-lg w-full px-2 my-4 border border-r-black'>
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
           
             <Divider className='pb-3'/>
         </div>
         <div className=' flex justify-end'>
          <button className='bg-gray-700  px-6 rounded-md border text-white py-1' 
           onClick={(e) => 
            deleteHandler(doc.id)}>Delete</button>
         </div>
</div>
)
})}

              </div>
        
     
  )
}

export default Messages