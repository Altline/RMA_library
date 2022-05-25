import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SearchForm from "./SearchForm";
import { useAuth } from "../contexts/authContext";
import { Button } from "react-bootstrap";

export default function Navigation(props) {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState()

    function onSearch(query) {
        props.onSearch(query);
    }
    async function handleLogout(e) {
        e.preventDefault()
        setError('')
        try {
            await logout()
        } catch (error) {
            setError('Failed to logout')
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>My library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
                        <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        {currentUser && currentUser.email}
                    </Navbar.Text>
                    <Navbar.Text>
                        {error}
                    </Navbar.Text>
                    <Nav className="mx-2">
                        {currentUser ? <Button onClick={handleLogout}>Logout</Button> : <Nav.Link href="/login">Log in</Nav.Link>}
                        {!currentUser && <Nav.Link href="/register">Register</Nav.Link>}
                    </Nav>
                    <SearchForm onSearch={onSearch} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
