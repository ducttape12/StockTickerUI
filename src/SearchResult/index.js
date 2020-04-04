import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.linkName = this.linkName.bind(this);
    }

    linkName() {
        return `/profile/${this.props.symbol}`;
    }

    render() {
        return (
            <Card className="my-4">
                <Card.Body>
                    <Card.Title>{this.props.name} ({this.props.symbol})</Card.Title>
                    <Card.Text>
                        Exchange: {this.props.stockExchange}
                    </Card.Text>
                    <NavLink to={this.linkName()} className="btn btn-primary float-right">Company Profile</NavLink>
                </Card.Body>
            </Card>
        );
    }
}

SearchResult.propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    stockExchange: PropTypes.string
};