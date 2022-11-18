
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {Button, Table,TableBody, TableCell, TableContainer,TableHead, TableRow,} from '@mui/material'
const Bookings = ({ getBookingId,getOccupantId }) => {
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
  return (
    <div className='md:px-10 px-2 mb-5 '>
      <div className='pt-8'>
                 <p className='font-bold mb-3 text-xl  pb-2  text-center'> Booking Details</p>
                 <div className=" md:pl-9 flex gap-6">
      <Link to='/BookingsAdd'><Button 
      className='hover:bg-blue-600 hover:text-[rgb(35,165,0)]'
       variant='outlined'>Add Booking</Button></Link>
      <div className="mb-2">
        <Button variant='outlined' 
         className='hover:bg-blue-600 hover:text-[rgb(35,165,0)]'
          onClick={getAllBookings}>
          Refresh List
        </Button>
      </div>
    </div>
            <div className='overflow-x-auto md:p-8 mt-5 '>
      
        <Table >
        <TableContainer className=' rounded-2xl shadow-sm '>
        <TableHead >
          <TableRow className='bg-[#D2DAFF] '>
          <TableCell> SNO</TableCell>
            <TableCell> FName</TableCell>
            <TableCell> LName</TableCell>
            <TableCell> Gender</TableCell>
            <TableCell> Age</TableCell>
            <TableCell> Number</TableCell>
            <TableCell> Homecounty</TableCell>
            <TableCell> H.Category</TableCell>
            <TableCell>  P/GName</TableCell>
            <TableCell> P/GContact</TableCell>
            <TableCell> EName</TableCell>
            <TableCell> ENumber</TableCell>
            <TableCell> Relation</TableCell>
            <TableCell> Institution</TableCell>
            <TableCell> YearOfStudy</TableCell>
            <TableCell> ODocument</TableCell>
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
            <TableCell>{doc.HomeCounty}</TableCell>
            <TableCell>{doc.Category}</TableCell>
            <TableCell>{doc.PGName}</TableCell>
            <TableCell>{doc.PGContact}</TableCell>
            <TableCell>{doc.EName}</TableCell>       
            <TableCell>{doc.EContact}</TableCell>
            <TableCell>{doc.Relation}</TableCell>
            <TableCell>{doc.Institution}</TableCell>
            <TableCell>{doc.YearOfStudy}</TableCell>
            <TableCell>doc</TableCell>
            
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
            </div>
  )
}

export default Bookings