import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookApi from "../BookApi";
import BookCardList from "../components/BookCardList";
import { useAuth } from "../contexts/authContext";

export default function BookshelfPage() {
    const [books, setBooks] = useState(null);
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            BookApi.getBookShelf().then((res) => {
                setBooks(res);
            });
        }
      }, [currentUser]);

    function onBookClick(book) {
        navigate(`/book/${book.id}`);
    }

    return (
        <BookCardList books={books} onBookClick={onBookClick} />
    );
}