import { db } from "./dbconfig";
import {collection,addDoc,} from "firebase/firestore";
const usersCollectionRef = collection(db, "Users");
const bookingCollectionRef = collection(db, "Bookings");
const messagesCollectionRef = collection(db, "Messages")

class dbdataservice {
 
  //Bookings
  addBooking = (newBooking) => {
    return addDoc(bookingCollectionRef, newBooking);
  };
  //Messages
  addMessage = (newMessage) => {
    return addDoc(messagesCollectionRef, newMessage);
  }
   //Messages
   addUser = (newUser) => {
    return addDoc(usersCollectionRef, newUser);
  }
}

export default new dbdataservice();

