import React from 'react';
import SearchResult from '../SearchResult';
import PropTypes from 'prop-types';

export default class SearchResultsListing extends React.Component {
    constructor(props) {
        super(props);

        this.anyResults = this.anyResults.bind(this);
    }

    anyResults() {
        return this.props.results.length > 0;
    }

    render() {
        if (this.anyResults()) {
            console.warn('there are results');
            return (
                <div>
                    <p><small>Displaying the first 30 results</small></p>
                    {this.props.results.map(result => {
                        return (
                            <SearchResult key={result.symbol} symbol={result.symbol} name={result.name} stockExchange={result.stockExchange} />
                        );
                    })}
                </div>
            );
        } else {
            return <></>;
        }
    }
}

SearchResultsListing.propTypes = {
    results: PropTypes.array.isRequired
};