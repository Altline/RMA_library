import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookApi from "../BookApi";
import BookCardList from "../components/BookCardList";
import InfiniteScroll from 'react-infinite-scroller';

const resultCount = 10;

export default function HomePage() {
  const { searchQuery } = useParams();
  const [books, setBooks] = useState(null);
  const navigate = useNavigate();
  var nextPage = useRef(0);

  const _searchQuery = searchQuery ? searchQuery : "Web programming";

  useEffect(() => {
    nextPage.current = 0;
    loadNextPage();
  }, [searchQuery]);
  
    function loadNextPage() {
      BookApi.searchBooks(_searchQuery, nextPage.current * resultCount, resultCount).then((res) => {
        const newBooks = books && nextPage.current !== 0 ? books.concat(res.data.items) : res.data.items;
        setBooks(newBooks);
        nextPage.current++;
      });
    }

  function onBookClick(book) {
    navigate(`/book/${book.id}`);
  }

  return (
    <InfiniteScroll
      initialLoad={false}
      loadMore={loadNextPage}
      hasMore={true}
      loader={<div key={0}>Loading ...</div>}
    >

      <BookCardList books={books} onBookClick={onBookClick} />
    </InfiniteScroll>

  );
}
