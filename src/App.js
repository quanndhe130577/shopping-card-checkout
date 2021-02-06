import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import SubTotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickUpSavings/PickUpSavings'
import TaxesFees from './components/TaxesFrees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails';
//import { PromoCode as PromoCodeDiscount } from './components/PromoCode/PromoCode';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }

    this.giveDiscountHandler = this.giveDiscountHandler.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.09
    }, () => {
      this.setState({
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
      })
    })
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function () {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Container className='purchase-card'>
          <SubTotal price={this.state.total.toFixed(2)}></SubTotal>
          <PickupSavings price={this.state.PickupSavings}></PickupSavings>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
          <hr></hr>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}></EstimatedTotal>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}></ItemDetails>
          <hr />
          <PromoCodeDiscount
            giveDiscount={this.giveDiscountHandler}
            isDisable={this.state.disablePromoButton}
          >

          </PromoCodeDiscount>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
