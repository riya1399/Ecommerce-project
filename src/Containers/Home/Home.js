import React, { useState, useCallback, useEffect } from 'react';
import MainNav from '../../components/MainNav/MainNav';
import Productlisting from '../Productlisting/Productlisting'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import * as action from '../../Store/Actions/home';


const Home = (props) => {
  const [inputvalue, setinputvalue] = useState('')
  useEffect(()=>{
    props.fetchproduct()
  },[])

  const onInputChange = (e) => {
    const { value: nextValue } = e.target;
    setinputvalue(nextValue)
    debouncedSave(nextValue);
  }
  const debouncedSave = useCallback(
    debounce(nextValue => props.dataFetcher(nextValue), 1500),
    [],
  );
  let productlisting=props.loading===true?null:  <Productlisting products={props.debounce.length !== 0 ? props.debounce : props.products} ></Productlisting>
  return (<React.Fragment>
    <MainNav></MainNav>
    <Search value={inputvalue} onInputChange={(e) => { onInputChange(e) }}></Search>
    {productlisting}
    <Footer></Footer>
  </React.Fragment>
  );

}


const mapStateToProps = state => {
  return {
    products: state.products,
    debounce: state.debouncedata,
    loading:state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dataFetcher: (value) => {
      return dispatch(action.datafetch(value))
    },
    fetchproduct:()=>{
      return dispatch(action.fetchproducts())
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
