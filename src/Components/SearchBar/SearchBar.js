import React from 'react';
import "./searchbar.css"

const SearchBar = (props) => {
    return (
         <div className="searchbar">
            <input  type="text" className="form-control" placeholder="Enter Heroes" aria-describedby="basic-addon1" onChange={(e) => props.change(e) }/>
        </div>
    );
};

export default SearchBar;