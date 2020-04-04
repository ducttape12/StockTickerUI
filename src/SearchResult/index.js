import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class SearchResult extends React.Component {
    render() {
        return (
            <Card className="my-4">
                <Card.Body>
                    <Card.Title>{this.props.name} ({this.props.symbol})</Card.Title>
                    <Card.Text>
                        {this.props.stockExchange}
                    </Card.Text>
                    <Button className="float-right" variant="primary">Details</Button>
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