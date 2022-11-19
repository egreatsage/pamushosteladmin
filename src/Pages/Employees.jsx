import { Button,Input,TableContainer,Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import {  MdOutlineDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EmployeeDataService from '../Operations';
import { Navbar } from '../componets';

const Employees = ({getStaffId}) => {
  const [query, setQuery] = useState("")
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
  return (
<div className='md:px-10 mb-8'>
    <div className='pt-8 md:pl-8'>
    <p className='text-xl text-gray-600 text-center'>Employee Details</p>
            <div className='overflow-x-auto md:p-8 mt-8 '>
    <div className=" md:pl-8 flex gap-6">
      <Link to='/employeeadd'><Button 
      className='hover:bg-blue-600
       hover:text-white' variant='outlined'>Add Employee</Button>
       </Link>
      <div className="mb-2">
        <Button variant='outlined'  className='hover:bg-blue-600
         hover:text-white' onClick={getAllStaff}>
          Refresh List
        </Button>
       
      </div>
    </div>
    <div>
      <Input type="search" placeholder='Search' className=''
      // onChange={(e)=>setQuery(e.target.value)}
      />
    </div>
      <div className='overflow-x-auto md:pl-8'>
      <Table>
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
       <TableBody>
       {staffs.map((doc, index) => {
        return(
          <TableRow key={doc.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>  {doc.fullname}</TableCell>
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