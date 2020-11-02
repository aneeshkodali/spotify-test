import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

    const [test, setTest] = useState('hello')
    const search = async () => {
        const response = await axios.get('http://localhost:5000/audio-features/6sbXGUn9V9ZaLwLdOfpKRE');
        console.log(response.data.data);
        setTest(response.data.data)
    }
    useEffect(() => {
        search()
    }, []);



    return (
        <div>
            {test[0].acousticness}
        </div>
    );
};

export default App;