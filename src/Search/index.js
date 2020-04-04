import React from 'react';
import SearchFilter from '../SearchFilter';
import SearchResultsListing from '../SearchResultsListing';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.filterChange = this.filterChange.bind(this);

        this.state = {
            searchResults: []
        };
    }

    filterChange(filter) {
        fetch(`https://localhost:44390/api/search?query=${filter}`)
            .then(response => response.json())
            .then(results => this.setState({searchResults: results}));
    }

    render() {
        return (
            <div className="container container-padding">
                <SearchFilter onChange={this.filterChange} />
                <SearchResultsListing results={this.state.searchResults} />
            </div>
        );
    }
}