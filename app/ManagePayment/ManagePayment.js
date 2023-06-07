import React, { useEffect, useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import CreditCard from '../CreditCard/CreditCard';

const ManagePayment = (props) => {

  const [savedCardData, setSavedCardData] = useState(false);

  const creditCardDataArr = {
    savedCardData,
  };
  return (
    <Formik
      render={(formikProps) => (
        <>
          <Grid className="managePaymentContainer">
            <Grid className="ccInnerContainer">
            <p className="newCard_text">Credit Card System</p>
                <CreditCard
                  sourceData={creditCardDataArr}
                  showOrderSummary="F"
                  flowType="addPaymentMethod"
                />
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};

function mapStateToProps(state) {

  return {
 
  };
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePayment);
