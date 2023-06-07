import { appConstants } from '../constants';
// getProducts
const getProducts = (data) => ({
  type: appConstants.GET_PRODUCTS,
  data,
});
const getProductsSuccess = (data) => ({
  type: appConstants.GET_PRODUCTS_SUCCESS,
  data,
});
// getPaymentModes
const getPaymentModes = (data) => ({
  type: appConstants.GET_PAYMENT_MODES,
  data,
});
const getPaymentModesSuccess = (data) => ({
  type: appConstants.GET_PAYMENT_MODES_SUCCESS,
  data,
});
// searchAccount
const searchAccount = (data) => ({
  type: appConstants.SEARCH_ACCOUNT,
  data,
});
const searchAccountSuccess = (data) => ({
  type: appConstants.SEARCH_ACCOUNT_SUCCESS,
  data,
});
const searchAccountNotFound = (data) => ({
  type: appConstants.SEARCH_ACCOUNT_NOT_FOUND,
  data,
});

// CreateUser
const createUser = (data) => ({
  type: appConstants.CREATE_USER,
  data,
});
const createUserSuccess = (data) => ({
  type: appConstants.CREATE_USER_SUCCESS,
  data,
});
const createUserFailure = (data) => ({
  type: appConstants.CREATE_USER_FAILURE,
  data,
});

// isEligibleForFreeTrial
const isEligibleForFreeTrial = (data) => ({
  type: appConstants.IS_ELIGBLE_FOR_FREETRIAL,
  data,
});
const isEligibleForFreeTrialSuccess = (data) => ({
  type: appConstants.IS_ELIGBLE_FOR_FREETRIAL_SUCCESS,
  data,
});
const cardEligibleForFreeTrial = (data) => ({
  type: appConstants.CARD_ELIGIBLE_FOR_FREETRIAL,
  data,
});
const cardNotEligibleForFreeTrial = (data) => ({
  type: appConstants.CARD_NOT_ELIGIBLE_FOR_FREETRIAL,
  data,
});
// getPaymentMethods
const getPaymentMethods = (data) => ({
  type: appConstants.GET_PAYMENT_METHODS,
  data,
});
const getPaymentMethodsSuccess = (data) => ({
  type: appConstants.GET_PAYMENT_METHODS_SUCCESS,
  data,
});
// applyCoupon
const applyCoupon = (data) => ({
  type: appConstants.APPLY_COUPON,
  data,
});
const applyCouponSuccess = (data) => ({
  type: appConstants.APPLY_COUPON_SUCCESS,
  data,
});
const applyCouponFailure = (data) => ({
  type: appConstants.APPLY_COUPON_FAILURE,
  data,
});
const applyCouponReset = (data) => ({
  type: appConstants.RESET_COUPON,
  payload: data,
});
// addSubscription
const addSubscription = (data) => ({
  type: appConstants.ADD_SUBSCRIPTION,
  data,
});
const addSubscriptionSuccess = (addsubdata) => ({
  type: appConstants.ADD_SUBSCRIPTION_SUCCESS,
  addsubdata,
});

const doResetAddSubs = (data) => ({
  type: 'ADD_SUBS_RESET',
  data,
});

// calculate tax
const calculateTax = (data) => ({
  type: appConstants.CALCULATE_TAX,
  data,
});
const calculateTaxSuccess = (data) => ({
  type: appConstants.CALCULATE_TAX_SUCCESS,
  data,
});

const calculateTaxFailure = (data) => ({
  type: appConstants.CALCULATE_TAX_FAILURE,
  data,
});

const updateTransactionDetails = (data) => ({
  type: appConstants.UPDATE_TRANSACTION_DETAILS,
  status: appConstants.UPDATE_TRANSACTION_DETAILS,
  data,
});

const updateTransactionDetailsSuccess = (data) => ({
  type: appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS,
  status: appConstants.UPDATE_TRANSACTION_DETAILS_SUCCESS,
  data,
});
//setPropStatus
const setPropStatus = (status) => ({
  type: "CHANGE_STATUS",
  status
});

const payPalFailureRes = (payPalFailureResDetails) => ({
  type: appConstants.PAYPAL_FAILURE_DATA,
  payPalFailureResDetails,
});

// updatePaymentInfo
const updatePaymentInfo = (data) => ({
  type: appConstants.UPDATE_PAYMENT_INFO,
  data,
});
const updatePaymentInfoSuccess = (data) => ({
  type: appConstants.UPDATE_PAYMENT_INFO_SUCCESS,
  data,
});

const authActions = {
  getProducts,
  getProductsSuccess,
  getPaymentModes,
  getPaymentModesSuccess,
  searchAccount,
  searchAccountSuccess,
  isEligibleForFreeTrial,
  isEligibleForFreeTrialSuccess,
  getPaymentMethods,
  getPaymentMethodsSuccess,
  applyCoupon,
  applyCouponSuccess,
  applyCouponFailure,
  applyCouponReset,
  addSubscription,
  addSubscriptionSuccess,
  calculateTax,
  calculateTaxSuccess,
  calculateTaxFailure,
  searchAccountNotFound,
  createUser,
  createUserSuccess,
  createUserFailure,
  updateTransactionDetails,
  updateTransactionDetailsSuccess,
  cardEligibleForFreeTrial,
  cardNotEligibleForFreeTrial,
  setPropStatus,
  updatePaymentInfo,
  updatePaymentInfoSuccess,
  doResetAddSubs,
  payPalFailureRes
};

export default authActions;
