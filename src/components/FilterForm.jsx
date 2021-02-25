import React from "react";
import { Form } from "react-bootstrap";

function FilterForm(props) {
    return (
        <Form>
            <Form.Group controlId="filterForm.FilterInput">
                <Form.Label htmlFor="filter">Search:</Form.Label>
                <Form.Control
                    onChange={props.handleFilterChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Filter"
                    id="Filter"
                />
            </Form.Group>
            <Form.Group controlId="filterForm.FilterSelect">
                <Form.Control as="select" className="form-select" value={props.selectValue} onChange={props.handleSelect} aria-label="Default select example">
                    <option selected>Filter by: </option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="title">Title</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default FilterForm;