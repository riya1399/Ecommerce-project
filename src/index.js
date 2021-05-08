
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import Reducer from './Store/Reducer/home';
// import authReducer from './store/reducer/auth';
// import burgerBuilderReducer from './store/reducer/burgerBuilder';
import thunk from 'redux-thunk';
// import orderReducer from './store/reducer/order';


// const rootReduer=combineReducers({
//   burgerBuilder:burgerBuilderReducer,
//   order:orderReducer,
//   auth:authReducer
// });

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