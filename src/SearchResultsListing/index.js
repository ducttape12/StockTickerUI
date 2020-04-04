import React from 'react';
import SearchResult from '../SearchResult';
import PropTypes from 'prop-types';

export default class SearchResultsListing extends React.Component {
    render() {
        return (
            <div>
                {this.props.results.map(result => {
                    return (
                    <SearchResult symbol={result.symbol} name={result.name} stockExchange={result.stockExchange} />
                    );
                })}
            </div>
        );
    }
}

SearchResultsListing.propTypes = {
    results: PropTypes.array
};