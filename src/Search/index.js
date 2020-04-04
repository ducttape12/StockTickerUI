import React from 'react';
import SearchFilter from '../SearchFilter';
import SearchResultsListing from '../SearchResultsListing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.filterChange = this.filterChange.bind(this);

        this.state = {
            searchResults: [],
            loading: false
        };
    }

    filterChange(filter) {
        if(filter === '') {
            this.setState({searchResults: [], loading: false});
        } else {
            this.setState({loading: true});
            fetch(`https://stocktickerwebapi.azurewebsites.net/api/search?query=${filter}`)
                .then(response => response.json())
                .then(results => this.setState({searchResults: results, loading: false}));
        }
    }

    render() {
        return (
            <div>
                <SearchFilter onChange={this.filterChange} />
                {this.state.loading && <p className="text-center h2"><FontAwesomeIcon icon={faSpinner} spin /> Please wait... Loading...</p>}
                {!this.state.loading && <SearchResultsListing results={this.state.searchResults} />}
            </div>
        );
    }
}