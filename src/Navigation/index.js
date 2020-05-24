import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><FontAwesomeIcon icon={faChartBar} /> {this.props.brand}</Navbar.Brand>
            </Navbar>
        );
    }
}

Navigation.propTypes = {
    brand: PropTypes.string
}