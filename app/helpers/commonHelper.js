/* eslint-disable no-unused-vars */
import config from 'config';

const CryptoJS = require('crypto-js');

// generate txnId
const generateTxnId = () => {
  // return round(microtime(true) * 1000) . str_pad(rand(1, pow(10, 4) - 1), 4, '0', STR_PAD_LEFT);
  // miliseconds
  const dt = new Date().getTime();
  // 4 digit random number
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  // generating TxnId
  const txnId = `${dt}${randomNumber}`;
  return txnId;
};

// localStorage key mapping
const localStorageKeys = {
  sourceData: 'sourceData',
  urlParams: 'urlParams',
};

// encrypt and set the local storage
const setDataLocalStorage = (key, value) => {
  if (key != '') {
    const sessionKey = localStorageKeys[key] ? localStorageKeys[key] : key;
    let sessionValue = value;
    if (
      sessionValue !== '' &&
      sessionValue !== null &&
      sessionValue !== undefined
    ) {
      sessionValue = cryptoJSEncrypt(value);
    }
    localStorage.setItem(sessionKey, sessionValue);
  }
};

// Decrypt and get the local storage
const getDataLocalStorage = (key) => {
  let sessionValue = '';
  if (key != '') {
    const sessionKey = localStorageKeys[key] ? localStorageKeys[key] : key;
    sessionValue = localStorage.getItem(sessionKey);
    if (
      sessionValue !== '' &&
      sessionValue !== null &&
      sessionValue !== undefined
    ) {
      sessionValue = cryptoJSDecrypt(sessionValue);
    }
  }
  return sessionValue;
};
// Encrypt data using Crypto AES
const cryptoJSEncrypt = (data) => {
  try {
    const dataEnc = { encData: data };
    // const parsedBase64Key = CryptoJS.enc.Base64.parse(config.ENC_SALT);
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(dataEnc),
      config.ENC_SALT,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      },
    );
    return encryptedData.toString();
  } catch (error) {
    // console.log('exception caugth while encrypting', error);
    return null;
  }
};

// Decrypt data from Crypto AES
const cryptoJSDecrypt = (data) => {
  try {
    if (data && typeof data != "null" && data != "null" && data !== undefined && data != "undefined" && data !== "") {
      const decryptedValue = JSON.parse(
        CryptoJS.AES.decrypt(data, config.ENC_SALT, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8),
      );
      return 'encData' in decryptedValue ? decryptedValue.encData : null;
    } else {
      return null;
    }
  } catch (error) {
    //console.log(`exception caugth while decrypting for data: ${data}, typeof:${typeof (data)} , Error: `, error);
    return null;
  }
};

// getProductById
const getProductById = (prodList, skuID) => {
  let result = {};
  if (Array.isArray(prodList) && prodList.length) {
    // array exists and is not empty
    prodList.map((Product) => {
      if (
        Product.prodMsg &&
        Product.prodMsg.skuORQuickCode &&
        Product.prodMsg.skuORQuickCode == skuID
      ) {
        result = Product.prodMsg;
        // append upgradable item
        if (Product.upgradableItems) {
          result = { ...result, upgradableItems: Product.upgradableItems };
        }
        // append productAttribute
        if (Product.productAttribute) {
          result = { ...result, productAttribute: Product.productAttribute };
        }
        // append freeTrial promo
        if (Product.promoMsg) {
          Product.promoMsg.map((promo) => {
            if (promo.isFreeTrail && promo.isFreeTrail == true) {
              return (result = { ...result, promo });
            }
          });
        }
      }
    });
  }
  return result;
};

// getOpinParentSku
const getOpinParentSku = (prodList, opinSku) => {
  let result = "";
  if (Array.isArray(prodList) && prodList.length) {
    // array exists and is not empty
    prodList.map((Product) => {
      if (
        Product.prodMsg
        && Product.prodMsg.appChannels
        && Array.isArray(Product.prodMsg.appChannels)
        && Product.prodMsg.appChannels.length
      ) {
        // array exists and is not empty
        Product.prodMsg.appChannels.map((channel) => {
          if (channel.appID && channel.appID == opinSku) {
            return result = Product.prodMsg.skuORQuickCode ? Product.prodMsg.skuORQuickCode : "";
          }
        });
      }
    });
  }
  return result;
};

// getProductAttributeByName
const getProductAttributeByName = (attributeList, attributeName) => {
  let result = [];
  if (Array.isArray(attributeList) && attributeList.length) {
    // array exists and is not empty
    attributeList.map((item) => {
      if (item.attributeLabel && item.attributeLabel == attributeName) {
        return (result = item);
      }
    });
  }
  return result;
};

// getAdvancePricebyCurrency
const getAdvancePricebyCurrency = (priceList, currency) => {
  let result = [];
  if (Array.isArray(priceList) && priceList.length) {
    // array exists and is not empty
    priceList.map((item) => {
      if (item.currencyCode && item.currencyCode == currency) {
        return (result = item);
      }
    });
  }
  return result;
};

// getPlanFrequency
const getPlanFrequency = (period, duration) => {
  let frequency = '';
  switch (period) {
    case 'NoOfYears':
      frequency = 'SEASON';
      break;
    case 'NoOfMonths':
      frequency = 'MO';
      break;
    case 'NoOfDays':
      if (duration == 30 || duration == 31) {
        frequency = 'MO';
      }
      break;
    default:
      break;
  }
  return frequency;
};

