import React from 'react';
import {connect} from 'react-redux'
import classes from './Summary.module.css'
import Summarycart from '../Summarycart/Summarycart'
import summarycart from '../Summarycart/Summarycart';

const summary =(props)=>{
    let subtotal=0;
  if(props.mycart.length){
  props.mycart.forEach(function(item){
   subtotal=subtotal+item.price*item.quantity
  })
}
console.log(subtotal)

let sumcart=props.summarycart.map(function(product){
  return <Summarycart name={product.name} price={product.price} img={product.img}></Summarycart>
})
    return(
  <React.Fragment>
     <h1 className={classes.summaryheading}>Summary</h1>
     {props.displayproduct===undefined?sumcart:null}
     {console.log(props.displayproduct)}
    <div className={classes.summaryitem}>
                <hr></hr>
                <p>ENTER COUPON CODE</p>
                <hr></hr>
                <p>SUBTOTAL:{subtotal}</p>
                <p>SHIPPING:FREE</p>
                <p>TAXES:18%</p>
                <hr></hr>
                <p>TOTAL:{subtotal*1.18}</p>
                </div>
  </React.Fragment>
)};

const mapStateToProps=(state)=>{
    return{
        mycart:state.addTocart,
        summarycart:state.addTocart
    }
}


export default connect(mapStateToProps)(summary);