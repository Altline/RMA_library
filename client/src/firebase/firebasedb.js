import { getFirestore, collection, setDoc, doc, getDoc, getDocs, addDoc, deleteDoc } from "firebase/firestore"
import app from "./firebase"

const db = getFirestore(app)

var booksRef;

export function setUserDBref(userID) {
    booksRef = collection(db, "users", userID, "books");
}
export function clearuserDBref() {
    booksRef = null;
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

export async function getBookShelf() {
    if (booksRef) {
        const bookShelfBooks = [];
        const books = await getDocs(booksRef);
        books.forEach(e => {
            if (e.data().bookShelf) {
                bookShelfBooks.push(e);
            }
        });
        return bookShelfBooks;
    }
}

export async function setOnBookShelfDB(bookId, status) {
    if (booksRef) {
        const documentRef = doc(booksRef, bookId);
        await setDoc(documentRef, {
            bookShelf: status
        }, { merge: true })
    }
}

export async function getWishlist() {
    if (booksRef) {
        const wishlistBooks = [];
        const books = await getDocs(booksRef);
        books.forEach(e => {
            if (e.data().wishlist) {
                wishlistBooks.push(e);
            }
        });
        return wishlistBooks;
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

export async function addNote(bookId, text) {
    if (booksRef) {
        const documentRef = collection(booksRef, bookId, "notes");
        await addDoc(documentRef, {
            timestamp: Date.now(),
            text: text
        })
    }
}


export async function deleteNote(bookId, noteId) {
    if (booksRef) {
        const documentRef = doc(booksRef, bookId, "notes", noteId);
        await deleteDoc(documentRef);
    }
}

export async function getNotes(bookId) {
    if (booksRef) {
        const notes = [];
        const collectionRef = collection(booksRef, bookId, "notes");
        const noteDocs = await getDocs(collectionRef);
        noteDocs.forEach(e => {
            const data = e.data();
            notes.push({ "id": e.id, "text": data.text, "timestamp": data.timestamp })
        })
        return notes;
    }
}

export default db