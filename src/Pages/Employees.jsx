import { Button,TableContainer,Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import {  MdOutlineDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EmployeeDataService from '../Operations';
import { Navbar } from '../componets';

const Employees = ({getEmployeeId}) => {

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployees();
  }, []);
  //get firebase function(getDocs) for all employee details
  const getAllEmployees = async () => {
    const data = await EmployeeDataService.getAllEmployees();
    setEmployees(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteEmployee(id);
    getAllEmployees();
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
         hover:text-white' onClick={getAllEmployees}>
          Refresh List
        </Button>
       
      </div>
    </div>
      <div className='overflow-x-auto md:pl-8'>
      <Table>
      <TableContainer className='rounded-2xl shadow-sm '>
       <TableRow className='bg-[#D2DAFF] '>
              <TableCell>SNO</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Work Category</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Payment Date</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>        
       </TableRow>
      
       <TableBody>
       {employees.map((doc, index) => {
        return(
          <TableRow key={doc.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>  {doc.fullname}</TableCell>
          <TableCell> {doc.Contact}</TableCell>
          <TableCell> {doc.Category}</TableCell>
          <TableCell> {doc.Salary}</TableCell>
          <TableCell> {doc.PaymentDate}</TableCell>
          <TableCell> {doc.Amount}</TableCell>
          <TableCell>{doc.Balance}</TableCell>
          <TableCell>
                 <Link to='/EmployeeAdd'>
                 <Button variant="outlined"   onClick={(e) =>
                   getEmployeeId(doc.id)}startIcon={<AiFillEdit className='text-[orange]' />}>
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