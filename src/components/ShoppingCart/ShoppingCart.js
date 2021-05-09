import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import classes from './ShoppingCart.module.css'
import Cartproduct from '../Cartproducts/Cartproducts';
import Summary from '../Summary/Summary'
import AOS from 'aos'

const Cart = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const ontoShippingHandler = () => {
    props.history.push({
      pathname: "/yourcart/shipping",
    })
  }
  const backHandler = () => {
    props.history.push({
      pathname: "/"
    })
  }

  let cart = props.cartproduct.map(function (product) {
    return <Cartproduct key={product.name} name={product.name} price={product.price} img={product.img} quantity={product.quantity}></Cartproduct>
  })
  return (
    <React.Fragment>
      <div className={classes.cartcontainer}>
        <div class="row">
          <div class="col-12  col-sm-12 col-md-6 col-lg-8 col-xl-8 item">
            <h1>Shopping Cart</h1>
            {cart}
            <div className={classes.bt}>
              <button className={classes.cartbutton} type="button" onClick={ontoShippingHandler} disabled={props.cartproduct.length > 0 ? false : true}>Next</button>
              <button className={classes.cartbutton} type="button" onClick={backHandler}>Cancel</button>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6  col-lg-4 col-xl-4 item1">
            <Summary displayproduct={false} applybuttonDisable={true}></Summary>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};
const mapstatetoprops = (state) => {
  return {
    cartproduct: state.addTocart
  }
}
export default connect(mapstatetoprops)(Cart);