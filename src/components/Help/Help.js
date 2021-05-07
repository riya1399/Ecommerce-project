import React from 'react';
import classes from './Help.module.css'
import MainNav from '../MainNav/MainNav';
import Footer from '../Footer/Footer';
import {
  Link,
  Route,
  withRouter
} from 'react-router-dom';


const help =(props)=>{
  const helpHandler=()=>{
    props.history.push("/")
  }

  return(
  <React.Fragment>
    <MainNav></MainNav>
    <div className={classes.contactus}>
        <h2>Contact Us</h2>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
    </div>
    <form className={classes.contactform}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputfirstname">FirstName</label>
      <input type="text" class="form-control" id="inputfirstname"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputlastname">Last Name</label>
      <input type="text" class="form-control" id="inputlastname"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputmessage">Message</label>
    <input type="text" class="form-control" id="inputMessage" ></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Additional Details</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className={classes.contactbutton} type="submit" onClick={helpHandler}>Submit</button>
  <div class='edit_hover_class'>
   <a className={classes.ic} href='#'><i class="fas fa-cart-plus"></i></a>
</div>

</form>
<Footer></Footer>
           </React.Fragment>
)};

export default withRouter(help);