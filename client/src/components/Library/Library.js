import React from 'react';
import Track from './Track';

const Library = ({ library, removeFromLibrary }) => {

   const tracksRendered = library.map(track => {
       const { id } = track;
       return (
           <React.Fragment key={id}>
                <Track track={track} removeFromLibrary={removeFromLibrary} />
           </React.Fragment>
       )
   })

    return (
        <div>
            {tracksRendered}
        </div>
    );
};

export default Library;