import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

    const [test, setTest] = useState(null);
    const search = async () => {
        const response = await axios.get('http://localhost:5000');
        const { data } = response;
        console.log(response)
    }
    useEffect(() => {
        search()
    }, [])

    return (
        <div>
            APP
        </div>
    );
};

export default App;