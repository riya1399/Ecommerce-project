import React from 'react';
import classes from './Summarycart.module.css'

const summarycart = (props) => {
    return (<div className={classes.productcontainer}>
        <div className={classes.flexcontainer}>
            <div className={classes.flex}>
                <div className={classes.imgcon}>
                    <img src={props.img} alt="product"></img>
                </div>
            </div>
            <div className={classes.flex1}>
                <p>{props.name}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>${props.price}</p>
            </div>
        </div>
    </div>
    );
}


export default summarycart;