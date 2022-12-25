
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import {Navbar,Login, Sidebar} from './componets'
import Bookings from './Pages/Bookings'
import { useStateContext } from './contexts/ContextProvider';
import ProtectedRoute from './componets/ProtectedRoute';
import Messages from './Pages/Messages';
import Employees from './Pages/Employees';
import Occupants from './Pages/Occupants';
import Rooms from './Pages/Rooms';
import Users from './Pages/Users';
import BookingsAdd from './Pages/BookingsAdd';
import BookingsAllocate from './Pages/BookingsAllocate';
import EmployeeAdd from './Pages/EmployeeAdd';
import OccupantsAdd from './Pages/OccupantsAdd';
import RoomsAdd from './Pages/RoomsAdd';
import UsersAdd from './Pages/UsersAdd';
import { useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Notices from './Pages/Notices';
import NoticeAdd from './Pages/NoticeAdd';
import  Reminders  from './Pages/Reminders';

function App() {
  const [staffId, setStaffId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [occupantId, setOccupantId] = useState('');
  const [noticeId, setNoticeId] = useState('');


  const getStaffHandler = (id)=>{
    setStaffId(id);
  }
  const getOccupantHandler = (id)=>{
    setOccupantId(id);
  }
  const getNoticeHandler = (id)=>{
    setNoticeId(id);
  }
  const getBookingIdHandler=(id) =>{
    setBookingId(id);
  }  
  return (
    <div>
    
    <BrowserRouter>
    
             <ProtectedRoute><Navbar/></ProtectedRoute>
              <Routes>
              <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
              <Route path="/bookings" element={
              <ProtectedRoute><Bookings 
              getBookingId={getBookingIdHandler} /> 
              </ProtectedRoute>}/>
              <Route path="/messages" element={<ProtectedRoute><Messages/> </ProtectedRoute>}/>
              <Route path="/employees" element={
              <ProtectedRoute>
                <Employees getStaffId={getStaffHandler}/> 
                </ProtectedRoute>
              }/>
              <Route path="/rooms" element={<ProtectedRoute><Rooms/></ProtectedRoute>}/>
              
              <Route path="/notice" element={<ProtectedRoute>
                <Notices getNoticeId={getNoticeHandler}/>
                </ProtectedRoute>}/>

              <Route path="/noticeadd" element={<ProtectedRoute>
                <NoticeAdd id={noticeId} setNoticeId={setNoticeId}/>
                </ProtectedRoute>}/>
              
              <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
              <Route path="/occupants" element={<ProtectedRoute>
                <Occupants  getOccupantId={getOccupantHandler}/>
                </ProtectedRoute>}/>
              <Route path="/bookingsadd" element={
              <ProtectedRoute>
                <BookingsAdd id={bookingId} setBookingId={setBookingId}/>
                 </ProtectedRoute>}/>
              <Route path="/employeeadd" element={
              <ProtectedRoute>
                <EmployeeAdd id={staffId} setStaffId={setStaffId}/>
                </ProtectedRoute>
              }/>
              <Route path="/occupantadd" element={<ProtectedRoute>
                <OccupantsAdd id={occupantId} setOccupantId={setOccupantId}/>
                </ProtectedRoute>}/>
              <Route path="/roomsadd" element={<ProtectedRoute><RoomsAdd/></ProtectedRoute>}/>
              <Route path="/usersadd" element={<ProtectedRoute><UsersAdd/></ProtectedRoute>}/>
              <Route path="/bookingsallocate" element={
              <ProtectedRoute>
                <BookingsAllocate id={bookingId} setBookingId={setBookingId}/>
              </ProtectedRoute>}/>
              <Route path="/sidebar" element={<ProtectedRoute><Sidebar/></ProtectedRoute>}/>
              <Route path="/Reminders" element={<ProtectedRoute><Reminders/></ProtectedRoute>}/>
              <Route path="/login" element={<Login/>}/>              
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
