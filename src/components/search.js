import React from "react";
import { Form, Button } from 'react-bootstrap';

function SearchForm(props) {
    return (
        <Form>
            <div className="form-group" style={{ display: 'flex' }}>
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Employee"
                    id="search"
                />
                <Button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                    </Button>
                <Button onClick={props.refreshPage} className="btn btn-primary ml-1">
                    Reset
                    </Button>
                {/* <br /> */}
            </div>
        </Form>
    )
}

export default SearchForm;