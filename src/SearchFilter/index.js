import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);

        this.filterChanged = this.filterChanged.bind(this);
        this.fireFilterChanged = this.fireFilterChanged.bind(this);
    }

    fireFilterChanged(filter) {
        if(typeof this.props.onChange === 'function') {
            this.props.onChange(filter);
        }
    }

    filterChanged(event) {
        const filter = event.target.value;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.fireFilterChanged(filter), 300);
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Stock Ticker:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Symbol" onChange={this.filterChanged} />
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

SearchFilter.propTypes = {
    onChange: PropTypes.func
};