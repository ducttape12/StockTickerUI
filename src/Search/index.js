import React from 'react';
import SearchFilter from '../SearchFilter';
import SearchResult from '../SearchResult';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.filterChange = this.filterChange.bind(this);

        this.state = {
            results: []
        };
    }

    filterChange(filter) {
        fetch(`https://localhost:44390/api/search?query=${filter}`)
            .then(response => response.json())
            .then(results => this.setState({results: results}));
    }

    render() {
        return (
            <div className="container container-padding">
                <div>This is the search component</div>
                <SearchFilter onChange={this.filterChange} />

                <div>
                    {this.state.results.map(result => {
                        return (
                        <SearchResult symbol={result.symbol} name={result.name} stockExchange={result.stockExchange} />
                        );
                    })}
                </div>
            </div>
        );
    }
}