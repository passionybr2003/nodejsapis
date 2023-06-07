import { appConstants } from '../constants';

//Update 
const updateTransactionDetails = (updateTransactionDetails) => ({
  type: appConstants.UPDATE_TRANSACTION_DETAILS,
  status: appConstants.UPDATE_TRANSACTION_DETAILS,
  updateTransactionDetails,
});

const updateTransactionDetailsSuccess = (updateTransactionDetailsSuccess) => ({
  type: appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS,
  status: appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS,
  updateTransactionDetailsSuccess,
});

//fetch
const fetchTransactionDetails = (fetchTransactionDetails) => ({
  type: appConstants.FETCH_TRANSACTION_DETAILS,
  status: appConstants.FETCH_TRANSACTION_DETAILS,
  fetchTransactionDetails,
});

const fetchTransactionDetailsSuccess = (fetchTransactionDetailsSuccess) => ({
  type: appConstants.FETCH_TRANSACTION_DETAILS_SUCCESS,
  status: appConstants.FETCH_TRANSACTION_DETAILS_SUCCESS,
  fetchTransactionDetailsSuccess,
});

const paymentActions = {
  updateTransactionDetails,
  updateTransactionDetailsSuccess,
  fetchTransactionDetails,
  fetchTransactionDetailsSuccess
};

export default paymentActions;
