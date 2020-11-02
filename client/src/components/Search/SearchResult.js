import React from 'react';

const SearchResult = ({ searchResult }) => {

    // extract keys from object
    const { album, artists, name } = searchResult;

    // get all artist names
    const artistNames = artists.map(artist => artist.name);
    const artistsJoined = artistNames.join(', ');


    return (
        <div className="card">
            <div className="content">
                {artistsJoined} - {name}
                <img src={album.images[2].url} alt={name} />
            </div>
        </div>
    );
};

export default SearchResult;