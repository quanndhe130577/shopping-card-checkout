import React, { useState } from 'react';
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

const PromoCode = (props) => {

    const { promoCode, isDisable, giveDiscount } = props;

    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        props.handleChange(e);
    }

    return (
        <div>
            <Button
                className='promo-code-button'
                variant='link'
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {
                    !open ?
                        'Apply' : 'Hide'
                } promo code
            {open ? ' -' : ' +'}
            </Button>
            <Collapse in={open}>
                <div className='well'>
                    <Row className='show-grid'>
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId='formInlineName'>
                                    <FormLabel>
                                        PromoCode
                                    </FormLabel>
                                    <FormControl type='text' placeholder='Enter promo code' value={promoCode} onChange={handleChange} />
                                </FormGroup>
                                <Button
                                    block
                                    variant='success'
                                    className='btn-round'
                                    disabled={isDisable}
                                    onClick={giveDiscount}
                                >
                                    Apply Promo Code
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Collapse>
        </div>
    )
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(PromoCode);