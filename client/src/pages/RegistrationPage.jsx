import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap"
import "./RegistrationPage.css"

export default function RegistrationPage() {
    return (
        <Row>
            <Col lg={{ span: 4, offset: 4 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group lg={4} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="checkbox" type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}