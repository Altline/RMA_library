import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function SearchForm(props) {
    const [query, setQuery] = useState("");

    function onSearchInputChange(event) {
        setQuery(event.target.value)
    }

    function onSearch(event) {
        props.onSearch(query)
        event.preventDefault();
    }

    return (
        <Form className="d-flex" onSubmit={onSearch}>
            <FormControl
                type="search"
                placeholder="Search books"
                className="me-2"
                aria-label="Search"
                style={{minWidth: "400px"}}
                value={query}
                onChange={onSearchInputChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
    );
}