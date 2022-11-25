import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button
} from "@material-tailwind/react";
import {  Divider } from "@mui/material";
import { Link } from "react-router-dom";
import EmployeeDataService from '../Operations';
import { MdOutlineDeleteForever } from "react-icons/md";
 
function Icon({ id, open, }) {
  

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}


export default function Notices({getNoticeId}) {
  useEffect(() => {
    getAllNotices();
  }, []);
  const getAllNotices = async () => {
    const data = await EmployeeDataService.getAllNotices();
    setNotices(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteNotice(id);
    getAllNotices();
  };
  const [open, setOpen] = useState(0);
  const [notices, setNotices] = useState([]);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
    {notices.map((doc,index)=>{
return(
<div className=' shadow-lg w-full rounded-md py-3 px-2 my-4'>


<div className='flex justify-between'>
<div className=' '>
<p><span className='font-bold'>By: </span> {doc.Creator}</p>
</div>
<div className=''>
<p><span className='font-bold'>Email:</span>{doc.TheDate}</p>
</div>
</div>           
<div className='pt-4 mb-2'>
<Divider/>
<p className='text-gray-700 pb-3'>{doc.Notice}</p>
<Divider/>
<Divider/>
<Divider/>
<Divider className='pb-3'/>
</div>
</div>
)
})}

</div>
   
  );
}