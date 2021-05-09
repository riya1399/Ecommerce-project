import React,{useRef} from 'react';
import { connect } from 'react-redux'
import classes from './Summary.module.css'
import Summarycart from '../Summarycart/Summarycart'
import * as action from '../../Store/Actions/home'

const Summary = (props) => {
 
  let sumcart = props.mycart.map(function (product) {
    return <Summarycart key={product.name} name={product.name} price={product.price} img={product.img}></Summarycart>
  })
  const inputref=useRef()
  const applyCoupon=()=>{
    if(inputref.current.value==="BOOTCAMP2021"){
      props.applycoupon()
    }
  }
  return (
    <React.Fragment>
      <h1 className={classes.summaryheading}>Summary</h1>
      {props.displayproduct === undefined ? sumcart : null}
      <div className={classes.summaryitem}>
        <hr></hr>
        <input type="text" placeholder="ENTER COUPON CODE" ref={inputref}></input>
       <button type="button" className={classes.btapply} onClick={applyCoupon} disabled={props.applybuttonDisable}>Apply</button>
        <hr></hr>
        <p>SUBTOTAL:{props.subtotal}</p>
        <p>SHIPPING:FREE</p>
        <p>TAXES:18%</p>
        <hr></hr>
        <p>TOTAL:{props.subtotal * 1.18}</p>
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    mycart: state.addTocart,
    subtotal:state.subtotal
  }
}
const mapDispatchToProps=dispatch =>{
  return{
  applycoupon:()=>dispatch(action.applycoupon())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Summary);