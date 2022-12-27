import {TableCell,TableRow,TableBody,Button,Table} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Input } from '@material-tailwind/react';
import { Navbar } from '../componets';
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
  const [searchedVal, setSearchedVal] = useState("");
  return (
    <div>
       <div><Navbar/></div>
       <div className='mt-9 pt-8 px-2'> 
     <p className='text-xl text-gray-600 mt-8 text-center'>Occupants Details</p>
     <div className="md:flex md:justify-between">
     <div className="mt-6 flex gap-6">
      <Link to='/Occupantadd'><button 
      className='bg-gray-700  px-6 rounded-md  text-white py-1' variant='outlined'>Add  Occupant</button>
       </Link>
      <div className="mb-2">
        <button className='bg-gray-700  px-6 rounded-md  text-white py-1' onClick={getAllOccupants}>
          Refresh List
        </button>
      </div>
    </div>
    <div className='w-64 flex justify-end'>
    <Input variant="standard" label="Search Here"  color='teal' onChange={(e) => setSearchedVal(e.target.value)} icon={<AiOutlineSearch/>} />
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
        {occupants.filter((row) =>
         !searchedVal.length || row.FName
           .toString()
           .toLowerCase()
           .includes(searchedVal.toString().toLowerCase()) 
       ).map((doc,index)=>{
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
    </div>
   
    
  )
}

export default Occupants