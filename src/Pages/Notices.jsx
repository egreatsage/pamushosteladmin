import {  useEffect, useState } from "react";
import {  Divider } from "@mui/material";
import EmployeeDataService from '../Operations';
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
  const [notices, setNotices] = useState([]);
  return (
    <div>
    {notices.map((doc)=>{
return(
<div className=' shadow-lg w-full rounded-md py-3 px-2 my-4 border border-l-black'>


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
<Divider className='pb-3'/>
<div className=' flex justify-end gap-2'>
          <button className='bg-gray-700  px-6 rounded-md border text-white py-1' 
           onClick={(e) => 
            deleteHandler(doc.id)}>Delete</button>
                <button className='bg-gray-700  px-6 rounded-md border text-white py-1' 
          onClick={(e) =>
            getNoticeId(doc.id)}>Edit</button>
</div>
</div>
</div>
)
})}

</div>
   
  );
}