import React from 'react';
import { connect } from 'react-redux';
import classes from './Product.module.css'
import * as actions from '../../Store/Actions/home';

const product = (props) => {

    const addToCartHandler = (name, price, img) => {
        // console.log(name,price,img);
        props.onAddToCart(name, price, img);

    }

    return (
        <div data-aos="fade-up">
            <div className={classes.productcontainer}>
                <div className={classes.flexcontainer} onClick={props.loadProduct}>
                    <div className={classes.flex}>
                        <div className={classes.imgcontainer}>
                            <img src={props.img}></img>
                        </div>
                    </div>
                    <div className={classes.flex1}>
                        <p>{props.name}</p>
                        <p>${props.price}</p>
                    </div>
                </div>
                <button type="button" className={classes.addtocart} onClick={() => { addToCartHandler(props.name, props.price, props.img) }}>Add to cart</button>

            </div>
            </div>
    );
}

// const mapStateToProps=state=>{
//     return{
//         products:state.products,
//     }
//   }

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (name, price, img) => dispatch(actions.addToCart(name, price, img)),
    };
};



export default connect(null, mapDispatchToProps)(product);