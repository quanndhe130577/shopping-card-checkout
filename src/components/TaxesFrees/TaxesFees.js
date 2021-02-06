import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TaxesFees = (props) => {

    const { taxes } = props;

    return (
        <Row className='show-grid'>
            <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
            <Col md={6}>{`$${taxes}`}</Col>
        </Row>
    )
}

export default TaxesFees;