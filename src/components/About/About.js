import React from 'react';
import MainNav from '../MainNav/MainNav'
import classes from './About.module.css'
import Footer from '../Footer/Footer'

const about =(props)=>(

    <React.Fragment>
        <MainNav></MainNav>
    <div className={classes.mainimg}>
        <img src="./mainimg.jpg"></img>
        <div data-aos="flip-right">
    <div className={classes.summary}>
        <h1 className={classes.summaryheading}>Best vintage collection</h1>
        <form className={classes.formsearch}>
        <span className={classes.spanicon}><i class="fas fa-search icon"></i></span>
        <input className={classes.input} type="text" placeholder="Search.." name="search"></input>
        <button className={classes.searchbutton}type="button">Submit</button>
        </form>
    </div>
    </div>
    </div>
    <div className={classes.aboutus}>
        <h3>About us</h3>
        <p>We are the best selling book store</p>
    </div>
    <Footer className={classes.footer}></Footer>
    </React.Fragment>
);

export default about;