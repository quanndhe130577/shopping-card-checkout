import React from 'react';
import { Row, Col } from 'react-bootstrap';

const EstimatedTotal = (props) => {

    const { price } = props;

    return (
        <Row>
            <Col md={6}><h2>Est. Total</h2></Col>
            <Col md={6}><h2>{`$${price}`}</h2></Col>
        </Row>
    )
}

export default EstimatedTotal;