import {TableCell,TableRow,TableBody,Button, Table} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
const Occupants = ({ getOccupantId }) => {
  const [occupants, setOccupants] = useState([]);
  useEffect(() => {
    getAllOccupants();
  }, []);
  const getAllOccupants = async () => {
    const data = await EmployeeDataService.getAllOccupants();
    setOccupants(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteOccupant(id);
    getAllOccupants();
  };
  return (
    <div className='px-2 md:px-8'> 
     <p className='text-xl text-gray-600 pt-8 text-center'>Occupants Details</p>
    <div className="mt-6 flex gap-6">
      <Link to='/Occupantadd'><Button 
      className='hover:bg-blue-600
       hover:text-white' variant='outlined'>Add  Occupant</Button>
       </Link>
      <div className="mb-2">
        <Button variant='outlined'  className='hover:bg-blue-600
         hover:text-white' onClick={getAllOccupants}>
          Refresh List
        </Button>
       
      </div>
    </div>
      <div className='overflow-x-auto'>
      <Table className=' rounded-md'>
       <thead>
              <TableCell>SNO</TableCell>
              <TableCell>FName</TableCell>
              <TableCell>SName</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>RoomNo</TableCell>
              <TableCell>EntryDate</TableCell>
              <TableCell>ExitDate</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>        
       </thead>
      
       <TableBody>
       {occupants.map((doc, index) => {
        return(
          <TableRow key={doc.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{doc.FName}</TableCell>
          <TableCell>{doc.LName}</TableCell>
          <TableCell>{doc.Gender}</TableCell>
          <TableCell>{doc.Age}</TableCell>
          <TableCell>{doc.PNumber}</TableCell>
          <TableCell>{doc.RoomNo}</TableCell>
          <TableCell>{doc.EntryDate}</TableCell>
          <TableCell>{doc.ExitDate}</TableCell>
          <TableCell className='text-[red]'>
            <Link to='/occupantadd'>
            <Button variant="outlined" color='success'  onClick={(e) =>
                   getOccupantId(doc.id)}startIcon={<AiFillEdit className='text-[orange]' />}>
             Edit</Button>
            </Link>
            </TableCell>
            <TableCell className='text-[red]'>
            <Button variant="outlined" color='error'  onClick={(e) => 
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]' />}>
             Delete
            </Button>
            </TableCell>
      </TableRow> 

        )
         })}
       </TableBody>
      </Table>
      </div>
    </div>
  )
}

export default Occupants