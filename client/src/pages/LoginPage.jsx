import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

export default function LoginPage() {
    return (
        <Container>
            <Row className="text-align-start">
                <Col lg={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group lg={4} className="mb-3" controlId="formRemember">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}