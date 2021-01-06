import React from "react";
import { Form, Button } from 'react-bootstrap';

function SearchForm(props) {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Search Employee</Form.Label>
                <Form.Control type="input" placeholder="search here" />
            </Form.Group>
            <Button onClick={props.handleFormSubmit} variant="primary">Primary</Button>{' '}
        </Form>
    );
}

export default SearchForm;

