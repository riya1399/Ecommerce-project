import React, { useState, useCallback } from 'react';
import MainNav from '../../components/MainNav/MainNav';
import Productlisting from '../Productlisting/Productlisting'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import * as action from '../../Store/Actions/home';


const Home = (props) => {
  const [inputvalue, setinputvalue] = useState('')

  const onInputChange = (e) => {
    const { value: nextValue } = e.target;
    setinputvalue(nextValue)
    debouncedSave(nextValue);
  }
  const debouncedSave = useCallback(
    debounce(nextValue => props.dataFetcher(nextValue), 1500),
    [],
  );

  return (<React.Fragment>
    <MainNav></MainNav>
    <Search value={inputvalue} onInputChange={(e) => { onInputChange(e) }}></Search>
    <Productlisting products={props.debounce.length !== 0 ? props.debounce : props.products} ></Productlisting>
    <Footer></Footer>
  </React.Fragment>
  );

}


const mapStateToProps = state => {
  return {
    products: state.products,
    debounce: state.debouncedata
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dataFetcher: (value) => {
      return dispatch(action.datafetch(value))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
