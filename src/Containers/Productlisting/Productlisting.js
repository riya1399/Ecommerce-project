import React from 'react';
import classes from './Productlisting.module.css'
import Product from '../../components/Product/Product'
import { withRouter } from 'react-router';

const productlisting = (props) => {
    const loadProductHandler = (product) => {
        props.history.push({
            pathname: '/productdesc',
            state: {
                product: product
            }
        })
    }

    let allproducts = props.products.map(function (item) {
        return (
            <Product name={item.name} price={item.price} img={item.img} loadProduct={() => { loadProductHandler(item) }}></Product>

        );
    });
    return (
        <React.Fragment>
            <div className={classes.productlisting}>
                <div className={classes.productscontainer}>
                    <h1>Product Listing</h1>
                    <p>Trusted by over 1,700,000 businesses worldwide</p>
                    <div className={classes.container}>
                        {allproducts}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(productlisting);