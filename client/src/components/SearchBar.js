import React, { useState } from 'react';

const SearchBar = ({ search }) => {

    // state for search term
    const [searchTerm, setSearchTerm] = useState('');

    // function to submit search term
    const onFormSubmit = (event) => {
        event.preventDefault();
        //search(searchTerm);
        console.log(searchTerm);
        setSearchTerm('');
    }
    return (
        <form className="ui form" onSubmit={onFormSubmit}>
            <div className="ui action input">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    className="ui button"
                    type="submit"
                >
                    <i className="search icon" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;