import {getFirestore, collection, setDoc, doc} from "firebase/firestore"
import app from "./firebase"


const db = getFirestore(app)

export function setUserDB(userID){
    const userRef = doc(db, "users",userID);
    setDoc(userRef,{
        wishList: [],
        bookShelf: [{}]
    });
    
}




export default db