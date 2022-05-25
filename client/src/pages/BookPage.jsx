import { useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row, ToggleButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookApi from "../BookApi";
import Loading from "../components/Loading";
import ReactHtmlParser from "react-html-parser"
import { getBook, setOnBookShelfDB, setOnWishlistDB } from "../firebase/firebasedb";
import { async } from "@firebase/util";

export default function BookPage() {
    const { bookId } = useParams();

    const [book, setBook] = useState(null);
    const [onBookshelf, setOnBookshelf] = useState(false);
    const [onWishlist, setOnWishlist] = useState(false);


    useEffect(() => {
        BookApi.getBook(bookId).then((res) => setBook(res.data));
        
    }, []);

    useEffect(() => {    
        bookStatus()
      });

    async function bookStatus(){
        var bookStatus = await getBook(bookId)
        if(bookStatus.wishlist) setOnWishlist(true)
        if(bookStatus.bookShelf)setOnBookshelf(true)
        console.log(bookStatus)
    }

    function toggleBookshelf() {
        console.log("prije promjene "+ onBookshelf)
        setOnBookShelfDB(bookId, !onBookshelf)
        setOnBookshelf(onBookshelf => !onBookshelf)

    }

    function toggleWishlist() {
        console.log("prije promjene "+ onWishlist)
        setOnWishlistDB(bookId, !onWishlist)
        setOnWishlist(onWishlist => !onWishlist)
    }

    if (book != null) return (
        <Container>
            <Row xs={1} md={2} className="gy-4 justify-content-center justify-content-md-start">
                <Col xs="auto" md="auto">
                    <Image src={book.imageLinks.thumbnail} />
                </Col>
                <Col md={9} xl={10} className="text-align-start">
                    <h1>{book.title}</h1>
                    <h2>
                        {book.subtitle ? book.subtitle + " - " : ""}
                        <i>{book.authors.join(", ")}</i>
                    </h2>
                    <p>{ReactHtmlParser(book.description)}</p>
                    <div className="info-header">Categories</div>
                    <p>{book.categories}</p>
                </Col>
            </Row>
            <Row className="gx-5 my-3 justify-content-center">
                <Col xs="auto">
                    <div className="info-header">Publisher</div>
                    <p>{book.publisher}</p>
                </Col>
                <Col xs="auto">
                    <div className="info-header">Published on</div>
                    <p>{book.publishedDate}</p>
                </Col>
            </Row>
            <Row className="g-2 justify-content-center justify-content-md-end">
                <Col xs="auto">
                    <ToggleButton
                        type="checkbox"
                        variant="outline-primary"
                        checked={onBookshelf}
                        onClick={toggleBookshelf}
                    >
                        { onBookshelf ? "Remove from bookshelf" : "Add to bookshelf" }
                    </ToggleButton>
                </Col>
                <Col xs="auto">
                    <ToggleButton
                        type="checkbox"
                        variant="outline-primary"
                        checked={onWishlist}
                        onClick={toggleWishlist}
                    >
                        { onWishlist ? "Remove from wishlist" : "Add to wishlist" }
                    </ToggleButton>
                </Col>
            </Row>
        </Container>);

    else return <Loading />;
}