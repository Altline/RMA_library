import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookApi from "../BookApi";
import Loading from "../components/Loading";
import ReactHtmlParser from "react-html-parser"

export default function BookPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        BookApi.getBook(bookId).then((res) => setBook(res));
    }, []);

    return (
        <Container>
            {book != null ?
                <Row xs={1} md={2} className="justify-content-center justify-content-md-start">
                    <Col xs="auto" md="auto" style={{ alignSelf: "center" }}>
                        <Image src={book.imageLinks.thumbnail} />
                    </Col>
                    <Col md={9} xl={10} className="text-align-start">
                        <h1>{book.title}</h1>
                        <h2>
                            {book.subtitle + " - "}
                            <i>{book.authors.join(", ")}</i>
                        </h2>
                        <p>{ReactHtmlParser(book.description)}</p>
                    </Col>
                </Row>

                : <Loading />
            }
        </Container>
    );
}