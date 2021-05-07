import React, { useState, useEffect } from 'react';
import classes from './Orderplaced.module.css'
import Finalorder from '../Finalorder/Finalorder'
import {
  Redirect
} from 'react-router-dom';
import AOS from 'aos'


const Orderplaced = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [value, setvalue] = useState(false)
  const redirectHandler = () => {
    setvalue(true);
  }
  let redirect = value === true ? <Redirect to="/"></Redirect> : null;
  return (
    <React.Fragment>
      {redirect}

      <div data-aos="zoom-out">
        <div className={classes.placedorder}>
          <h1>Your Order Has Been Placed</h1>
          <p>We are happy to let you know that your order is confirmed.We will try and ship the order in 24 hrs. Visit My Orders section to get further details on your order.</p>
          <button className={classes.placeorderbtn} type="button" onClick={redirectHandler}>Continue Shopping</button>
        </div>
      </div>
      <Finalorder cartdetails={props.history.location.state.cartproduct} shippingdetails={props.history.location.state.shippingdetails} paymentdetails={props.history.location.state.paymentoption}></Finalorder>
    </React.Fragment>
  )
};

export default Orderplaced;