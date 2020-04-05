import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import StockTickerClient from '../StockTickerClient';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Alert from 'react-bootstrap/Alert';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            loading: false
        };
    }

    componentDidMount() {
        const { symbol } = this.props.match.params;

        this.setState({ loading: true });

        StockTickerClient
            .getProfile(symbol)
            .then(result => this.setState({ profile: result, loading: false }));
    }

    render() {
        if (this.state.loading) {
            return <p className="text-center h2"><FontAwesomeIcon icon={faSpinner} spin /> Please wait... Loading...</p>;
        } else {
            return (
                <div>
                    <Media>
                        <img src={this.state.profile.image} alt={this.state.profile.companyName} height={64} width={64} className="mr-3"></img>
                        <Media.Body>
                            <h2>{this.state.profile.companyName}</h2>
                            <p>{this.state.profile.symbol} on {this.state.profile.exchange} | {this.state.profile.industry} | <a href={this.state.profile.website} target="_blank" rel="noopener noreferrer">{this.state.profile.website}</a></p>
                        </Media.Body>
                    </Media>

                    <Row className="justify-content-md-center my-2">
                        <Col md={12} lg={6}>
                            <Alert variant='info'>
                                <p className="h2 text-center">Price: {this.state.profile.price}</p>
                            </Alert>
                        </Col>
                    </Row>

                    <p>{this.state.profile.description}</p>

                    <Row className="justify-content-md-end mt-4">
                        <Col sm={12} md={4}>
                            <NavLink to="/" className="btn btn-primary btn-block"><FontAwesomeIcon icon={faSearch} /> Perform Another Search</NavLink>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}