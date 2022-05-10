import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SearchForm from "./SearchForm";

export default function Navigation(props) {

    function onSearch(query) {
        props.onSearch(query);
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
                        basic-navbar-nav
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
                        <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    <SearchForm onSearch={onSearch} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
