import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap"

export default function RegistrationPage() {
    return (
        <Container>
            <Row className="text-align-start">
                <Col lg={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Choose a username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Choose a password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Repeat the password" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}