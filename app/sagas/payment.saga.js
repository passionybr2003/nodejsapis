import { call, put, takeLatest, delay, all } from 'redux-saga/effects';
import request from 'utils/request';
// import Alert from 'react-s-alert';
import proxyrequest from 'utils/proxyrequest';
import { paymentActions,  } from 'actions';
import { history, alertHelper, getAdyenMerchant, commonHelper } from 'helpers';
import { appConstants } from '../constants';
import _ from 'lodash';
import config from 'config';
import { getCurrencyByCountry } from '../CurrencyMapping';
import UserService from 'utils/user.services';

// Update details into DB
function* updateTransactionDetails(payload) {
  let requestOptions = '';
  requestOptions = {
    url: `${window.location.origin}/db/updatePayment`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload.updateTransactionDetails.paylodUpdate,
    selfURL: 'db/updatePayment',
    isCallingThirdParty: true,
  };
  try {
    const transactionRes = yield call(proxyrequest, requestOptions);
      yield put(paymentActions.updateTransactionDetailsSuccess(transactionRes));
  } catch (err) {
    let errorMessage = 'An error occurred. Please try again.';
    if (err && err.message) {
      errorMessage = err.message;
    }
  }
}


// fetch details into DB
function* fetchTransactionDetails(paload) {
  let requestOptions = '';
  requestOptions = {
    url: `${window.location.origin}/db/fetchPayment`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {},
    selfURL: 'db/fetchPayment',
    isCallingThirdParty: true,
  };
  try {
    const transactionfetchRes = yield call(proxyrequest, requestOptions);
      yield put(paymentActions.fetchTransactionDetailsSuccess(transactionfetchRes));
  } catch (err) {
    let errorMessage = 'An error occurred. Please try again.';
    if (err && err.message) {
      errorMessage = err.message;
    }
  }
}


function* paymentSaga() {
  yield takeLatest(appConstants.UPDATE_TRANSACTION_DETAILS,updateTransactionDetails);
  yield takeLatest(appConstants.FETCH_TRANSACTION_DETAILS,fetchTransactionDetails);
}

export default paymentSaga;
