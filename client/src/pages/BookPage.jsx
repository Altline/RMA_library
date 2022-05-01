import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function BookPage() {
    const { bookId } = useParams();

    return(
        <Container>
            <Row>
                <Col>
                    Book {bookId}
                </Col>
            </Row>
        </Container>
    );
}