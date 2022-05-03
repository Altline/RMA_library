import { Card, Col, Container, Row } from "react-bootstrap"
import ReactHtmlParser from "react-html-parser"
import { clipString } from "../Utils";


export default function BookCard(props) {
    const book = props.book;

    return (
        <Card className="book-card" onClick={_ => props.onClick(book)}>
            <Container>
                <Row xs={1} md={2} className="justify-content-center justify-content-md-start">
                    <Col xs="auto" md="auto" style={{ alignSelf: "center" }}>
                        <Card.Img src={book.imageLinks.thumbnail} />
                    </Col>
                    <Col md={9} xl={10}>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Subtitle>
                                {book.subtitle + " - "}
                                <i>{book.authors.join(", ")}</i>
                            </Card.Subtitle>
                            <Card.Text>
                                {ReactHtmlParser(clipString(book.description, 600))}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}