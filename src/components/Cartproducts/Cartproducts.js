import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Cartproducts.module.css'
import * as actions from '../../Store/Actions/home';

const Cartproduct = (props) => {
    const [quantity, setquantity] = useState(props.quantity)

    const quantityChangeHandler = (e) => {
        setquantity(e.target.value);
        props.quantityupdate(e.target.value, props.name);
    }

    return (

        <div data-aos="zoom-in">
            <div className={classes.productcontainer}>
                <div className={classes.flexcontainer}>
                    <div className={classes.flex}>
                        <div className={classes.imgcon}>
                            <img src={props.img} alt="product"></img>
                        </div>
                    </div>
                    <div className={classes.flex1}>
                        <p>{props.name}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta amet obcaecati.</p>
                        <p>${props.price}</p>
                    </div>
                    <div className={classes.flex2}>
                        <form>
                            <input className={classes.increasedinput} type="number" id="points" name="points" value={quantity} onChange={(e) => quantityChangeHandler(e)} min="1" step="1" ></input>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        quantityupdate: (quantity, name) => dispatch(actions.quantityupdater(quantity, name))
    }
}

export default connect(null, mapDispatchToProps)(Cartproduct);
