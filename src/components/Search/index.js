import React from "react";

const Search = (props) => {

    return (
        <nav className="navbar justify-content-center">
            <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
                <input
                className="form-control"
                value={props.value}
                name="search"
                onChange={props.handleInputChange}
                type="search"
                placeholder="Search Here"
                />
            </form>
        </nav>
    );
};

export default Search;