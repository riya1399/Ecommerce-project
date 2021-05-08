import React ,{useEffect, useState} from 'react';
import classes from './Shop.module.css'
import Product from '../../components/Product/Product'
import MainNav from '../../components/MainNav/MainNav';
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux';
import * as action from '../../Store/Actions/home';

const Shop = (props) => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        setdata(props.shop)
    })
    useEffect(()=>{
        props.shopproduct()
      },[])
    const loadProductHandler = (product) => {
        props.history.push({
            pathname: '/productdesc',
            state: {
                product: product
            }
        })
    }
    console.log(props)
    let allproducts = props.loading===true?null:data.map(function (item) {
        return (
            <Product name={item.name} price={item.price} img={item.img} loadProduct={() => { loadProductHandler(item) }}></Product>
        );
    });
    return (
        <React.Fragment>
            <MainNav></MainNav>
            <div className={classes.productlisting}>
                <div className={classes.productscontainer}>
                    <h1>Product Listing</h1>
                    <p>Trusted by over 1,700,000 businesses worldwide</p>
                    <div className={classes.container}>
                        {allproducts}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        shop: state.shop,
        loading:state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
      shopproduct:()=>{
        return dispatch(action.shopproduct())
      }
    };
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Shop);