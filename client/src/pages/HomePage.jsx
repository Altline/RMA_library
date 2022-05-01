import React, { useEffect, useState } from "react";
import BookApi from "../BookApi";
import BookCardList from "../components/BookCardList";

export default function HomePage() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
      BookApi.queryBooks("").then((res) => setBooks(res.items));
    }, []);

    return (
        <BookCardList books={books}/>
    );
}
