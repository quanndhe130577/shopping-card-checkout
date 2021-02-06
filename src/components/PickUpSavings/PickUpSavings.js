import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}

const PickupSavings = (props) => {

    const tooltip = (
        <Tooltip id='tooltip'>
            <p>Pick up your order in the store</p>
        </Tooltip>
    )
    const { price } = props;

    

    return (
        <Row className='show-grid'>
            <Col md={6}>
                <OverlayTrigger placement='bottom' overlay={tooltip}>
                    <div style={styles.pickupSavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col style={styles.totalSavings} md={6}>{`$${price}`}</Col>
        </Row>
    )
}

export default PickupSavings;
