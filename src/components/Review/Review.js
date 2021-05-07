import React from 'react';
import classes from './Review.module.css'

const review = (props) => (
  <React.Fragment>
    <div className={classes.reviewitem}>
      <div className="row">
        <div className="col-12  col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
        <i class="fas fa-user fa-2x"></i>
          <h4>{props.name}</h4>
          <p>{props.date}</p>
          <p>{props.stars}</p>
          <hr></hr>
        </div>
        <div className="col-12  col-sm-12 col-md-6 col-lg-8 col-xl-8  p-2">
          <p>{props.desc}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta amet obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta amet obcaecati</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default review;