import {TableCell,TableRow,TableBody,Button,TableContainer, Table, Input} from '@mui/material'
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
      <Link to='/Occupantadd'><button 
      className='text-white bg-gray-700 px-2 py-2 rounded-md hover:shadow-lg' variant='outlined'>Add  Occupant</button>
       </Link>
      <div className="mb-2">
        <button className='text-white bg-gray-700 px-2 py-2 rounded-md hover:shadow-lg' onClick={getAllOccupants}>
          Refresh List
        </button>
      </div>
    </div>
  
      <div className='overflow-x-auto'>
      <Table>
              <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>FName</TableCell>
              <TableCell>SName</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>RoomNo</TableCell>
              <TableCell>User Id</TableCell>
              <TableCell>Exit Date</TableCell>
              <TableCell>ExitDate</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>        
              </TableRow>
       <TableBody>
        {occupants.map((doc,index)=>{
             return(
       <TableRow>
              <TableCell>{index+1}</TableCell>
              <TableCell>{doc.FName}</TableCell>
              <TableCell>{doc.LName}</TableCell>
              <TableCell>{doc.Gender}</TableCell>
              <TableCell>{doc.Age}</TableCell>
              <TableCell>{doc.PNumber}</TableCell>
              <TableCell>{doc.RoomNo}</TableCell>
              <TableCell>{doc.userId}</TableCell>
              <TableCell>{doc.EntryDate}</TableCell>
              <TableCell>{doc.ExitDate}</TableCell>
              <TableCell className='text-[red]'>
            <Link to='/occupantadd'>
            <Button    onClick={(e) =>
                   getOccupantId(doc.id)}startIcon={<AiFillEdit className='text-[orange]'/>}>
             <span className='text-[orange]'>Edit</span> </Button>
            </Link>
            </TableCell>  
            <TableCell className=''>
            <Button  onClick={(e) => 
              deleteHandler(doc.id)}startIcon={<MdOutlineDeleteForever className='text-[red]'/>}>
             <span className='text-[red]'>Delete</span>
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