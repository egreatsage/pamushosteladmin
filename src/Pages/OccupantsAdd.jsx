import React, { useEffect, useState } from 'react'
import { Button,Input} from '@material-tailwind/react'
import {Alert} from '@mui/material'

import { Link, useNavigate } from 'react-router-dom';
import EmployeeDataService from '../Operations';

const OccupantsAdd = ({ id, setOccupantId }) => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');
  const [message, setmessage] = useState({error: false, msg:''})

  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    if (FName === "" || LName ===  "" ||RoomNo ==="") {
      setmessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newOccupant= {
     FName,LName,Gender,PNumber,EntryDate,RoomNo,ExitDate     
    };
    try {
      if (id !== undefined && id !== "") {
        await EmployeeDataService.updateOccupant(id, newOccupant);
        setOccupantId("");
        setmessage({ error: false, msg: "Updated successfully!" });
        setTimeout(() => {
          navigate('/Occupants');
      }, 3000);
      } else {
        await EmployeeDataService.addOccupant(newOccupant);
        setmessage({ error: false, msg: "New Occupant added successfully!" });
      }
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }
    setFName(""); setLName("");setGender("");setEntryDate("");setPNumber("");
    setRoomNo("");setExitDate("");
  };
  const editHandler = async () => {
    setmessage("Details successfully edited");
    try {
      const docSnap = await EmployeeDataService.getOccupant(id);
      setFName(docSnap.data().FName);
      setLName(docSnap.data().LName);
      setGender(docSnap.data().Gender);
      setPNumber(docSnap.data().PNumber);
      setEntryDate(docSnap.data().EntryDate);
      setRoomNo(docSnap.data().RoomNo);
      setExitDate(docSnap.data().ExitDate);
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
    <div>  
  <div className='md:p-9'>
  
    <p className='text-xl text-gray-600 text-center'>Add or Edit Occupants</p>
    <div className="md:m-9">
    {message?.msg && (
      
               <Alert 
        color={message?.error?'error' :'info'}
        dismissible
        onClose={()=> setmessage('')}>
          {''}
          {message?.msg}
        </Alert> 
      )}
     
     
<form onSubmit={handleSubmit} >
<div className="mt-5 md:mt-0 md:col-span-2">
    <div className="shadow  sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <Input  label="First Name"   className="mt-1 focus:ring-blue-500 focus:border-blue-500 block 
            w-full
             shadow-sm sm:text-sm border-gray-500 rounded-md"
             type='text'
             value={FName}
             onChange={(e)=>setFName(e.target.value)}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Last Name"   className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full
              shadow-sm sm:text-sm border-gray-300 rounded-md"
              type='text'
               value={LName} 
               onChange={(e)=>setLName(e.target.value)} 
               />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Phone Number" type="text"  autocomplete="email" 
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
            <Input  label="Room Number" type="text"   className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={RoomNo} 
             onChange={(e)=>setRoomNo(e.target.value)}
             />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Input  label="Entry Date" type="date" 
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
            shadow-sm sm:text-sm border-gray-300 rounded-md cursor-pointer"
            value={EntryDate} 
            onChange={(e)=>setEntryDate(e.target.value)}
              />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Input  label="Exit Date" 
            autocomplete="postal-code" className="mt-1 focus:ring-blue-500
             focus:border-blue-500 block w-full shadow-sm sm:text-sm
              border-gray-300 rounded-md cursor-pointer"
              type='date'
              value={ExitDate} 
              onChange={(e)=>setExitDate(e.target.value)}
              />
          </div>
        </div>
      </div>
    </div>
</div>
<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="submit" className="inline-flex justify-center py-2 px-4 border 
        border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600
         hover:bg-blue-700 focus:outline-blue focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
      </div>
</form>
    </div>
    
       </div>
    
    </div>
  )
}

export default OccupantsAdd