import React, { Component } from 'react';
import searchbar from "./searchbar.css"

class SearchBar extends Component {
    render() {
        return (
        <div className="searchbar">
            <input className="input-box" type="SEARCH FOR HEROES"/>
            <button className="search-button"> Search </button>
        </div>
        );
    }
}

export default SearchBar;