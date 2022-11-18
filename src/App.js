
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
import { useUserAuth } from './contexts/UserAuthContext';

function App() {
  const [employeeId, setEmployeeId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [occupantId, setOccupantId] = useState('');

  const {user} = useUserAuth();

  const getEmployeeHandler = (id)=>{
    setEmployeeId(id);
  }
  const getOccupantHandler = (id)=>{
    setOccupantId(id);
  }
  const getBookingIdHandler=(id) =>{
    setBookingId(id);
  }  
  return (
    <div>
    
    <BrowserRouter>
    
          <div>
              <Navbar/>
            <Routes>
                 {user ?  <div>
                  <Route path="/Dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
              <Route path="/bookings" element={
              <ProtectedRoute><Bookings 
              getBookingId={getBookingIdHandler} /> 
              </ProtectedRoute>}/>
              <Route path="/messages" element={<ProtectedRoute><Messages/> </ProtectedRoute>}/>
              <Route path="/employees" element={
              <ProtectedRoute>
                <Employees getEmployeeId={getEmployeeHandler}/> 
                </ProtectedRoute>
              }/>
              <Route path="/rooms" element={<ProtectedRoute><Rooms/></ProtectedRoute>}/>
              <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
              <Route path="/occupants" element={<ProtectedRoute>
                <Occupants  getOccupantId={getOccupantHandler}/>
                </ProtectedRoute>}/>
              <Route path="/bookingsadd" element={
              <ProtectedRoute>
                <BookingsAdd id={bookingId} setBookingId={setBookingId}/>
                 </ProtectedRoute>}/>
              <Route path="/employeeadd" element={
              <ProtectedRoute>
                <EmployeeAdd id={employeeId} setEmployeeId={setEmployeeId}/>
                </ProtectedRoute>
              }/>
              <Route path="/occupantadd" element={<ProtectedRoute>
                <OccupantsAdd id={occupantId} setBookingId={setOccupantId}/>
                </ProtectedRoute>}/>
              <Route path="/roomsadd" element={<ProtectedRoute><RoomsAdd/></ProtectedRoute>}/>
              <Route path="/usersadd" element={<ProtectedRoute><UsersAdd/></ProtectedRoute>}/>
              <Route path="/bookingsallocate" element={
              <ProtectedRoute>
                <BookingsAllocate id={bookingId} setBookingId={setBookingId}/>
              </ProtectedRoute>}/>
              <Route path="/sidebar" element={<ProtectedRoute><Sidebar/></ProtectedRoute>}/>

                 </div> 
              :
              <Route path="/" element={<Login/>}/>}
            
             
            </Routes>
            
          </div>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
