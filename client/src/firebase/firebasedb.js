import { async } from "@firebase/util";
import {getFirestore, collection, setDoc, doc, getDoc} from "firebase/firestore"
import app from "./firebase"


const db = getFirestore(app)
var userRef;


export function setUserDBref(userID){
    userRef = collection(db,"users", userID,"books");
}
export function clearuserDBref(){userRef=null;}

export async function setOnBookShelfDB(bookId, status){
    console.log("outside")
    if(userRef!==null){
        console.log("inside")
        const documentRef = doc(userRef,bookId);
        await setDoc(documentRef,{
        bookShelf: status
    }, {merge: true})
    }
}

export async function setOnWishlistDB(bookId, status){
    console.log("outside 2")
    if(userRef!==null){  
        console.log("inside 2")  
        const documentRef = doc(userRef,bookId);
        await  setDoc(documentRef,{
        wishlist: status
    }, {merge: true})
    }
}


export async function getBook(bookId){
    if(userRef!==null){
        const documentRef = doc(userRef,bookId)
        const snapshot = await getDoc(documentRef)
        if(snapshot.exists()){
           return snapshot.data();
        }else{
            console.log("no data")
        }
    }
}




export default db