import React, { useState, useEffect } from 'react';
import server from '../api/server';
import axios from 'axios';

import SearchBar from './SearchBar';

const App = () => {

    const [test, setTest] = useState('hello')
    const search = async () => {
        const response = await server.get('/audio-features/6sbXGUn9V9ZaLwLdOfpKRE');
        setTest(response.data.data)
    }

    useEffect(() => {
        search()
    }, [])


    // state for track search results
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div>
            APP
            {test[0].acousticness}
            <SearchBar search={search} />
        </div>
    );
};

export default App;