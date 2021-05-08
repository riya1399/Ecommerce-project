import * as actionTypes from '../Actions/actionTypes';
const initialState = {
  products: [],
  addTocart: [],
  debouncedata:[],
  loading:false,
  shop:[]
};

const addToCart = (state, action) => {
  let flag = false;
  for (let index = 0; index < state.addTocart.length; index++) {
    let ab = state.addTocart[index];
    if (ab.name === action.product.name) {
      ab.quantity = ab.quantity + 1;
      flag = true;
      break
    }
  }
 
  if (!flag) {
    const newProduct = {
      ...action.product
    }
    return {
      ...state,
      addTocart: state.addTocart.concat(newProduct),
    }
  }
  else {
    return {
      ...state
    }
  }
}

const quantityupdater = (state, action) => {
  for (let index = 0; index < state.addTocart.length; index++) {
    let ab = state.addTocart[index];
 
    if (ab.name === action.name) {
      ab.quantity = action.quantity;
      break
    }
  }
  let a=JSON.stringify(state)
  let b=JSON.parse(a)
  return b
}
const datafetch=(state,action) =>{
  let output = [];
  for (let book in state.products) {
      if (state.products[book].name.toLowerCase().includes(action.value)===true) {
          output.push( state.products[book]);
      }
  }
  return{
    ...state,
    debouncedata:output
  };
  
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const stat = addToCart(state, action);
      // localStorage.setItem('mycart',JSON.stringify(stat.addTocart))
      return stat;
    case actionTypes.QUANTITY_UPDATER:
      const sta = quantityupdater(state, action);
      // localStorage.setItem('mycart',JSON.stringify(sta.addTocart))
      return sta;
      case actionTypes.DEBOUNCE:
      const st = datafetch(state, action);
      return st;
      case actionTypes.FETCHSTART:
      return {
        ...state,
        loading:true
      }
      case actionTypes.FETCHSUCCESS:
        return{...state,
          products:action.products,
        loading:false}
      case actionTypes.FETCHFAIL:{}
        case actionTypes.SHOPPRODUCTSUCCESS:
        return{
          ...state,
          shop:action.shop,
        loading:false
      }
     
    default:
      return state;
  }

};

export default reducer;