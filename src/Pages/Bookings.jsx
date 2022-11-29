
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {Button, Container, LinearProgress, Table,TableBody, TableCell, TableContainer,TableHead, TableRow,} from '@mui/material'
const Bookings = ({ getBookingId,getOccupantId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setloading] = useState(false);
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
  if(loading){
    return <div>
      <LinearProgress/>
    </div>
  }
  return (
    <div className='md:px-10 px-2 mb-5 overflow-x-hidden '>
      <Container>
      <div className='pt-8'>
                 <p className='font-bold mb-3 text-xl  pb-2  text-center'> Booking Details</p>
                 <div className=" md:pl-9 flex gap-6">
      <Link to='/BookingsAdd'><button 
      className='text-white bg-gray-700 px-2 py-2 rounded-md hover:shadow-lg'>Add Booking</button></Link>
      <div className="mb-2">
        <button variant='outlined' 
         className='text-white bg-gray-700 px-2 py-2 rounded-md hover:shadow-lg'
          onClick={getAllBookings}>
          Refresh List
        </button>
      </div>
    </div>
    <div className='md:pl-9'>
    <input type='search' placeholder='Search Here' className='border mt-4 border-gray-500 py-2 rounded-md px-2  '/>
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
        {bookings.map((doc, index) => {
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
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]'/>}>
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