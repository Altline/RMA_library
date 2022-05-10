import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookApi from "../BookApi";
import BookCardList from "../components/BookCardList";

export default function HomePage() {
  const { searchQuery } = useParams();
  const [books, setBooks] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchQuery ? searchQuery : "Web programming";
    BookApi.searchBooks(query).then((res) => {
      setBooks(res.data.items);
    });
  }, [searchQuery]);

  function onBookClick(book) {
    navigate(`/book/${book.id}`);
  }

  return (
    <BookCardList books={books} onBookClick={onBookClick} />
  );
}
