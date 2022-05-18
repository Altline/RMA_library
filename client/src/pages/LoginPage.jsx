import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useRef, useState}from "react"
import {  Container, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/authContext"
import { Link, useNavigate } from "react-router-dom"


export default function LoginPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()   
        try{
            setError('')
            setLoading(true) 
            await login(emailRef.current.value,passwordRef.current.value)
            navigate('/')
        }catch{
            setError("Failed to Sign In")
        }
        setLoading(false)
    }



    return (
        <Container className="d-flex align-items-center justify-content-center">
        <Card className="w-100" style={{maxWidth: "400px"}}>
            <Card.Body>
                <h1 className="text-center mb-4">Log In</h1>
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
       
                    <Button disabled={loading} variant="primary" type="submit" className="w-100 text-center mt-2">
                        Log In
                    </Button>
            </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/register">Register now</Link>
            </div>
        </Card>
        </Container>
    );
}