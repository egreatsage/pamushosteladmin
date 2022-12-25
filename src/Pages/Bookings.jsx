
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {Button, Container, Table,TableBody, TableCell, TableContainer,TableHead, TableRow,} from '@mui/material'
import { Input } from '@material-tailwind/react';
const Bookings = ({ getBookingId }) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getAllBookings();
  }, []);
  const getAllBookings = async () => {
    const data = await EmployeeDataService.getAllBookings();
    setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteBooking(id);
    getAllBookings();
  };
  const [searchedVal, setSearchedVal] = useState("");
  return (
    <div className='md:px-10 px-2 mb-5 mt-9 pt-9 overflow-x-hidden '>
      <Container>
      <div className='pt-8'>
                 <p className='font-bold mb-3 text-xl  pb-2  text-center'> Booking Details</p>
               <div className="md:flex md:justify-between">
               <div className=" md:pl-9 flex gap-6">
      <Link to='/BookingsAdd'><button 
      className='bg-gray-700  px-6 rounded-md  text-white py-1'>Add Booking</button></Link>
      <div className="mb-2">
        <button 
         className='bg-gray-700  px-6 rounded-md  text-white py-1'
          onClick={getAllBookings}>
          Refresh List
        </button>
      </div>
    </div>
    <div className='w-64 flex justify-end'>
    <Input variant="standard" label="Search Here"  color='teal' onChange={(e) => setSearchedVal(e.target.value)} icon={<AiOutlineSearch/>} />
    </div>
               </div>
             
   
            <div className='overflow-x-auto md:p-8  '>
        <Table >
        <TableContainer className='shadow-lg'>
        <TableHead >
          <TableRow className='text-3xl font-bold'>
          <TableCell> SNO</TableCell>
            <TableCell> FName</TableCell>
            <TableCell> LName</TableCell>
            <TableCell> Gender</TableCell>
            <TableCell> Age</TableCell>
            <TableCell> Number</TableCell>
            <TableCell> Homecounty</TableCell>
            <TableCell> H.Category</TableCell>
            <TableCell> P/GName</TableCell>
            <TableCell> P/GContact</TableCell>
            <TableCell> EName</TableCell>
            <TableCell> ENumber</TableCell>
            <TableCell> Relation</TableCell>
            <TableCell> Institution</TableCell>
            <TableCell> YearOfStudy</TableCell>
            <TableCell> UserId</TableCell>
            <TableCell> Edit</TableCell>
            <TableCell> Delete</TableCell>
            <TableCell> Room</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {bookings.
        filter((row) =>
        !searchedVal.length || row.FName
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) 
      ).map((doc, index) => {
        return(
          <TableRow key={doc.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{doc.FName}</TableCell>
            <TableCell>{doc.LName}</TableCell>
            <TableCell>{doc.Gender}</TableCell>
            <TableCell>{doc.Age}</TableCell>
            <TableCell>{doc.PNumber}</TableCell>
            <TableCell>{doc.Homecounty}</TableCell>
            <TableCell>{doc.Category}</TableCell>
            <TableCell>{doc.PGName}</TableCell>
            <TableCell>{doc.PGContact}</TableCell>
            <TableCell>{doc.EName}</TableCell>       
            <TableCell>{doc.EContact}</TableCell>
            <TableCell>{doc.Relation}</TableCell>
            <TableCell>{doc.Institution}</TableCell>
            <TableCell>{doc.YearOfStudy}</TableCell>
            <TableCell>{doc.userId}</TableCell>
            <TableCell className='text-[red]'>
            <Link to='/BookingsAdd'>
            <Button variant="outlined"   onClick={(e) =>
                   getBookingId(doc.id)}startIcon={<AiFillEdit className='text-[orange]'/>}>
             Edit</Button>
            </Link>
            </TableCell>
            <TableCell className='text-[red]'>
            <Button variant="outlined"  onClick={(e) => 
              deleteHandler(doc.id)} startIcon={<MdOutlineDeleteForever className='text-[red]'/>}>
             Delete
            </Button>
            </TableCell>
            <TableCell className='text-[red]'>
            <Link to='/bookingsallocate'><Button variant="outlined"  onClick={(e) => 
               getBookingId(doc.id)}
               >
             Allocate
            </Button></Link>
            </TableCell>
            </TableRow>
            ) })}
            </TableBody>
            </TableContainer>
            </Table>
           
            </div>
            </div>
      </Container>
    
            </div>
  )
}

export default Bookings