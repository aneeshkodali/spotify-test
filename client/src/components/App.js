import React, { useState } from 'react';
import server from '../api/server';

import SearchBar from './Search/SearchBar';
import SearchResults from './Search/SearchResults';
import Library from './Library/Library';

const App = () => {

    // state for library
    const [library, setLibrary] = useState([]);

    // function to add song to library
    const addToLibrary = (track) => {
        setLibrary([...library, track]);
    };

    //function to remove song from library
    const removeFromLibrary = (track) => {
        const { id } = track;
        setLibrary(library.filter(track => track.id !== id));
    }

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
            <Library library={library} removeFromLibrary={removeFromLibrary} />
            <SearchBar search={search} />
            <SearchResults searchResults={searchResults} addToLibrary={addToLibrary} />
        </div>
    );
};

export default App;