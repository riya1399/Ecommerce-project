import * as actionTypes from './actionTypes';

export const addToCart = (name, price,img) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product:{name:name ,
        price: price,
        quantity:1,
        img:img}
    }
}
export const quantityupdater = (quantity,name) => {
    return {
        type: actionTypes.QUANTITY_UPDATER,
        quantity:quantity,
        name:name
    }
}
export const datafetch = (value) => {
    return {
        type: actionTypes.DEBOUNCE,
        value:value
    }
}