import React from "react";
import { Form } from 'react-bootstrap';

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
                    placeholder="Search Employee by Sirname"
                    id="search"
                />
                {/* <Button onClick={props.refreshPage}>Refresh Page</Button> */}
            </div>
        </Form>
    )
}

export default SearchForm;