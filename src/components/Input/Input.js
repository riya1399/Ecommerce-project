import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
  let arr = ["form-control"]
  if (props.touched === true) {
    if (props.isValid === false) {
      arr.push(classes.error)
    }
  }
  return (

    <React.Fragment>
      <input type={props.type} maxLength={props.maxLength} className={arr.join(' ')} id={props.id} placeholder={props.placeholder} onChange={props.inputChangeHandler} value={props.value} required ></input>
    </React.Fragment>
  )
};

export default input;