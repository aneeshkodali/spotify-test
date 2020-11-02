import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ searchResults }) => {
    console.log(searchResults[0]);

    const searchResultsRendered = searchResults.map(searchResult => {
        return (
            <React.Fragment key={searchResult.id}>
                <SearchResult searchResult={searchResult} />
            </React.Fragment>
        )
    })
    return (
        <div className="ui cards">
            {searchResultsRendered}
        </div>
    );
};

export default SearchResults;