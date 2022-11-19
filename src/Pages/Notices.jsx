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
    <div className="pl-4 border-indigo-900">
        <div className="justify-end pr-2 flex"><Link to='/noticeadd'>
          <Button className='py-2 px-2 bg-gray-700 text-white'>Add A Notice</Button></Link>
          </div>
          {notices.map((doc,index)=>{
             return(
    <Fragment>
      <Accordion className="w-full mb-4 overflow-auto" open={open === 1} icon={<Icon id={1} open={open} />}>
     
              <div>
          <AccordionHeader onClick={() => handleOpen(1)} className='flex font-semibold text-md justify between'>
          <p>Creator: {doc.Creator} </p> <p>Date:{doc.TheDate}</p>   
        </AccordionHeader>
        <AccordionBody className='mb-3'>
          {doc.Notice}
         <div className="flex justify-between">
         <Link to='/noticeadd'><Button onClick={(e) =>  getNoticeId(doc.id)}  
             className='py-2  mt-2 bg-gray-700 text-white'>Edit Notice
         </Button></Link>
         <Button onClick={(e) =>  deleteHandler(doc.id)}
             className='py-2  mt-2 bg-gray-700 text-white'>Delete Notice
         </Button>
         </div>
        </AccordionBody>
          </div>
      </Accordion>
      <Divider/>
    <Divider/>
    </Fragment>
    )
  })}
   
    <div>
   
    </div>
    </div>
   
  );
}