import React, { useState } from 'react';
import MainNav from '../MainNav/MainNav'
import classes from './Orderplaced.module.css'
import Footer from '../Footer/Footer'
import Finalorder from '../Finalorder/Finalorder'
import {
    BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Orderplaced =(props)=>{
    console.log(props)
    const[value,setvalue]=useState(false)
    const redirectHandler=()=>{
      setvalue(true);
    }
    let redirect= value===true?<Redirect to="/"></Redirect>:null;
return(
    <React.Fragment>
        {redirect}
    <div className={classes.placedorder}>
        <h1>Your Order Has Been Placed</h1>
        <p>We are happy to let you know that your order is confirmed.We will try and ship the order in 24 hrs. Visit My Orders section to get further details on your order.</p>
        <button className={classes.placeorderbtn} type="button" onClick={redirectHandler}>Continue Shopping</button>
    </div>
    <Finalorder cartdetails={props.history.location.state.cartproduct} shippingdetails={props.history.location.state.shippingdetails} paymentdetails={props.history.location.state.paymentoption}></Finalorder>
    </React.Fragment>
)};

export default Orderplaced ;