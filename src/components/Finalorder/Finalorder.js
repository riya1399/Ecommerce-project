import React from 'react';
import classes from './Finalorder.module.css'

const finalorder =(props)=>{  
    let details=props.cartdetails.map(function(item){
        return(
            <div className={classes.finalcartprod}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className={classes.imgcon}>
                <img src={item.img} alt="product"></img>
                </div>
            </div>
        )
    })
    return(
    <div className={classes.finalordercontainer}>
        <div className={classes.flexcontainerfinal}>
        <div className={classes.flex}>
           <h4>Cart Detail</h4>
           <hr></hr>
           {details}

        </div>
        <div className={classes.flex1}>
        <h4>Shipping Details</h4>
        <hr></hr>
        <p>{props.shippingdetails.firstName.name}</p>
        <p>{props.shippingdetails.lastName.name}</p>
        <p>{props.shippingdetails.address.name}</p>
        <p>{props.shippingdetails.address2.name}</p>
        <p>{props.shippingdetails.country.name}</p>
        <p>{props.shippingdetails.city.name}</p>
        <p>{props.shippingdetails.zipCode.name}</p>
        <p>{props.shippingdetails.phoneNumber.name}</p>
        <p></p>
        </div>
        <div className={classes.flex2}>
        <h4>Payment option</h4>
        <hr></hr>
        <p>{props.paymentdetails}</p>
        </div>
        </div>
        </div>
)};

export default finalorder;