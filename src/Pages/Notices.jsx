import {  useEffect, useState ,Fragment} from "react";
import EmployeeDataService from '../Operations';
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Accordion,AccordionHeader,AccordionBody,} from '@material-tailwind/react'
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
  function Icon({ id, open }) {
    return (
     
     
       <RiArrowDropDownLine
       className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}/>
    );
  }
  const [openn, setOpenn] = useState(0);
 
  const handleOpenn = (value) => {
    setOpenn(openn === value ? 0 : value);
  };
  return (
    <div>
    {notices.map((doc,index )=>{
return(
<div className=' shadow-lg w-full border rounded-md  px-2 my-4  '>
<Fragment>
      <Accordion open={openn === 1} icon={<Icon id={1} open={openn} />}>
        <AccordionHeader onClick={() => handleOpenn(1)} className='flex justify-between text-sm md:text-md text-black'>
             <span>{index + 1}.   {doc.Creator}</span>
             <span>{doc.TheDate}</span>
        </AccordionHeader>
        <AccordionBody>
        { doc.Notice}
        <div className='flex justify-end my-3'><button 
         onClick={(e) => 
          deleteHandler(doc.id)} className=' border border-[#03C9D7] px-6 rounded-md  text-black py-1'>Delete</button></div>
        </AccordionBody>
      </Accordion>
    </Fragment>

</div>
)
})}

</div>
   
  );
}