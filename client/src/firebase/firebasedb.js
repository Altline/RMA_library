import { getFirestore, collection, setDoc, doc, getDoc } from "firebase/firestore"
import app from "./firebase"

const db = getFirestore(app)

var booksRef;

export function setUserDBref(userID) {
    booksRef = collection(db, "users", userID, "books");
}
export function clearuserDBref() { 
    booksRef = null;
}

export async function setOnBookShelfDB(bookId, status) {
    if (booksRef) {
        const documentRef = doc(booksRef, bookId);
        await setDoc(documentRef, {
            bookShelf: status
        }, { merge: true })
    }
}

export async function setOnWishlistDB(bookId, status) {
    if (booksRef) {
        const documentRef = doc(booksRef, bookId);
        await setDoc(documentRef, {
            wishlist: status
        }, { merge: true })
    }
}

export async function getBook(bookId) {
    if (booksRef) {
        const documentRef = doc(booksRef, bookId)
        const snapshot = await getDoc(documentRef)
        if (snapshot.exists()) {
            return snapshot.data();
        }
    }
}

export default db