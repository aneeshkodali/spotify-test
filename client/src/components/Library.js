import React from 'react';

const Library = ({ library, removeFromLibrary }) => {

   const tracksRendered = library.map(track => {
       const { id, name } = track;
       return (
           <React.Fragment key={id}>
                <li>{name} - {id}</li>
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