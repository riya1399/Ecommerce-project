import React, { useState,useEffect } from 'react';
import classes from './Shipping.module.css'
import Navbar from'../Navbar/Navbar';
import Summary from '../Summary/Summary'
import {connect} from 'react-redux'
import Cartproduct from '../Cartproducts/Cartproducts'
import Input from '../Input/Input'
import {
  Link,
  Route
} from 'react-router-dom';
import AOS from 'aos'



const Shipping =(props)=>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let [isFormValid, setFormValid] = useState(false);

  let [formData,setFormData]=useState({
    firstName:{
      name:'',
      isValid:false,
      touched:false,
    },
    lastName:{
      name:'',
      isValid:false,
      touched:false,
    },
    address:{
      name:'',
      isValid:false,
      touched:false,
    },
    address2:{
      name:'',
      isValid:false,
      touched:false,
    },
    country:{
      name:'',
      isValid:false,
      touched:false,
    },
    city:{
      name:'',
      isValid:false,
      touched:false,
    },
    zipCode:{
      name:'',
      isValid:false,
      touched:false,
    },
    phoneNumber:{
      name:'',
      isValid:false,
      touched:false,
    },
    checkBox:{
      name:'',
      isValid:true,
      touched:true,
    },
  });
  
  const checkValidity=(type,value)=>{
    let isValid=true;
    if(type=="firstName" || type=="lastName" || type=="address" || type=="address2" || type=="inputstate" || type=="inputcity" ){
      isValid = value.trim() !== '' && isValid;
      isValid = value.length >= 4 && isValid;
    }
    else if(type=="zipcode"){
      isValid = value.length === 6 && isValid;
  
    }else if(type=="phonenumber"){
      isValid =  !isNaN(value) && value.length === 10 && isValid;
    }
    return isValid;
  
  }
  
  const inputChangeHandler=(e,type)=>{
    console.log(e.target.value)
    console.log(type)
    switch(type){
      case "firstName":{
        console.log(e.target.value);
  
        setFormData( {...formData,firstName:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
        
        break;
  
      }
      case "lastName":{
        setFormData( {...formData,lastName:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
        
        break;
      }
      case "address":{
        setFormData( {...formData,address:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
        
        break;
      }
      case "address2":{
        setFormData( {...formData,address2:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
  
        break;
      }
      case "inputstate":{
        setFormData( {...formData,country:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
  
        break;
        
      }
      case "inputcity":{
        setFormData( {...formData,city:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
  
        break;
      }
      case "zipcode":{
        setFormData( {...formData,zipCode:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
  
        break;
      }
      case "phonenumber":{
        setFormData( {...formData,phoneNumber:{name:e.target.value,isValid:checkValidity(type,e.target.value),touched:true}});
  
        break;
      }
      case "checkbox":{
        setFormData( {...formData,checkbox:{name:e.target.value,isValid:true,touched:true}});
  
        break;
      }
      default:
        break;
  
    }
  
  console.log(formData)
     let formIsValid = true;
          for (let inputIdentifier in formData) {
              formIsValid = formData[inputIdentifier].isValid && formIsValid;
    }
    console.log(formIsValid)
    setFormValid(formIsValid);
    
  }

  const[nextdisable,setnextdisable]=useState(false);


  const ontoPayHandler=() =>{
    props.history.push({
      pathname:"/yourcart/payment",
      state:{
        cartproduct:props.cartproduct,
        shippingdetails:formData
      }
    })
  }
  const cancelHandler=() =>{
    props.history.push({
      pathname:"/yourcart/"
    })
  }
  // let cart=props.cartproduct.map(function(product){
  //   return <Cartproduct name={product.name} price={product.price} img={product.img}></Cartproduct>
  // })
  return (
  <React.Fragment>
           <div className={classes.cartcontainer}>
             <div class="row">
               <div class="col-12  col-sm-12 col-md-6 col-lg-8 col-xl-8">
                <h2>Shipping Details</h2>
                <hr></hr>
                <div data-aos="fade-right">
<form className={classes.shippingform}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <Input type="text" class="form-control" id="inputfirstname" placeholder="First Name" inputChangeHandler={(e)=>{inputChangeHandler(e,'firstName')}} value={formData.firstName.name} touched={formData.firstName.touched} isValid={formData.firstName.isValid}></Input>
    </div>
    <div class="form-group col-md-6">
      <Input type="text" class="form-control" id="inputlastname" placeholder="Last Name" inputChangeHandler={(e)=>{inputChangeHandler(e,'lastName')}} value={formData.lastName.name} touched={formData.lastName.touched} isValid={formData.lastName.isValid}></Input>
    </div>
  </div>
  <div class="form-group ">
    <Input type="text" class="form-control" id="inputAddress" placeholder="Address" inputChangeHandler={(e)=>{inputChangeHandler(e,'address')}} value={formData.address.name} touched={formData.address.touched} isValid={formData.address.isValid}></Input>
  </div>
  <div class="form-group">
    <Input type="text" class="form-control" id="inputAddress2" placeholder="Address 2" inputChangeHandler={(e)=>{inputChangeHandler(e,'address2')}} value={formData.address2.name} touched={formData.address2.touched} isValid={formData.address2.isValid}></Input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control" onChange={(e)=>{inputChangeHandler(e,"inputstate")}} value={formData.country.name} >
        <option selected>Country</option>
        <option>USA</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <Input type="text" class="form-control" id="inputCity" placeholder="City"inputChangeHandler={(e)=>{inputChangeHandler(e,"inputcity")}} value={formData.city.name} touched={formData.city.touched} isValid={formData.city.isValid}></Input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <Input type="text" class="form-control" id="inputcode" placeholder="Zip/Postal Code" inputChangeHandler={(e)=>{inputChangeHandler(e,"zipcode")}} value={formData.zipCode.name} touched={formData.zipCode.touched} isValid={formData.zipCode.isValid}></Input>
    </div>
    <div class="form-group col-md-6">
      <Input type="text" class="form-control" id="inputnumber" placeholder="Phone Number" inputChangeHandler={(e)=>{inputChangeHandler(e,"phonenumber")}} value={formData.phoneNumber.name} touched={formData.phoneNumber.touched} isValid={formData.phoneNumber.isValid}></Input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-check form-check-inline col-md-5 mx-4 p-2" style={{ backgroundColor: "#d3a578",color:"#fff" }}>
      <input class="form-check-input px-2 py-5" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={(e)=>{inputChangeHandler(e,"radio_one")}} value={formData.checkBox.name} ></input>
      <label class="form-check-label" for="inlineRadio2">Free Shipping <span className={classes.checkspan}>between 2-5 working days </span></label>
    </div>
    <div class="form-check form-check-inline col-md-5 mx-4 p-2" style={{ backgroundColor: "#d3a578",color:"#fff" }} >
      <input class="form-check-input px-2 py-5" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={(e)=>{inputChangeHandler(e,"radio_two")}} value={formData.checkBox.name}></input>
      <label class="form-check-label" for="inlineRadio2">Next Day Delivery - $20 <span className={classes.checkspan}>24 hours from checkout </span></label>
    </div>
  </div>

</form>
</div>

<div className={classes.bt}>
                <button className={classes.cartbutton}type="button" onClick={ontoPayHandler} disabled={!isFormValid} >Next</button>
                <button className={classes.cartbutton}type="button" onClick={cancelHandler}>Back</button>
               </div>
               </div>
            
               <div class="col-12  col-sm-12 col-md-6 col-lg-4 col-xl-4 item1">
               <div data-aos="fade-left">
                <Summary>
                </Summary>
               </div>
               </div>
             </div>
           </div>
           </React.Fragment>
)};
const mapstatetoprops=(state)=>{
  return {cartproduct:state.addTocart
  }}
export default connect(mapstatetoprops)(Shipping);