// getVoucherFrequency
const getVoucherFrequency = (couponData) => {
  let frequency = '';
  const period = 'period' in couponData ? couponData.period : '';
  const duration = 'duration' in couponData ? couponData.duration : 0;
  switch (period) {
    case 'NoOfYears':
      frequency = duration > 1 ? `/yr for ${duration} years` : '';
      break;
    case 'NoOfMonths':
      frequency = duration > 1 ? `/mo for ${duration} months` : '';
      break;
    case 'LifeTime':
      frequency = '/mo';
      break;
    default:
      break;
  }
  return frequency;
};

// getActiveCardData
const getActiveCardData = (cardsList) => {
  let result = false;
  if (Array.isArray(cardsList) && cardsList.length) {
    // array exists and is not empty
    cardsList.map((item) => {
      if (
        item.status &&
        item.status == 'Active' &&
        item.label == 'Card' &&
        item.isAutoPayment === true
      ) {
        if (item.CardInfoMessage) result = item.CardInfoMessage;
        // if (item.isAutoPayment === true) {
        //   if (item.CardInfoMessage)
        //     result = item.CardInfoMessage;
        //   }
      }
    });
  }
  return result;
};

// getCouponBySku
const getCouponBySku = (voucherData, sku) => {
  let result = false;
  if (
    voucherData.couponCodeDetails &&
    voucherData.couponCodeDetails.couponItems
  ) {
    const couponList = voucherData.couponCodeDetails.couponItems;
    if (Array.isArray(couponList) && couponList.length) {
      // array exists and is not empty
      couponList.map((item) => {
        if (item.sku && item.sku == sku) {
          result = item;
        }
      });
      // add the coupon description
      if ("descrip" in voucherData.couponCodeDetails) {
        result.descrip = voucherData.couponCodeDetails.descrip;
      }
      // add the coupon frequency
      if ('period' in voucherData.couponCodeDetails) {
        result.period = voucherData.couponCodeDetails.period;
      }
      if ('duration' in voucherData.couponCodeDetails) {
        result.duration = voucherData.couponCodeDetails.duration;
      }
      // add the paymentMethodRequired
      if ("paymentMethodRequired" in voucherData.couponCodeDetails) {
        result.paymentMethodRequired = voucherData.couponCodeDetails.paymentMethodRequired;
      }
      //isDefaultPromo
      if ("isDefaultPromo" in voucherData.couponCodeDetails) {
        // if (voucherData.couponCodeDetails.descrip == "5 Percent Off on Regular Price") {
        //   result.isDefaultPromo = false;
        // } else
        result.isDefaultPromo = voucherData.couponCodeDetails.isDefaultPromo;
      }
      // add the discountType
      if ("discountType" in voucherData.couponCodeDetails) {
        result.discountType = voucherData.couponCodeDetails.discountType;
      }
    }
  }
  return result;
};

const filterPaymentModes = (paymentModesList) => {
  const expessPay = [];
  const nonExpessPay = [];
  const bankTransfer = [];
  if (Array.isArray(paymentModesList) && paymentModesList.length) {
    // array exists and is not empty
    paymentModesList.map((item) => {
      if ('paymentGroup' in item && item.paymentGroup == 'ExpressPay') {
        expessPay.push(item);
      } else if ('paymentGroup' in item && item.paymentGroup == 'Netbanking') {
        bankTransfer.push(item);
      } else {
        nonExpessPay.push(item);
      }
    });
  }
  return { expessPay, nonExpessPay, bankTransfer };
};

// getIssuerNamebyId
const getIssuerNamebyId = (bankList, id) => {
  let result = '';
  if (Array.isArray(bankList) && bankList.length) {
    // array exists and is not empty
    bankList.map((item) => {
      if (item.value && item.value == id) {
        return (result = item.label);
      }
    });
  }
  return result;
};

// getUpsellProduct
const getUpsellProductSku = (upgradableItems) => {
  let result = '';
  if (Array.isArray(upgradableItems) && upgradableItems.length) {
    upgradableItems.map((item) => {
      if (item.upSell && item.upSell == true && item.sku) {
        return (result = item.sku);
      }
    });
  }
  return result;
};


//checkOrderExistError
const checkOrderExistError = (errorData) => {
  let result = false;
  if (Array.isArray(errorData) && errorData.length) {
    errorData.map((item) => {
      if (item.errorCode && item.errorCode == "eV1144") {
        return result = true;
      }
    });
  }
  return result;
};




//getCouponErrorByErrorCode
const getCouponErrorByErrorCode = (errorCode = "") => {
  let result = 'PROMO_ERR';
  switch (errorCode) {
    case 'eV1861':
      result = 'PROMO_ERR_1';
      break;
    case 'eV2666':
      result = 'PROMO_ERR_2';
      break;
    case 'eV1862':
      result = 'PROMO_ERR_3';
      break;
    default:
      result = 'PROMO_ERR';
      break;
  }
  return result;
};

const commonHelper = {
  generateTxnId,
  setDataLocalStorage,
  getDataLocalStorage,
  cryptoJSEncrypt,
  cryptoJSDecrypt,
  getProductById,
  getAdvancePricebyCurrency,
  getPlanFrequency,
  getActiveCardData,
  getCouponBySku,
  getVoucherFrequency,
  filterPaymentModes,
  getProductAttributeByName,
  getIssuerNamebyId,
  getUpsellProductSku,
  getOpinParentSku,
  checkOrderExistError,
  getCouponErrorByErrorCode
};

export default commonHelper;
