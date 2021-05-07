import React, { useState, useEffect } from 'react';
import classes from './Payment.module.css'
import Summary from '../Summary/Summary'
import Input from '../Input/Input'
import AOS from 'aos'
import paypalimg from './paypal-logo.png';

const Payment = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let [selection, setselection] = useState(false)
  let [isFormValid, setFormValid] = useState(false);

  let [formData, setFormData] = useState({
    inputcardnumber: {
      name: '',
      isValid: false,
      touched: false,
    },
    inputdate: {
      name: '',
      isValid: false,
      touched: false,
    },
    inputcvv: {
      name: '',
      isValid: false,
      touched: false,
    },
    inputcardname: {
      name: '',
      isValid: false,
      touched: false,
    }
  });

  const checkValidity = (type, value) => {
    let isValid = true;
    if (type === "inputcardnumber") {
      isValid = value.trim() !== '' && isValid;
      isValid = !isNaN(value) && value.length === 16 && isValid;
    }
    else if (type === "inputdate") {
      let [mon] = value.split("/");
      isValid = (parseInt(mon) < 12 ? true : false) && isValid;

    } else if (type === "inputcvv") {
      isValid = !isNaN(value) && value.length === 3 && isValid;
    }
    return isValid;

  }

  const inputChangeHandler = (e, type) => {
    switch (type) {
      case "inputcardnumber": {
        setFormData({ ...formData, inputcardnumber: { name: e.target.value, isValid: checkValidity(type, e.target.value), touched: true } });
        break;
      }
      case "inputdate": {
        setFormData({ ...formData, inputdate: { name: e.target.value, isValid: checkValidity(type, e.target.value), touched: true } });
        break;
      }
      case "inputcvv": {
        setFormData({ ...formData, inputcvv: { name: e.target.value, isValid: checkValidity(type, e.target.value), touched: true } });
        break;
      }
      case "inputcardname": {
        setFormData({ ...formData, inputcardname: { name: e.target.value, isValid: checkValidity(type, e.target.value), touched: true } });
        break;
      }
      default:
        break;
    }
    let formIsValid = true;
    for (let inputIdentifier in formData) {
      formIsValid = formData[inputIdentifier].isValid && formIsValid;
    }
    setFormValid(formIsValid);

  }

  const [checked, setchecked] = useState({
    creditcardIsChecked: true,
    paypalIsChecked: false,
    creditcardIsDisabled: false,
    paypalIsDisabled: true
  });

  const cancelledHandler = () => {
    props.history.push({
      pathname: "/yourcart/"
    })
  }

  const inputCheckedHandlerOne = (e) => {
    if (e.target.checked === true) {
      setchecked((state) => {
        return {
          creditcardIsChecked: false,
          creditcardIsDisabled: false,
          paypalIsChecked: false,
          paypalIsDisabled: false
        }
      })
    } else {
      setchecked((state) => {
        return {
          creditcardIsChecked: true,
          creditcardIsDisabled: false,
          paypalIsChecked: false,
          paypalIsDisabled: true
        }
      })
    }
  }


  const inputCheckedHandlerTwo = (e) => {
    if (e.target.checked === true) {
      setchecked((state) => {
        return {
          creditcardIsChecked: false,
          creditcardIsDisabled: true,
          paypalIsChecked: true,
          paypalIsDisabled: false
        }
      })
    } else {
      setchecked((state) => {
        return {
          creditcardIsChecked: false,
          creditcardIsDisabled: false,
          paypalIsChecked: false,
          paypalIsDisabled: false
        }
      })
    }
  }
  const paynowHandler = () => {
    props.history.push({
      pathname: '/yourcart/payment/orderplaced',
      state: {
        cartproduct: props.history.location.state.cartproduct,
        shippingdetails: props.history.location.state.shippingdetails,
        paymentoption: "creditcard"
      }
    })
  }
  const optionHandler = (name) => {
    if (name === "paypal") {
      setselection(true)
      setFormValid(true)
    }
    else {
      setselection(true)
    }
  }
  return (
    <React.Fragment>
      <div className={classes.cartcontainer}>
        <div class="row">
          <div class="col-12  col-sm-12 col-md-6 col-lg-8 col-xl-8 item">
            <h1>Payment Options</h1>
            <div data-aos="fade-right">
              <div className={classes.paymentsection}>
                <div class="custom-control custom-radio mb-4" style={{ backgroundColor: "#d3a578", borderRadius: "5px", color: "#fff", padding: '40px' }}>
                  <input type="radio" name="creditcard" onChange={() => optionHandler("creditcard")} disabled={checked.creditcardIsDisabled} checked={checked.creditcardIsChecked} onClick={(e) => { inputCheckedHandlerOne(e) }} id="customRadio1" class="custom-control-input"></input>
                  <label class="custom-control-label" for="customRadio1">Credit Card
                  <p className={classes.paypara}>Please use a digital payment method and help us ensure contactless delivery for your safety</p></label>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <Input type="text" maxLength="16" class="form-control" inputChangeHandler={(e) => { inputChangeHandler(e, 'inputcardnumber') }} id="inputcardnumber" placeholder="0000 0000 0000 0000" touched={formData.inputcardnumber.touched} isValid={formData.inputcardnumber.isValid}></Input>
                    </div>
                    <div class="form-group col-md-3">
                      <Input type="text" maxLength="5" class="form-control" inputChangeHandler={(e) => { inputChangeHandler(e, 'inputdate') }} id="inputdate" placeholder="MM/YY" touched={formData.inputdate.touched} isValid={formData.inputdate.isValid}></Input>
                    </div>
                    <div class="form-group col-md-3">
                      <Input type="text" maxLength="3"class="form-control" inputChangeHandler={(e) => { inputChangeHandler(e, 'inputcvv') }} id="inputcvv" placeholder="CVV" touched={formData.inputcvv.touched} isValid={formData.inputcvv.isValid}></Input>
                    </div>
                    <div class="form-group col-md-12">
                      <Input type="text" class="form-control" inputChangeHandler={(e) => { inputChangeHandler(e, 'inputcardname') }} id="inputcardname" placeholder="Card Holder Name" touched={formData.inputcardname.touched} isValid={formData.inputcardname.isValid}></Input>
                    </div>
                  </div>
                </div>
                <div class="custom-control custom-radio mb-4" style={{ backgroundColor: "#d3a578", color: "#fff", padding: '40px' }}>
                  <input type="radio"  name="paypal" onChange={() => optionHandler("paypal")} disabled={checked.paypalIsDisabled} checked={checked.paypalIsChecked} onClick={(e) => { inputCheckedHandlerTwo(e) }} id="customRadio2" class="custom-control-input "></input>
                  <label class="custom-control-label col-md-8" for="customRadio2"><h6>PayPal</h6>
                    <span className={classes.paypara}>Please use a digital payment method and help us ensure contactless delivery for your safety</span>
                  </label>
                  <span class="logoimg col-md-2 "><img className={classes.paypallogo} alt="paypal" src={paypalimg}></img>
                  </span>
                </div>

              </div>

              <div className={classes.bt}>
                <button className={classes.cartbutton} type="button" onClick={paynowHandler} disabled={!isFormValid && !selection}>Pay Now</button>
                <button className={classes.cartbutton} type="button" onClick={cancelledHandler}>Back</button>
              </div>
            </div>
          </div>
          <div class="col-12  col-sm-12 col-md-6 col-lg-4 col-xl-4 item1">
            <div data-aos="fade-left">
              <Summary></Summary>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Payment;