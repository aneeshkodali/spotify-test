import React from 'react';

const SearchResult = ({ searchResult, addToLibrary }) => {

    // extract keys from object
    const { album, artists, name } = searchResult;

    // get all artist names
    const artistNames = artists.map(artist => artist.name);
    const artistsJoined = artistNames.join(', ');


    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {artistsJoined} - {name}
                </div>
                <div className="image">
                    <img src={album.images[2].url} alt={name} />
                </div>
            </div>
            <div className="ui bottom attached button" onClick={() => addToLibrary(searchResult)}>
                <i className="add icon" />
                Add Song
            </div>
        </div>
    );
};

export default SearchResult;