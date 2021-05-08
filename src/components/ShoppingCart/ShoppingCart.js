import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import classes from './ShoppingCart.module.css'
import Cartproduct from '../Cartproducts/Cartproducts';
import Summary from '../Summary/Summary'
import AOS from 'aos'

const Cart = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // const [mycartproducts,setmycartproducts]=useState(JSON.parse(localStorage.getItem('mycart'))|| [])
  // useEffect(()=>{
  //   console.log(localStorage.getItem('mycart'))
  //   setmycartproducts(JSON.parse(localStorage.getItem('mycart')))
  //   // localStorage.setItem('mycart',mycartproducts)
  // },[])

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
  // console.log(mycartproducts)
  let cart = props.cartproduct.map(function (product) {
    return <Cartproduct name={product.name} price={product.price} img={product.img} quantity={product.quantity}></Cartproduct>
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
            <Summary displayproduct={false}></Summary>
          </div>
        </div>
      </div>
      {console.log(props)}
    </React.Fragment>
  )
};
const mapstatetoprops = (state) => {
  return {
    cartproduct: state.addTocart
  }
}
export default connect(mapstatetoprops)(Cart);