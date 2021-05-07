import React from 'react';
import classes from './Productdescription.module.css'
import Review from '../Review/Review'
import MainNav from '../MainNav/MainNav'
import Footer from '../Footer/Footer'
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/home';

const productdescription = (props) => {


  const addToCartHandler = (name, price, img) => {
    props.onAddToCart(name, price, img);

  }
  let stars = 0;
  let no_of_review = 0;
  props.history.location.state.product.review.forEach(function (item) {
    stars = stars + item.star
  })
  stars = parseInt(stars / props.history.location.state.product.review.length)
  no_of_review = props.history.location.state.product.review.length
  let arr = [0, 0, 0, 0, 0];
  let abc = arr.map((item, index) => {
    if (index < stars) {
      return (<i class="fas fa-star"></i>);
    }
    else
      return (<i class="far fa-star"></i>)
  })
  let review = props.history.location.state.product.review.map(function (rev) {
    let arr = [0, 0, 0, 0, 0];
    let abc = arr.map((item, index) => {
      if (index < rev.star) {
        return (<i class="fas fa-star"></i>);
      }
      else
        return (<i class="far fa-star"></i>)
    })
    return (
      <Review name={rev.name} date={rev.date} stars={abc} desc={rev.desc}></Review>
    )
  })
  return (
    <React.Fragment>
      <MainNav></MainNav>
      <div className={classes.pdcontainer}>
        <div>
          <div className="row">
            <div className="col-12  col-sm-12 col-md-6 col-lg-4 col-xl-4  ">
              <div className={classes.imgcont}>
                <img className={classes.img} src={props.history.location.state.product.img} alt="product"></img>
              </div>
            </div>
            <div className="col-12  col-sm-12 col-md-6 col-lg-8 col-xl-8 ">
              <div className={classes.pditem}>
                <h4>{props.history.location.state.product.name}</h4>
                <p>{abc}{no_of_review} reviews</p>
                <hr></hr>
                <p>${props.history.location.state.product.price}</p>
                <hr></hr>
                <p>{props.history.location.state.product.description}</p>
                <hr></hr>
                <button className={classes.addtocart} type="button" onClick={() => { addToCartHandler(props.history.location.state.product.name, props.history.location.state.product.price, props.history.location.state.product.img) }}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.reviewcontainer}>
        <h1>REVIEWS</h1>
        {review}
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
};
const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (name, price, img) => dispatch(actions.addToCart(name, price, img)),
  };
};

export default connect(null, mapDispatchToProps)(productdescription);