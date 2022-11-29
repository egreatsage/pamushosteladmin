import { Input, Textarea } from '@material-tailwind/react'
import { Alert } from '@mui/material';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeDataService from '../Operations';
const Reminders = () => {
    const [reminder, setReminder] = useState();
    const [date, setDate] = useState();
    const [message, setmessage] = useState();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        setmessage("");
        const newReminder= {
         reminder,date
        };
        try {
        
            await EmployeeDataService.addReminder(newReminder);
            setmessage({ error: false, msg: "Reminder Added" });
            setTimeout(() => {
              navigate('/reminders');
          }, 3000);
          
        } catch (err) {
          setmessage({ error: true, msg: err.message });
        }
        setReminder(""); setDate('');
      };
      useEffect(() => {
        getAllReminders();
      }, []);
      const getAllReminders = async () => {
        const data = await EmployeeDataService.getAllReminders();
        setReminder(data.docs.map((doc) => ({ ...doc.data(),
          id: doc.id })));
      };
      const deleteHandler = async (id) => {
        await EmployeeDataService.deleteReminder(id);
        getAllReminders();
      };
  return (
    <div className='w-full mt-20 pt-24 px-3 md:m-9 md:p-9'>
         {message?.msg && (
         
         <Alert 
 color={message?.error?'error' :'info'}
 onClose={()=> setmessage('')}
 dismissible='true'
 >
   {''}
   {message?.msg}
 </Alert>
)}     
        <h1 className="text-2xl text-center">
            Add Your Reminder
        </h1>
         <form onSubmit={handleSubmit}>
           <Textarea color='teal' type='text' placeholder='Write Your Reminder ' className='mb-3' 
           onChange={(e)=>setReminder(e.target.value)}/>
           <Input label='Date' type='date' className='mb-3'
           onChange={(e)=>setDate(e.target.value)}/>
           <button  className='bg-gray-700  px-6 rounded-md border text-white py-1'type='submit' variant='standard'>Submit</button>
         </form>
         <h1 className='mt-8 text-2xl font-bold text-gray-800'>Your Reminders</h1>
         <div className='border w-full shadow-md mt-9 border-gray-400'>
         {reminder.map((doc,index)=>{
return(  
<div className=''>
               <div className='p-8'>
                <p> {doc.reminder}</p>
               </div>
               <div className='p-8 underline italic text-gray-600'>
        
               <p>{doc.date}</p>       
</div>
         </div>
         )
        })}
         </div>
         
    </div>
  )
}
export default Reminders