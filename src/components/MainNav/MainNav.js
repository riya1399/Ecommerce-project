import React from 'react';
import {connect} from 'react-redux';
import classes from './MainNav.module.css'
import App from '../../App'
import {
  Link,
  Route
} from 'react-router-dom';
import Productlisting from '../../Containers/Productlisting/Productlisting';

const nav =(props)=>{
  function openMenu() { 
    var v = document.getElementById("sidemenu"); 
    v.classList.add(classes.open); 
}
function closeMenu() { 
    var v = document.getElementById("sidemenu"); 
    v.classList.remove(classes.open); 
}

  return(
    <div className={classes.nav}>
    <div className={classes.contain}>
      <div className="row m-0">
        <div className="col-6 p-3 " style={{color:"#fff",fontWeight:"bold"}}>PICK-A-BOOK</div>
        <div className="col-6">
          <nav >
          <div id="sidemenu" className={classes.sidemenuwrapper}>
                    <div className={classes.cross} onClick={closeMenu}>
                        <i class="fas fa-times"></i>
                    </div>
            <ul className={classes.ul}>
            <li><Link className={classes.mainnav} to='/'>Home</Link></li>
            <li><Link className={classes.mainnav} to='/about'>About</Link></li>
            <li><Link className={classes.mainnav} to='/shop'>Shop</Link></li>
            <li><Link className={classes.mainnav}to='/help'>Help</Link></li>
              {props.disable?null:<Link className={classes.navbutton} to='/yourcart'><i class="fas fa-cart-plus"></i>Your cart{props.length===0?null:<span className={classes.noofitem}>{props.length}</span>}</Link>}
            </ul>
            </div>
          </nav>
          <div className={classes.burger} onClick = {openMenu}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
      </div>
    </div>
    </div>
    
)};
const mapStateToProps=state=>{
  return{
    length:state.addTocart.length,
      
  }
}


export default connect(mapStateToProps)(nav);