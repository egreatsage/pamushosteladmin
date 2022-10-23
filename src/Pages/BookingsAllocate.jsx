import React, { useState,useEffect } from 'react'
import { Input,Button } from "@material-tailwind/react";
import EmployeeDataService from '../Operations';
import { Alert, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const BookingsAllocate = ({ id, setBookingId ,setOccupantId}) => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [Age, setAge] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');
  const [message, setmessage] = useState({error: false, msg:''})

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    if (FName === "" || LName === "" || Gender === "" || RoomNo === "" || EntryDate === "" || ExitDate === ""    ) {
      setmessage({ error: true, msg: "Fill In All Spaces" });
      return;
    }
    const newOccupant= {
      FName,LName,Gender,Age,PNumber,RoomNo,EntryDate,ExitDate  
    };
    try {
        await EmployeeDataService.addOccupant(newOccupant);
        setTimeout(() => {
          navigate('/Occupants');
      }, 3000);
        setmessage({ error: false, msg: "Room Allocated  successfully!" });
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }  
  };
  const handleSubmitt = async (e) => {
    e.preventDefault();
    setmessage("");
    if (FName === "" || LName === "") {
      setmessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBooking = {
     FName,LName,Gender,PNumber,Age,
    
    };
    try {
      if (id !== undefined && id !== "") {
        await EmployeeDataService.updateBooking(id, newBooking);
        setBookingId("");
        setmessage({ error: false, msg: "Room Added Successfully" });
      } else {
        await EmployeeDataService.addBooking(newBooking);
        setmessage({ error: false, msg: "New Details added successfully!" });
        navigate('/Occupants')
      }
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }

    setFName(""); setLName("");setGender("");setPNumber("");
    setAge("");
    
    
  };
  

  const editHandler = async () => {
    setmessage("successfull updated");
    try {
      const docSnap = await EmployeeDataService.getBooking(id);
      setFName(docSnap.data().FName);
      setLName(docSnap.data().LName);
      setGender(docSnap.data().Gender);
      setPNumber(docSnap.data().PNumber);
      setAge(docSnap.data().Age);
     

    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }
  };
  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
<div className='pb-9 mb-9 overflow-y-auto'>
  <Container className='mb-9 shadow-blue-900'>
  <div className='mb-9'>
      <p className='text-xl text-gray-600 text-center'>Allocation Of Rooms</p>
  <div>
  {message?.msg && (

        <Alert className='Relative'
        color={message?.error? 'error' :'info'}
        onClose={()=> setmessage('')}
        dismissible='true'
        >
          {''}
          {message?.msg}
          <div>
         
          </div>
        
        </Alert>
      )}
  <form onSubmit={handleSubmit} className='mb-6 overflow-y-auto'  >
  {/* onSubmit={handleSubmit} */}
<div className="mt-5 md:mt-0 md:col-span-2">
    <div className="shadow-sm sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <Input  label="First Name"   className="mt-1 focus:ring-blue-500
             focus:border-blue-500 block    w-full
             shadow-sm sm:text-sm border-gray-500 rounded-md"
             type='text'
             value={FName}
             onChange={(e)=>setFName(e.target.value)}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Last Name"  className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full
              shadow-sm sm:text-sm border-gray-300 rounded-md"
              type='text'
               value={LName} 
               onChange={(e)=>setLName(e.target.value)} 
               />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <Input  label="Phone Number" type="text" 
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
            shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={PNumber} 
            onChange={(e)=>setPNumber(e.target.value)}
            />
          </div>
         
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Gender" type="text" 
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full
             shadow-sm sm:text-sm border-gray-300 rounded-md"
             value={Gender} 
             onChange={(e)=>setGender(e.target.value)}/>
          </div>
          
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="Age" type="number"  className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={Age} 
             onChange={(e)=>setAge(e.target.value)}
             />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="Room Number" type="text"  className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={RoomNo} 
             onChange={(e)=>setRoomNo(e.target.value)}
             />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="Date Allocated" type="date"  className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={EntryDate} 
             onChange={(e)=>setEntryDate(e.target.value)}
             />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="Expected Exit Date" type="date"  className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={ExitDate} 
             onChange={(e)=>setExitDate(e.target.value)}
             />
          </div>
          <div className='p-3 mb-8'><Button  className='hover:bg-teal-900'type='submit'
         variant='standard'>Submit</Button></div>
        </div>
      </div>
    </div>
</div>
</form>
  </div>
</div> 
  </Container>
    
</div>
  )
}

export default BookingsAllocate