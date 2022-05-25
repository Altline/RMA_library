import { getFirestore, collection, setDoc, doc, getDoc, getDocs } from "firebase/firestore"
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
        var bookShelfBooks = [];
        const books = await getDocs(booksRef);
        books.forEach(e => {
            if (e.data().bookShelf) {
                bookShelfBooks = bookShelfBooks.concat(e);
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
        var wishlistBooks = [];
        const books = await getDocs(booksRef);
        books.forEach(e => {
            if (e.data().wishlist) {
                wishlistBooks = wishlistBooks.concat(e);
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

export default db