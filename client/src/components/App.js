import React, { useState } from 'react';
import server from '../api/server';

import SearchBar from './Search/SearchBar';
import SearchResults from './Search/SearchResults';

const App = () => {

    // state for track search results
    const [searchResults, setSearchResults] = useState([]);

    // function to search for term and update search results
    const search = async (term) => {
        const response = await server.get(`/search/${term}`);
        setSearchResults(response.data.tracks.items)
    }

    //6sbXGUn9V9ZaLwLdOfpKRE

    return (
        <div>
            APP
            <SearchBar search={search} />
            <SearchResults searchResults={searchResults} />
        </div>
    );
};

export default App;