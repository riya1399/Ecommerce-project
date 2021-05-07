import React from 'react';
import classes from './Navbar.module.css'

const navbar =(props)=>(
  <React.Fragment>
          <nav>
            <ul className={classes.cartlinks}>
            <li className={classes.cartli} >1. Shopping Cart</li>
            <li className={classes.cartli}>2. Shipping Details</li>
            <li className={classes.cartli}>3. Payment Options</li>
            </ul>
          </nav>
           </React.Fragment>
);

export default navbar;