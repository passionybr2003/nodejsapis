import produce from 'immer';
import { appConstants } from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const buConfig = {
  serviceType: {},
  hasServiceTypesLoaded: false,
};
const initialState = user
  ? { loggedIn: true, user, buConfig }
  : { loggedIn: false, user, buConfig };

const payment = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //update
      case appConstants.UPDATE_TRANSACTION_DETAILS:
        return {
          ...state,
          updateTransactionDetails: action.updateTransactionDetails,
          status: appConstants.UPDATE_TRANSACTION_DETAILS,
        };
      case appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS:
        return {
          ...state,
          updateTransactionDetailsSuccess: action.updateTransactionDetailsSuccess,
          status: appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS,
        };
      //fetch
      case appConstants.FETCH_TRANSACTION_DETAILS:
        return {
          ...state,
          fetchTransactionDetails: action.fetchTransactionDetails,
          status: appConstants.FETCH_TRANSACTION_DETAILS,
        };
      case appConstants.FETCH_TRANSACTION_DETAILS_SUCCESS:
        return {
          ...state,
          fetchTransactionDetailsSuccess: action.fetchTransactionDetailsSuccess,
          status: appConstants.FETCH_TRANSACTION_DETAILS_SUCCESS,
        };
      default:
        return state;
        break;
    }
  });
export default payment;
