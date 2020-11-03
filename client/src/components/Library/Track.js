import React from 'react';

const Track = ({ track, removeFromLibrary }) => {
    return (
        <div>
            {track.name}
            <button className="ui button" onClick={() => removeFromLibrary(track)}>
                Remove
            </button>
        </div>
    );
};

export default Track;