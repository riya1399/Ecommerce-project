import { getByDisplayValue } from '@testing-library/dom';
import * as actionTypes from './actionTypes';
import axios from 'axios'

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
export const fetchproducts = () => {
    return dispatch=>{
        dispatch(fetchstart())
        axios.get('https://6092506885ff51001721260d.mockapi.io/ecommerce').then(response=>{
            console.log(response.data)
            dispatch(fetchsuccess(response.data))
        })
    }
}
export const fetchstart = () => {
    console.log("fetchstart")
    return {
        type: actionTypes.FETCHSTART,
    }
}
export const fetchsuccess = (data) => {
    
    return {
        type: actionTypes.FETCHSUCCESS,
        products:data
    }
}
export const fetchfail = () => {
    return {
        type: actionTypes.FETCHFAIL,
    }
}
export const shopproductsuccess = (data) => {
    
    return {
        type: actionTypes.SHOPPRODUCTSUCCESS,
        shop:data
    }
}
export const shopproduct = () => {
    return dispatch=>{
        dispatch(fetchstart())
        axios.get('https://6092506885ff51001721260d.mockapi.io/ecommerce').then(response=>{
            console.log(response.data)
            dispatch(shopproductsuccess(response.data))
        })
    }
}
