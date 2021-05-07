import React from 'react';
import MainNav from '../../components/MainNav/MainNav'
import Navbar from '../../components/Navbar/Navbar'
import Shipping from '../../components/Shipping/Shipping';
import Cart from '../../components/ShoppingCart/ShoppingCart';
import Payment from '../../components/Payment/Payment'
import Footer from '../../components/Footer/Footer'
import {
  Route,
  Switch
} from 'react-router-dom';
import Orderplaced from '../../components/Orderplaced/Orderplaced'


const yourcart = (props) => (
  <React.Fragment>
    <MainNav disable={true}></MainNav>
    <Navbar></Navbar>
    <Switch>
      <Route path="/yourcart/payment/orderplaced" component={Orderplaced}></Route>
      <Route path="/yourcart/shipping" component={Shipping}></Route>
      <Route path="/yourcart/payment" component={Payment}></Route>
      <Route path="/yourcart/" component={Cart}></Route>
    </Switch>
    <Footer></Footer>
  </React.Fragment>
);

export default yourcart;