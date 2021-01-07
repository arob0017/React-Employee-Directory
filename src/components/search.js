import React, { Component } from "react";
import { Form } from 'react-bootstrap';



class SearchForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Form>
                <Form.Group>

                    <Form.Label htmlFor="search">Search:</Form.Label>
                    <Form.Input
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for an Employee"
                        id="search"
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default SearchForm;

