import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookApi from "../BookApi";
import BookCardList from "../components/BookCardList";

export default function HomePage() {
  const [books, setBooks] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    BookApi.queryBooks("").then((res) => setBooks(res.items));
  }, []);

  function onBookClick(book) {
    navigate(`book/${book.id}`);
  }

  return (
    <BookCardList books={books} onBookClick={onBookClick} />
  );
}
