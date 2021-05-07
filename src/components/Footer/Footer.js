import React from 'react';
import classes from './Footer.module.css'


const footer = (props) => (
  <div className={classes.Footer}>
    <footer>
      <ul>
        <li><a className={classes.footerlinks} href="#home">Home</a></li>
        <li><a className={classes.footerlinks} href="#about">About</a></li>
        <li><a className={classes.footerlinks} href="#shop">Shop</a></li>
        <li><a className={classes.footerlinks} href="#help">Help</a></li>
      </ul>
    </footer>
  </div>
);

export default footer;