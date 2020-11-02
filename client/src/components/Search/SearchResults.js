import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ searchResults }) => {

    const searchResultsRendered = searchResults.map(searchResult => {
        return (
            <React.Fragment key={searchResult.id}>
                <SearchResult searchResult={searchResult} />
            </React.Fragment>
        )
    });

    return (
        <div className="ui cards">
            {searchResultsRendered}
        </div>
    );
};

export default SearchResults;