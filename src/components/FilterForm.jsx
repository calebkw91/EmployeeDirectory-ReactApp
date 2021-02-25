import React from "react";

function FilterForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="filter">Search:</label>
                <input
                    onChange={props.handleFilterChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Filter"
                    id="Filter"
                />
                <br />
            </div>
        </form>
    );
}

export default FilterForm;