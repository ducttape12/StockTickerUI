import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">{this.props.brand}</Navbar.Brand>
            </Navbar>
        );
    }
}