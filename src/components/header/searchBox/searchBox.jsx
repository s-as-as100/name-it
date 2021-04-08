import React from 'react'

import './searchBox.css';

const SearchBox = () => {
    return (  
        <div className="search-container">
            <input placeholder="Type keywords" className="search-input"/> 
        </div>
    );
}
 
export default SearchBox;