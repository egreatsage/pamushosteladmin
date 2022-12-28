import React,{useEffect, useState ,Fragment}from 'react';
import EmployeeDataService from '../Operations';
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Accordion,AccordionHeader,AccordionBody,} from '@material-tailwind/react'
const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getAllMessages();
  }, []);
  const getAllMessages = async () => {
    const data = await EmployeeDataService.getAllMessages();
    setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteMessage(id);
    getAllMessages();
  };
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
        <div className='md:mt-12 pt-1 border border-blue-gray-50 shadow-lg rounded-md'>
                  {messages.map((doc,index)=>{
return(
  <div className='  w-full px-2 my-4  rounded-md'>
         <Fragment>
      <Accordion open={openn === 1} icon={<Icon id={1} open={openn} />}>
        <AccordionHeader onClick={() => handleOpenn(1)} className='flex justify-between text-sm md:text-md text-black'>
             <span>{index + 1}. {doc.fullname}</span>
             <span>{doc.email}</span>
  
        </AccordionHeader>
        <AccordionBody >
        { doc.message}
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
    </div>

            
        
     
  )
}

export default Messages