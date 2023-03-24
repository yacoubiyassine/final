import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './Reducer/index';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducer,composeEnhancers(
applyMiddleware(thunk)
  /*  const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItem')):[]
    const initialState={
      cartItems:cartItems*/
    /* }*/
  ));
  export default store;