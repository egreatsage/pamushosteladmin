import { Input, Textarea } from '@material-tailwind/react'
import { Alert, Divider } from '@mui/material';
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

  const [reminders, setReminders] = useState([]);
  useEffect(() => {
    getAllReminders();
  }, []);
  const getAllReminders = async () => {
    const data = await EmployeeDataService.getAllReminders();
    setReminders(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteReminder(id);
    getAllReminders();
  };
  return (
    <div className='mt-9 pt-9'>
      <div className='mt-9 md:mx-9 mx-2'>
      <h1 className=" text-md md:text-2xl my-6 text-center">
            Add Your To Do
        </h1>
         <form onSubmit={handleSubmit}>
           <Textarea label='Add Your To Do' color='teal' type='text' placeholder=' ' className='mb-3' 
           onChange={(e)=>setReminder(e.target.value)}/>
           <Input label='Date' type='date' className='mb-3'
           onChange={(e)=>setDate(e.target.value)}/>
           <div className='my-4 justify-end flex'><button className='bg-gray-700  px-6 rounded-md border text-white py-1'type='submit' variant='standard'>Submit</button></div>
         </form>

      </div>
      <Divider/>
      <div className='mt-3'>
        <h1 className='text-center text-md md:text-2xl '>Your To Do List</h1>
        {reminders.map((doc,index)=>{
             return(
        <div className='border border-gray-400 mb-4   rounded-md shadow-md px-4 md:mx-9 mx-2'>
         
              <div>
              <div className='my-3'><span>Date:</span><p className='text-gray-700'>{doc.date}</p></div>
              <div className='my-2'><span>To Do:</span><p className='text-gray-700'>{doc.reminder}</p></div>
              </div>
           
             

             <div className="justify-end flex gap-3 mb-3">
              <button  
              className='bg-gray-700  px-6 rounded-md border text-white py-1'>Mark As Done</button>
              <button 
              onClick={(e) => 
                deleteHandler(doc.id)} className='bg-gray-700  px-6 rounded-md border text-white py-1'>Delete</button>
             </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reminders