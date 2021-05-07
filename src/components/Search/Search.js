import React from 'react';
import MainNav from '../MainNav/MainNav'
import classes from './Search.module.css'

const search =(props)=>(

    <React.Fragment>
    <div className={classes.mainimg}>
        <img src="./mainimg.jpg"></img>
    <div className={classes.summary}>
        <h1 className={classes.summaryheading}>Best vintage collection</h1>
        <form className={classes.formsearch}>
        <span className={classes.spanicon}><i class="fas fa-search icon"></i></span>
        <input className={classes.input} type="text" placeholder="Search.." name="search"></input>
        <button className={classes.searchbutton}type="button">Submit</button>
        </form>
    </div>
    </div>
    </React.Fragment>
);

export default search;