import React, { useState,useEffect } from 'react'
import {Input} from "@material-tailwind/react";
import { Alert} from '@mui/material';
import EmployeeDataService from '../Operations';
import {  useNavigate } from 'react-router-dom';
import { Navbar } from '../componets';

const EmployeeAdd = ({ id, setStaffId }) => {
  const [fullname, setfullname] = useState('');
  const [category, setcategory] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [userId, setuserId] = useState('');
  const [salary, setsalary] = useState('');
  const [PaymentDate, setPaymentDate] = useState('');
  const [Balance, setBalance] = useState('');
  const [Amount, setAmount] = useState('');
  const [message, setmessage] = useState({error: false, msg:''})
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    if (fullname === "" || category === "") {
      setmessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newStaff = {
     fullname,category,phonenumber,salary,PaymentDate,Amount,Balance,userId  
    };
    try {
      if (id !== undefined && id !== "") {
        await EmployeeDataService.updateStaff(id, newStaff);
        setStaffId("");
        setmessage({ error: false, msg: "Updated successfully!" });
        setTimeout(() => {
          navigate('/employees');
      }, 3000);
      } else {
        await EmployeeDataService.addStaff(newStaff);
        setmessage({ error: false, msg: "New Employee added successfully!" });
        setTimeout(() => {
          navigate('/employees');
      }, 3000);
      }
    } catch (err) {
      setmessage({ error: true, msg: err.message });
    }

    setfullname(""); setcategory("");setcategory("");setsalary("");setphonenumber("");
    setPaymentDate("");setAmount("");setuserId("");setBalance("");
    
  };
  const editHandler = async () => {
    setmessage("");
    try {
      const docSnap = await EmployeeDataService.getStaff(id);
      setfullname(docSnap.data().fullname);
      setcategory(docSnap.data().category);
      setphonenumber(docSnap.data().phonenumber);
      setuserId(docSnap.data().userId);
      setsalary(docSnap.data().salary);
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
    }   //eslint-disable-next-line
  }, [id]);
 
 
  return (
    <div>
       <div><Navbar/></div>
       <div className='pt-5 bg-[#FAFBFB]'>
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
  <div className="mt-5 md:mt-0 md:col-span-2 ">
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
            value={phonenumber}
            onChange={(e)=>setphonenumber(e.target.value)}
            />
          </div>
         
          <div className="col-span-6 sm:col-span-3">
            <Input  label="category" type="text"  
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full
             shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={category} 
             onChange={(e)=>setcategory(e.target.value)}/>
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="salary" type="text"   className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={salary}
             onChange={(e)=>setsalary(e.target.value)}
             />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <Input  label="User Id" type="text"   className="mt-1
             focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
             sm:text-sm border-gray-300 rounded-md"
             value={userId}
             onChange={(e)=>setuserId(e.target.value)}
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
<button  className='bg-gray-700  px-6 rounded-md border text-white py-1'type='submit' variant='standard'>Submit</button>
      </div>
</form>
    </div>
    
      
    
    </div>
    </div>
   
  )
}

export default EmployeeAdd