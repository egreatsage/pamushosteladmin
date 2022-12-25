import { Input } from '@material-tailwind/react';
import { Button,TableContainer,Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import {  MdOutlineDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EmployeeDataService from '../Operations';
const Employees = ({getStaffId}) => {
  const [staffs, setStaff] = useState([]);
  useEffect(() => {
    getAllStaff();
  }, []);
  const getAllStaff = async () => {
    const data = await EmployeeDataService.getAllStaff();
    setStaff(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteStaff(id);
    getAllStaff();
  };
  const [searchedVal, setSearchedVal] = useState("");
  return (
<div className='md:px-10 mb-8'>
    <div className='pt-8 md:pl-8'>
    <p className='text-xl text-gray-600 text-center'>Staff Details</p>
            <div className='overflow-x-auto md:p-8 mt-8 '>
              <div className="md:flex md:justify-between">
              <div className=" md:pl-8 flex gap-6 mb-3">
      <Link to='/employeeadd'><button 
      className='bg-gray-700  px-6 rounded-md  text-white py-1'>Add Employee</button>
       </Link>
      <div className="mb-2">
        <button v className='bg-gray-700  px-6 rounded-md  text-white py-1' onClick={getAllStaff}>
          Refresh List
        </button>
       
      </div>
    </div>
    <div className='w-64 flex justify-end  '>
    <Input variant="standard" label="Search Here"  color='teal' onChange={(e) => setSearchedVal(e.target.value)} icon={<AiOutlineSearch/>} />
    </div>
              </div>
   
   
      <div className='overflow-x-auto md:pl-8'>
      <Table >
      <TableContainer className='rounded-2xl shadow-sm '>
       <TableRow>
              <TableCell>SNO</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Work Category</TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Payment Date</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>        
       </TableRow>
       <TableBody >
       {staffs
       .filter((row) =>
       !searchedVal.length || row.fullname
         .toString()
         .toLowerCase()
         .includes(searchedVal.toString().toLowerCase()) 
     ).map((doc, index) => {
        return(
          <TableRow key={doc.id}>
          <TableCell> {index + 1}</TableCell>
          <TableCell> {doc.fullname}</TableCell>
          <TableCell> {doc.phonenumber}</TableCell>
          <TableCell> {doc.category}</TableCell>
          <TableCell> {doc.userId}</TableCell>
          <TableCell> {doc.salary}</TableCell>
          <TableCell> {doc.PaymentDate}</TableCell>
          <TableCell> {doc.Amount}</TableCell>
          <TableCell> {doc.Balance}</TableCell>
          <TableCell>
                 <Link to='/employeeadd'>
                 <Button variant="outlined"   onClick={(e) =>
                   getStaffId(doc.id)}startIcon={<AiFillEdit className='text-[orange]' />}>
             Edit</Button>
                 </Link>       
            </TableCell>
            <TableCell  data-label='delete' className='text-[red]'>
            <Button variant="outlined"  onClick={(e) => 
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]' />}>
             Delete
            </Button>
            </TableCell>
      </TableRow> 
        )
         })}
       </TableBody>
       </TableContainer>
      </Table>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Employees