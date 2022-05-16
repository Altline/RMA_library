import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useRef, useState}from "react"
import { Container, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/authContext"
import { Link, useNavigate } from "react-router-dom"
import { setUserDB } from "../firebase/firebasedb"


export default function RegistrationPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords are not matching")
        }
        
        try{
            setError('')
            setLoading(true) 
            await signup(emailRef.current.value,passwordRef.current.value)
            setUserDB(currentUser.uid);
            navigate('/')
        }catch{
            setError("Failed to create account")
        }
        setLoading(false)
    }



    return (
        <Container className="d-flex align-items-center justify-content-center">
        <Card className="w-100" style={{maxWidth: "400px"}}>
            <Card.Body>
                <h1 className="text-center mb-4">Sign up</h1>
                {currentUser && currentUser.email}
                {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Choose a username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Choose a password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Repeat the password" />
                        </Form.Group>       
                    <Button disabled={loading} variant="primary" type="submit" className="w-100 text-center mt-2">
                        Register
                    </Button>
            </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/login">Login</Link>
            </div>
        </Card>
        </Container>
    );
}