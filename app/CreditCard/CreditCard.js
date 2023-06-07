import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextInput, SelectInput } from 'components/FormInputs';
import {
  Grid, Typography, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Link, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';
import { connect } from 'react-redux';
import payment_saga from 'sagas/payment.saga';
import payment_reducer from 'reducers/payment.reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { paymentActions } from 'actions';
import { useTranslation } from 'react-i18next';

const payment_key = 'payment';

import { dataHelper, invokeAlert } from 'helpers';

const useStyles = makeStyles({
  table: {
      minWidth: 500,
  },
  tableCell: {
      "&:last-child td": {
          borderBottom: 1,
      },
      '& > td': {
          fontFamily: "CenturyGothic-SmBd",
          fontSize: "16px",
          color: "#000000",
          letterSpacing: "-0.14px",
          borderBottom: "1px solid rgba(151, 151, 151, 0.5)"
      },
  },
});
function CreditCard(props) {
  useInjectReducer({ key: payment_key, reducer: payment_reducer });
  useInjectSaga({ key: payment_key, saga: payment_saga });
  const { t, i18n } = useTranslation();

  const { sourceData } = props;
  const [isSavedCard, setIsSavedCard] = useState(false);
  const [showCardIcon, setShowCardIcon] = useState('');
  const [saveCardValue, setSaveCardValue] = useState(
    sourceData.savedCardData && sourceData.savedCardData.cardNumber
      ? sourceData.savedCardData.cardNumber
      : '',
  );
  
  const [formikSubmittedValues, setFormikSubmittedValues] = useState('');
  const [checkFetch, setCheckFetch] = useState('1');
  
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [disablePurchaseBtn, setDisablePurchaseBtn] = useState(false);
  const classes = useStyles();
  const numberRegex = new RegExp(/^[0-9 ]+$/);
  const amex = new RegExp('^3[47][0-9]{3,15}$');
  const dinersclubinternational = new RegExp('^(36[0-9]{3,14})$');
  const jcb = new RegExp('(^(?:2123|1800)[0-9]{0,11}$)|(^(?:35)[0-9]{3,14}$)');
  const mastercard1 = new RegExp('^5[1-5][0-9]{3,14}$');
  const mastercard2 = new RegExp('^2[2-7][0-9]{3,14}$');
  const unionpay = new RegExp('^((62|81)[0-9]{3,19})$');
  const visa = new RegExp('^4[0-9]{4,19}(?:[0-9]{3})?$');
  // const discover = new RegExp('^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$');
  const discover = new RegExp(
    '^65[4-9][0-9]{2}|64[4-9][0-9]{2}|6011[0-9]{1}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{0})$',
  );
  
  const schema = () =>
    Yup.object().shape({
      cardNumber: Yup.string()
        .strict(false)
        .trim()
        .required('Enter Card Number')
        .min(13, 'Enter Valid Card Number')
        .matches(isSavedCard ? '' : numberRegex, 'Enter Valid Card Number')
        .test('cardNumber', 'Enter Valid Card Number', (ccnum) => {
          if (isSavedCard) return true;
          else return cardValidation(ccnum);
        }),
      customerName: Yup.string()
        .strict(false)
        .trim()
        .min(3, "Minimum Length is 3 Characters")
        .required("Enter Name on Card")
        .matches(letters, "Enter valid Name")
        .test('customerName', 'Enter valid Name', (ccnam) => {
          if (letters) return true;
          else return false;
        }),
        limit: Yup.string()
        .strict(false)
        .trim()
        .required("Enter Card Limit")
        .matches(limit, "Enter valid number")
        .test('limit', 'Enter valid number', (ccnam) => {
          if (limit) return true;
          else return false;
        }),
          
      
    });
    var letters = /^[A-Za-z ]+$/;
    var limit =/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/;


  // checkLuhn: card validation by luhn algorithm
  const cardValidation = (ccnum) => {
    const ccCheckRegExp = /[^\d\s-]/;
    let isValid = !ccCheckRegExp.test(ccnum);
    let i;

    if (isValid) {
      const cardNumbersOnly = ccnum.replace(/[\s-]/g, '');
      const cardNumberLength = cardNumbersOnly.length;

      const arrCheckTypes = [
        'amex',
        'dinersclubinternational',
        'jcb',
        'mastercard',
        'unionpay',
        'visa',
        'discover',
      ];
      for (i = 0; i < arrCheckTypes.length; i++) {
        let lengthIsValid = false;
        let prefixIsValid = false;
        let prefixRegExp;

        switch (arrCheckTypes[i]) {
          case 'amex':
            lengthIsValid = cardNumberLength === 15;
            prefixRegExp = /^3([47])/;
            // cardNumbersOnly = cardNumbersOnly.match(/^([^e+-]{0,15})/)[0]
            break;

          case 'dinersclubinternational':
            lengthIsValid = cardNumberLength === 14;
            prefixRegExp = /^(36)/;
            break;

          case 'jcb':
            lengthIsValid = cardNumberLength === 15 || cardNumberLength === 16;
            prefixRegExp = /^(2131|1800|35)/;
            break;

          case 'mastercard':
            lengthIsValid = cardNumberLength === 16;
            prefixRegExp =
              /^5[1-5][0-9]|(2(?:2[2-9][^0]|2[3-9]|[3-6]|22[1-9]|7[0-1]|72[0]))\d*/;
            break;

          case 'unionpay':
            lengthIsValid =
              cardNumberLength === 16 ||
              cardNumberLength === 17 ||
              cardNumberLength === 18 ||
              cardNumberLength === 19;
            prefixRegExp = /^(62|81)/;
            break;

          case 'visa':
            lengthIsValid =
              cardNumberLength === 16 ||
              cardNumberLength === 13 ||
              cardNumberLength === 19;
            prefixRegExp = /^4/;
            break;

          case 'discover':
            lengthIsValid = cardNumberLength === 15 || cardNumberLength === 16;
            prefixRegExp = /^(65|64|6011|622)/;
            break;

          default:
            prefixRegExp = /^$/;
        }

        prefixIsValid = prefixRegExp.test(cardNumbersOnly);
        isValid = prefixIsValid && lengthIsValid;

        // Check if we found a correct one
        if (isValid) {
          break;
        }
      }
    }

    if (!isValid) {
      return false;
    }

    // Remove all dashes for the checksum checks to eliminate negative numbers
    ccnum = ccnum.replace(/[\s-]/g, '');
    // Checksum ("Mod 10")
    // Add even digits in even length strings or odd digits in odd length strings.
    let checksum = 0;
    for (i = 2 - (ccnum.length % 2); i <= ccnum.length; i += 2) {
      checksum += parseInt(ccnum.charAt(i - 1));
    }

    // Analyze odd digits in even length strings or even digits in odd length strings.
    for (i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
      const digit = parseInt(ccnum.charAt(i - 1)) * 2;
      if (digit < 10) {
        checksum += digit;
      } else {
        checksum += digit - 9;
      }
    }
    return checksum % 10 === 0;
  };

  const handleImgOnCardValue = (fldVal) => {
    const tempVal = fldVal.replace(/ /g, '');
    if (visa.test(tempVal)) {
      setShowCardIcon('visa');
    } else if (amex.test(tempVal)) {
      setShowCardIcon('amex');
    } else if (mastercard1.test(tempVal) || mastercard2.test(tempVal)) {
      setShowCardIcon('mastercard');
    } else if (jcb.test(tempVal)) {
      setShowCardIcon('jcb');
    } else if (dinersclubinternational.test(tempVal)) {
      setShowCardIcon('dinersclub');
    } else if (unionpay.test(tempVal)) {
      setShowCardIcon('unionpay');
    } else if (discover.test(tempVal)) {
      setShowCardIcon('discover');
    } else {
      setShowCardIcon('none');
    }
    if (tempVal == '') {
      setShowCardIcon('');
    }
  };



useEffect(() => {
    props.fetchTransaction();
},[]);

// fetch the CardDetails
useEffect(() => {
  if(props?.status && props?.status == 'UPDATE_TRANSACTION_DETAILS_SUCCESS'){
    props.fetchTransaction();
  }
  if(props?.status && props?.status == 'FETCH_TRANSACTION_DETAILS_SUCCESS'){
    
    let paylodUpdate ={};
    paylodUpdate.cardNumber = formikSubmittedValues.cardNumber;
    paylodUpdate.customerName = formikSubmittedValues.customerName;
    paylodUpdate.limit = formikSubmittedValues.limit;
    console.log("props?.paymentDetails?.length",props?.paymentDetails?.length)
    console.log("checkFetch",checkFetch)
    console.log("formikSubmittedValues.cardNumber",formikSubmittedValues.cardNumber)
    if(props?.paymentDetails && props?.paymentDetails?.length > 0 ){
      setCheckFetch("1");
      let selectedRowID = props.paymentDetails.filter((data)=>  data.cardNumber === formikSubmittedValues.cardNumber);
    console.log("selectedRowID?.length",selectedRowID?.length)
      if(selectedRowID?.length>0 && checkFetch == 1){
        console.log("if");
        
        setCheckFetch("0");
        invokeAlert('error', 'Card is already added. Please try with another card');
      }
      else if(selectedRowID?.length == 0 && formikSubmittedValues?.cardNumber !='' && formikSubmittedValues?.cardNumber !== undefined){
        
        console.log("else");
         props.updateTransaction({paylodUpdate});
        invokeAlert('success', 'Card was added successfully');
        setCheckFetch("0"); 
      }
    }else if(props?.paymentDetails && props?.paymentDetails?.length == 0 || checkFetch == 0){ 
      if(formikSubmittedValues?.limit > 0){
        props.updateTransaction({paylodUpdate});
        invokeAlert('success', 'Card was added successfully');
        setCheckFetch("0");
      }
    }
  }
}, [props.status]);

  const onSubmit = async (formvalues, formik) => {
    setFormikSubmittedValues(formvalues);
    setDisablePurchaseBtn(true);
    await props.fetchTransaction();  
    
  };
  return (
    <span>
     
      <Formik
        validationSchema={schema(props)}


        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <>
            <Form id="ccForm" name="ccForm" className="ccForm">
              <Grid container className="ccBlock">
                <Grid item xs={12}>
                  <Grid
                    className={`form-control text-left${formikProps.touched.cardNumber &&
                      formikProps.errors.cardNumber
                      ? ' errorField'
                      : ''
                      }`}
                  >
                    <TextInput
                      fieldID="cardNumber"
                      fieldName="cardNumber"
                      fieldType="text"
                      fieldLabel='Card Number*'
                      fieldPlaceHolder="0000 0000 0000 0000"
                      maxLength="23"
                      fieldChange={(e) => {
                        e.preventDefault();
                        const { value } = e.target;
                        let fldVal = value.split(' - ').join(''); // remove hyphens
                        fldVal = fldVal.split(' ').join(''); // remove spaces
                        fldVal = fldVal.split(' ').join('');
                        const cardFieldValue = fldVal;

                        if (fldVal.length > 0) {
                          fldVal = fldVal
                            .match(new RegExp('.{1,4}', 'g'))
                            .join(' ');
                        }

                        formikProps.setFieldValue('cardNumber', fldVal);
                        
                        handleImgOnCardValue(fldVal);

                       
                        // Hide errors if any
                        if (errorDisplay) {
                          setErrorDisplay(false);
                        }
                      }}
                    />
                    <Grid container>
                      <Grid item className="imgBlock">
                        {showCardIcon === '' ? (
                          <>
                            <img src={require('images/visa.svg')} alt="VISA" />
                            <img
                              src={require('images/mastercard.svg')}
                              alt="MC"
                            />
                            <img src={require('images/amex.svg')} alt="AE" />
                            <img
                              src={require('images/discover.svg')}
                              alt="DS"
                            />
                          </>
                        ) : (
                          <>
                            {showCardIcon === 'none' ? ('' ) : (<img src={require(`images/${showCardIcon}.svg`)}/>)}
                          </>
                        )}
                      </Grid>
                    </Grid>
                    <ErrorMessage name="cardNumber" component="span" className="required"
                    />
                  </Grid>
                </Grid><br/><br/><br/><br/>
                  <Grid item xs={12}>
                  <Grid className={`form-control text-left customerName ${(formikProps.touched.customerName && formikProps.errors.customerName && formikProps.values.customerName) ? " errorField" : ""}`} >
                    <TextInput
                      fieldID="customerName"
                      fieldName="customerName"
                      fieldLabel="Name On Card*"
                      maxLength="50"
                      fieldType="text"
                      fieldChange={(e) => {
                        e.preventDefault();
                        const { value } = e.target;
                        formikProps.setFieldValue('customerName', value);
                        
                        if (errorDisplay) {
                          setErrorDisplay(false);
                        }
                      }}
                    />
                    </Grid>
                    <ErrorMessage name="customerName" component="span" className="requiredName"
                    />
                    </Grid><br/><br/><br/><br/>
                  <Grid item xs={12}>
                  <Grid className={`form-control text-left limit ${(formikProps.touched.limit && formikProps.errors.limit && formikProps.values.limit) ? " errorField" : ""}`} >
                    <TextInput
                      fieldID="limit"
                      fieldName="limit"
                      fieldLabel="Limit*"
                      maxLength="8"
                      fieldType="text"
                      fieldChange={(e) => {
                        e.preventDefault();
                        const { value } = e.target;
                        formikProps.setFieldValue('limit', value);
                        
                        if (errorDisplay) {
                          setErrorDisplay(false);
                        }
                      }}
                    />
                    </Grid>
                    <ErrorMessage name="limit" component="span" className="required"
                    />
                    </Grid>
              </Grid>

             

              
                  <Grid container className="saveBtnBlock">
                    
                    <Button
                      variant="contained"
                      type="submit"
                      className="savePaymentBtn"
                      disabled={
                        (saveCardValue.toString().length > 0
                          ? !!Object.keys(formikProps.errors).length
                          : !formikProps.isValid)
                      }
                      data-track="click"
                      data-type="submit"
                      data-id="nba:my-account:billing:submit"
                      data-text="Save Payment Method"
                    >Save Payment Method
                    </Button>
                  </Grid>
            </Form>
            
            
          </>
        )}
      </Formik><br/><br/>

      <Grid container className="existingCardList">
          <Typography className="mt-4 mb-3 saveCard_title">
            <p className="newCard_text">Existing Cards</p>
          </Typography>
          {/* existing card loop starts */}
          <Grid className="paymentHistory_content" >
            <Grid className="paymentBlock pt-5 pb-2">
                <Form>
                    <TableContainer className="tableContainer">
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Card Number</TableCell>
                                    <TableCell align="left">Balance</TableCell>
                                    <TableCell align="left">limit</TableCell>
                                </TableRow>
                            </TableHead>
                            {props?.paymentDetails && props?.paymentDetails.length > 0  && props?.paymentDetails.map(p => {
                                    if(p.cardNumber && p.cardNumber != ''){
                                        return (<>{
              
                                      <TableBody>
                                        <TableCell align="left">{p.customerName}</TableCell>
                                        <TableCell align="left">{'*******'+p.cardNumber.slice(-5)}</TableCell>
                                        <TableCell align="left">&pound;{' '+p.balance}</TableCell>
                                        <TableCell align="left">&pound;{' '+p.limit}</TableCell>
                                      </TableBody>
                                      }</>)
                                      
                                    }
                              })   
                            }
                            {props?.paymentDetails && Object.keys(props?.paymentDetails).length == 0 &&
                                <TableRow>
                                  <>
                                  <TableCell align="center"></TableCell>
                                  <TableCell align="right">No Data</TableCell>
                                  <TableCell align="center"></TableCell>
                                  <TableCell align="center"></TableCell>
                                  </>
                                </TableRow>
                            }  
                                
                        
                        </Table>
                    </TableContainer>
                </Form>
            </Grid>
          </Grid>
          {/* existing card loop ends */}
      </Grid>
      
    </span>
  );
}

function mapStateToProps(state) {
  const status =
  state.payment && state.payment.status
    ? state.payment.status : [];
  const paymentDetails =
    state.payment && state.payment.fetchTransactionDetailsSuccess
      ? state.payment.fetchTransactionDetailsSuccess : [];
    
  return {
    status,
    paymentDetails
  };
}
const mapDispatchToProps = (dispatch) => ({
 
  updateTransaction: (payload) => {
    dispatch(paymentActions.updateTransactionDetails(payload));
  },
  fetchTransaction: () => {
    dispatch(paymentActions.fetchTransactionDetails());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
