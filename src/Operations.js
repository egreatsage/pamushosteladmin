import { db,storage } from "./dbconfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getDownloadURL, ref,uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const usersCollectionRef = collection(db, "Users");
const staffCollectionRef = collection(db, "Staff");
const occupantCollectionRef = collection(db, "Occupants");
const bookingCollectionRef = collection(db, "Bookings");
const messagesCollectionRef = collection(db, "Messages");
const noticesCollectionRef = collection(db, "Notices");
const roomsCollectionRef = collection(db, "Rooms");
const remindersCollectionRef = collection(db, "Reminders");
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
  //Staff
  addStaff = (newStaff) => {
    return addDoc(staffCollectionRef, newStaff);
  };
  addReminder = (newReminder) => {
    return addDoc(remindersCollectionRef, newReminder);
  };
  addNotice = (newNotice) => {
    return addDoc(noticesCollectionRef, newNotice);
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
  updateStaff = (id, updatedStaff) => {
    const staffDoc = doc(db, "Staff", id);
    return updateDoc(staffDoc, updatedStaff);
  };
  updateNotice = (id, updatedNotice) => {
    const noticeDoc = doc(db, "Notices", id);
    return updateDoc(noticeDoc, updatedNotice);
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
  deleteStaff = (id) => {
    const staffDoc = doc(db, "Staff", id);
    return deleteDoc(staffDoc);
  };
  deleteNotice = (id) => {
    const noticeDoc = doc(db, "Notices", id);
    return deleteDoc(noticeDoc);
  };
  // Occupants
  deleteOccupant = (id) => {
    const occupantDoc = doc(db, "Occupants", id);
    return deleteDoc(occupantDoc);
  };
  deleteReminder = (id) => {
    const reminderDoc = doc(db, "Reminders", id);
    return deleteDoc(reminderDoc);
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
  getAllStaff = () => {
    return getDocs(staffCollectionRef);
  };
  getAllRooms = () => {
    return getDocs(roomsCollectionRef);
  };
  getAllNotices = () => {
    return getDocs(noticesCollectionRef);
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
  getAllReminders = () => {
    return getDocs(remindersCollectionRef);
  };
  //Employees
  getStaff = (id) => {
    const staffDoc = doc(db, "Staff", id);
    return getDoc(staffDoc);
  };
  getReminder = (id) => {
    const reminderDoc = doc(db, "Reminders", id);
    return getDoc(reminderDoc);
  };
  getNotice = (id) => {
    const noticeDoc = doc(db, "Notices", id);
    return getDoc(noticeDoc);
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

export async function upload(file,user,setLoading){
  const fileRef = ref(storage,user.uid )
   setLoading(true) // eslint-disable-next-line 
   const snapshot = await uploadBytes(fileRef,file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(user,{photoURL})
  setLoading(false);
  alert('uploaded successfully')
}

