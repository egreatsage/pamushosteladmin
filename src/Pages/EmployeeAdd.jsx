import React, { useState,useEffect } from 'react'
import {Input} from "@material-tailwind/react";
import { Alert,Button} from '@mui/material';
import EmployeeDataService from '../Operations';
import {  useNavigate } from 'react-router-dom';

const EmployeeAdd = ({ id, setEmployeeId }) => {
  const [fullname, setfullname] = useState('');
  const [Category, setCategory] = useState('');
  const [Contact, setContact] = useState('');
  const [Salary, setSalary] = useState('');
  const [PaymentDate, setPaymentDate] = useState('');
  const [Balance, setBalance] = useState('');
  const [Amount, setAmount] = useState('');
  const [message, setmessage] = useState({error: false, msg:''})
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    if (fullname === "" || Category === "") {
      setmessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newEmployee = {
     fullname,Category,Contact,Salary,PaymentDate,Amount,Balance    
    };
    
    try {
      if (id !== undefined && id !== "") {
        await EmployeeDataService.updateEmployee(id, newEmployee);
        setEmployeeId("");
        setmessage({ error: false, msg: "Updated successfully!" });
      } else {
        await EmployeeDataService.addEmployee(newEmployee);
        setmessage({ error: false, msg: "New Employee added successfully!" });
        setTimeout(() => {
          navigate('/Employees');
      }, 3000);
        
      }
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }

    setfullname(""); setCategory("");setCategory("");setSalary("");setContact("");
    setPaymentDate("");setAmount("");
    
  };

  const editHandler = async () => {
    setmessage("");
    try {
      const docSnap = await EmployeeDataService.getEmployee(id);
      setfullname(docSnap.data().fullname);
      setCategory(docSnap.data().Category);
      setContact(docSnap.data().Contact);
      setSalary(docSnap.data().Salary);
      setPaymentDate(docSnap.data().PaymentDate);
      setAmount(docSnap.data().Amount);
      setBalance(docSnap.data().Balance);
     
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }
  };
  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className='pt-5'>
    <p className='text-xl text-gray-600 text-center'>Add Or Edit Employee Details</p>
       
    <div class="mt-5 ">
      {message?.msg && (
        <Alert 
        color={message?.error?'error' :'info'}
        dismissible
        onClose={()=> setmessage('')}>
          {''}
          {message?.msg}
        </Alert>
      )}
      <div className='md:pl-9 '>
      </div>
<form onSubmit={handleSubmit} >
<div className="mt-5 md:mt-0 md:col-span-2">
    <div className="shadow  sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Full Name"   className="mt-1 focus:ring-blue-500 focus:border-blue-500 block 
            w-full
             shadow-sm sm:text-sm border-gray-500 rounded-md"
             type='text'
             value={fullname}
             onChange={(e)=>setfullname(e.target.value)}
            />
          </div>
         
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Phone Number" type="text" 
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
            shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={Contact}
            onChange={(e)=>setContact(e.target.value)}
            />
          </div>
         
          <div className="col-span-6 sm:col-span-3">
            <Input  label="Category" type="text"  
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full
             shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={Category} 
             onChange={(e)=>setCategory(e.target.value)}/>
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="Salary" type="text"   className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={Salary}
             onChange={(e)=>setSalary(e.target.value)}
             />
          </div>
          
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Input  label="Amount Paid" 
            autocomplete="postal-code" className="mt-1 focus:ring-blue-500
             focus:border-blue-500 block w-full shadow-sm sm:text-sm
              border-gray-300 rounded-md cursor-pointer"
              type='text'
              value={Amount} 
               onChange={(e)=>setAmount(e.target.value)}
              />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Input  label="Payment Date" type="date" 
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
            shadow-sm sm:text-sm border-gray-300 rounded-md cursor-pointer"
            value={PaymentDate} 
            onChange={(e)=>setPaymentDate(e.target.value)}
              />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Input  label="Balance" 
            autocomplete="postal-code" className="mt-1 focus:ring-blue-500
             focus:border-blue-500 block w-full shadow-sm sm:text-sm
              border-gray-300 rounded-md cursor-pointer"
              type='text'
              value={Balance} 
               onChange={(e)=>setBalance(e.target.value)}
              />
          </div>
        </div>
      </div>
    </div>
</div>
<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Button type='submit' variant='contained'>Submit</Button>
      </div>
</form>
    </div>
    
      
    
    </div>
  )
}

export default EmployeeAdd