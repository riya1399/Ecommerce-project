import * as actionTypes from '../Actions/actionTypes';
const initialState = {
  products: [],
  addTocart: [],
  debouncedata: [],
  loading: false,
  shop: [],
  subtotal: 0
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

  if (flag === false) {
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
const subtotalcalculator = (state) => {
  let sub = 0;
  for (let i = 0; i < state.addTocart.length; i++) {
    sub = sub + state.addTocart[i].price * state.addTocart[i].quantity
  }
  return {
    ...state,
    subtotal: sub
  }
}
const deletecartproduct = (state, action) => {
  console.log(action)
  let newarr = state.addTocart.filter(function (item) {
    return item.name !== action.name
  })

  return {
    ...state,
    addTocart: newarr
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
  let a = JSON.stringify(state)
  let b = JSON.parse(a)
  return b
}
const datafetch = (state, action) => {
  let output = [];
  for (let book in state.products) {
    if (state.products[book].name.toLowerCase().includes(action.value) === true) {
      output.push(state.products[book]);
    }
  }
  return {
    ...state,
    debouncedata: output
  };

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const stat = addToCart(state, action);
      return subtotalcalculator(stat)
    case actionTypes.DELETEPRODUCT:
      return subtotalcalculator(deletecartproduct(state, action))
    case actionTypes.QUANTITY_UPDATER:
      const sta = quantityupdater(state, action);
      return subtotalcalculator(sta)
    case actionTypes.DEBOUNCE:
      const st = datafetch(state, action);
      return st;
    case actionTypes.FETCHSTART:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCHSUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false
      }
    case actionTypes.FETCHFAIL: {
      break
    }
    case actionTypes.SHOPPRODUCTSUCCESS:
      return {
        ...state,
        shop: action.shop,
        loading: false
      }
    case actionTypes.APPLYCOUPON:
      return {
        ...state,
        subtotal: 0.9 * state.subtotal
      }
    case actionTypes.EMPTYCART:
      return {
        ...state,
        addTocart: []
      }

    default:
      return state;
  }

};

export default reducer;