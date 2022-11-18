import {TableCell,TableRow,TableBody,Button, Table, Input} from '@mui/material'
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
              <TableCell scope='col'>SNO</TableCell>
              <TableCell scope='col'>FName</TableCell>
              <TableCell scope='col'>SName</TableCell>
              <TableCell scope='col'>Gender</TableCell>
              <TableCell scope='col'>Age</TableCell>
              <TableCell scope='col'>Contact</TableCell>
              <TableCell scope='col'>RoomNo</TableCell>
              <TableCell scope='col'>EntryDate</TableCell>
              <TableCell scope='col'>ExitDate</TableCell>
              <TableCell scope='col'>Edit</TableCell>
              <TableCell scope='col'>Delete</TableCell>        
       </thead>
      
       <TableBody>
     
    
         
       </TableBody>
      </Table>
      </div>
    </div>
  )
}

export default Occupants