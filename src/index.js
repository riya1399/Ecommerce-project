import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducer from './Store/Reducer/home';
import thunk from 'redux-thunk';


const store=createStore(Reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();