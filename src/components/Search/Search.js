import React, { useEffect } from 'react';
import classes from './Search.module.css'
import AOS from 'aos'

const Search = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <React.Fragment>
            <div className={classes.mainimg}>
                <img src="./mainimg.jpg" alt="product"></img>
                <div data-aos="flip-left">
                    <div className={classes.summary}>
                        <h1 className={classes.summaryheading}>Best vintage collection</h1>
                        <form className={classes.formsearch}>
                            <span className={classes.spanicon}><i class="fas fa-search icon"></i></span>
                            <input className={classes.input} type="text" value={props.value} onChange={props.onInputChange} placeholder="Search.." name="search"></input>
                            <button className={classes.searchbutton} type="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Search;