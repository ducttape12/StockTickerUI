import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        const { symbol } = this.props.match.params;

        fetch(`https://stocktickerwebapi.azurewebsites.net/api/profile/${symbol}`)
            .then(response => response.json())
            .then(result => this.setState({profile: result}));
    }

    render() {
        return (
            <div>
                <img src={this.state.profile.image} alt={this.state.profile.companyName} className="img-thumbnail"></img>
                <h1 className="display-1">{this.state.profile.companyName}</h1>
                <p className="lead">
                    {this.state.profile.description}
                </p>
                <p>{this.state.profile.symbol} on {this.state.profile.exchange} | {this.state.profile.industry} | <a href={this.state.profile.website} target="_blank" rel="noopener noreferrer">{this.state.profile.website}</a></p>

                <p className="h2">Price: {this.state.profile.price}</p>

                <NavLink to="/" className="btn btn-primary float-right"><FontAwesomeIcon icon={faSearch} /> Perform Another Search</NavLink>
            </div>
        );
    }
}