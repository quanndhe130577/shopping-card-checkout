import React, { useState } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

const ItemDetails = (props) => {

    const [open, setOpen] = useState(false);

    const { price } = props;

    return (
        <div>
            <Button className='item-details-button' variant='link' onClick={() => {
                setOpen(!open);
            }}>
                {open ? 'Hide' : 'See'} item details
                {!open ? ` +` : ' -'}
            </Button>
            {/* {
                open ? 
                (
                    <Collapse in={open}>
                        <div>
                            <Media>
                                <img
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                ></img>
                                <Media.Body>
                                    <p>Essentials by OFM ESS-3085 Racing Stle Leather Gaming Chair, Red</p>
                                    <Row className='show-grid'>
                                        <Col md={6}>
                                            <strong>{`$${price}`}</strong>
                                            <br/>
                                            <strong className='price-strike'>{`$${price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </div>
                    </Collapse>
                )
                :
                null
            }
        </div> */}
            <Collapse in={open}>
                <div className='well'>
                    <Media>
                        <img 
                            style={{float: 'left'}}
                            width={100}
                            height={100}
                            alt="thumbnail"
                            src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                        ></img>
                        <Media.Body style={{paddingLeft: '10px'}}>
                            <p>Essentials by OFM ESS-3085 Racing Stle Leather Gaming Chair, Red</p>
                            <Row className='show-grid'>
                                <Col md={6}>
                                    <strong>{`$${price}`}</strong>
                                    <br />
                                    <strong className='price-strike'>{`$${price}`}</strong>
                                </Col>
                                <Col md={6}>
                                    Qty: 1
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </div>
            </Collapse>
        </div>
    )

}

export default ItemDetails;