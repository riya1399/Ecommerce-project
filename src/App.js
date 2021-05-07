// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Home from './Containers/Home/Home'
import {Route,Switch } from 'react-router-dom'
import Search from './components/About/About';
import Productlisting from './Containers/Productlisting/Productlisting';
import Help from './components/Help/Help';
import Yourcart from './Containers/Yourcart/Yourcart';
import Nav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'
import Productdescription from './components/Productdescription/Productdescription'

function App() {
  return (
    <React.Fragment>
      <Switch>
    <Route path="/about" component={Search}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/help" component={Help}></Route>
        <Route path="/yourcart" component={Yourcart}></Route>
        <Route path="/productdesc" component={Productdescription}></Route>
        <Route  path="/" component={Home}></Route>
        </Switch>
        </React.Fragment>
  );
}

export default App;
