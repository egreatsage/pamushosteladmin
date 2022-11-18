import { db } from "./dbconfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "Users");
const employeeCollectionRef = collection(db, "Employees");
const occupantCollectionRef = collection(db, "Occupants");
const bookingCollectionRef = collection(db, "Bookings");
const messagesCollectionRef = collection(db, "Messages");

class EmployeeDataService {
  //login User 
  login = async (email, password) => {
    await getDocs(usersCollectionRef)
      .then(response => {
        const users = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        users.forEach(element => {
          if (element.email === email) {
            if(element.password === password){
              if(element?.isAdmin){
                console.log("IS admin")   
                         }else{
                          console.log("IS not admin")

                         }

              return localStorage.setItem("user", JSON.stringify(element))
            }
          }
        });
      })
  }
  //Signup User
  register = async (newUser) => {
    await addDoc(usersCollectionRef, newUser)
  }
  
//logout
  logout = () => {
    localStorage.removeItem("user");
  }

  //Employees
  addEmployee = (newEmployee) => {
    return addDoc(employeeCollectionRef, newEmployee);
  };
  //Occupants
  addOccupant = (newOccupant) => {
    return addDoc(occupantCollectionRef, newOccupant);
  };
  //Bookings
  addBooking = (newBooking) => {
    return addDoc(bookingCollectionRef, newBooking);
  };
  //Messages
  addMessage = (newMessage) => {
    return addDoc(messagesCollectionRef, newMessage);
  };
  //Employees
  updateEmployee = (id, updatedEmployee) => {
    const employeeDoc = doc(db, "Employees", id);
    return updateDoc(employeeDoc, updatedEmployee);
  };
  //Occupants
  updateOccupant = (id, updatedOccupant) => {
    const occupantDoc = doc(db, "Occupants", id);
    return updateDoc(occupantDoc, updatedOccupant);
  };
  //Bookings
  updateBooking = (id, updatedBooking) => {
    const bookingDoc = doc(db, "Bookings", id);
    return updateDoc(bookingDoc, updatedBooking);
  };
  //Employee
  deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id);
    return deleteDoc(employeeDoc);
  };
  // Occupants
  deleteOccupant = (id) => {
    const occupantDoc = doc(db, "Occupants", id);
    return deleteDoc(occupantDoc);
  };
  // Bookings
  deleteBooking = (id) => {
    const bookingDoc = doc(db, "Bookings", id);
    return deleteDoc(bookingDoc);
  };
  //Messages
  deleteMessage = (id) => {
    const messageDoc = doc(db, "Messages", id);
    return deleteDoc(messageDoc);
  };
  // Employees
  getAllEmployees = () => {
    return getDocs(employeeCollectionRef);
  };
  // Occupants
  getAllOccupants = () => {
    return getDocs(occupantCollectionRef);
  };
  // Occupants
  getAllMessages = () => {
    return getDocs(messagesCollectionRef);
  };
  //Bookings
  getAllBookings = () => {
    return getDocs(bookingCollectionRef);
  };
  //Employees
  getEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id);
    return getDoc(employeeDoc);
  };
  //Messages
  getMessage= (id) => {
    const messageDoc = doc(db, "Messages", id);
    return getDoc(messageDoc);
  };
  //Occupants
  getOccupant = (id) => {
    const occupantDoc = doc(db, "Occupants", id);
    return getDoc(occupantDoc);
  };
  //Bookings
  getBooking = (id) => {
    const bookingDoc = doc(db, "Bookings", id);
    return getDoc(bookingDoc);
  };
}

export default new EmployeeDataService();

