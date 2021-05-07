import React from 'react';
import classes from './Input.module.css'

const input=(props)=>{ 
  console.log(props)
    let arr=["form-control"]
    if(props.touched===true){
        if(props.isValid===false){
          arr.push(classes.error)
        }
      }
      console.log(props.touched)
      console.log(props.isValid)
      console.log(arr)
    return(

    <React.Fragment>
      <input type={props.type} className={arr.join(' ')} id={props.id} placeholder={props.placeholder} onChange={props.inputChangeHandler} value={props.value} required ></input>
    </React.Fragment>
)};

export default input;