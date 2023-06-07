import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import isUndefined from 'lodash/isUndefined';
import appConfig from 'config';
import moment from 'moment';
import { history } from 'helpers';

/* eslint-disable no-mixed-operators */
function getArrays(data) {
  if (data && Array.isArray(data)) {
    return data;
  } else if (data) {
    return [data];
  }
  return [];
}

const convertMillSecondsToDateTimeString = (date) => {
  if (date) {
    const selectedDate = new Date(parseInt(date, 10)).toISOString();
    const YYYY = selectedDate.substr(0, 4).replace('T', ' ');
    const MM = selectedDate.substr(5, 2).replace('T', ' ');
    const DD = selectedDate.substr(8, 2).replace('T', ' ');
    // const time = selectedDate.substr(11, 8).replace('T', ' ');
    return `${MM}/${DD}/${YYYY}`;
  }
  return '';
};

/**
 * Returns milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.
 * Example : dateTimeString = 'Sat May 15 2021 17:01:00 GMT+0530' ==> output: 1621078260000
 * @param {string} dateTimeString
 */
const convertDateTimeStringToMilliseconds = (dateTimeString) => {
  if (dateTimeString) {
    return new Date(dateTimeString).getTime();
  }
  return '';
};

const convertDateFromString = (date) => {
  if (date) {
    const x = date.split(' ');
    if (x[0] && x[1]) {
      const d = new Date(`${x[0]} ${x[1]}`);
      return d;
    }
    return undefined;
  }
  return undefined;
};

const countDecimals = (value) => {
  if (Math.floor(value) === value) return 0;
  return value.toString().split('.')[1].length || 0;
};

const amount_helper = (
  amount,
  currencyCode,
  showHypen = false,
  stopRounding = false,
  noOfDcmsAfterDot = 0,
  roundingToZero = false,
) => {
  /**
   * if amount is undefined, send them back 0.00 or --
   * if amount is defined and typeof amount is string then we return as it is just -
   * if amount is defined and typeof amount is not string then we convert using toFixed method.
   */
  if (amount !== undefined) {
    let decimalsCount;
    if (amount === '--') {
      return '--';
    } else if (typeof amount === 'string') {
      if (amount.includes('-')) {
        return `-${currencyCode} ${amount.toString().replace(/-/g, '')}`;
      }
      return `${currencyCode} ${amount}`;
    }
    if (amount < 0) {
      if (stopRounding) {
        decimalsCount = countDecimals(amount);
        if (decimalsCount == 0) {
          return `-${currencyCode} ${amount
            .toFixed(noOfDcmsAfterDot || 6)
            .replace(/-/g, '')}`;
        }
        return `-${currencyCode} ${amount
          .toFixed(noOfDcmsAfterDot || decimalsCount)
          .replace(/-/g, '')}`;
      }
      if (roundingToZero) {
        return `-${currencyCode} ${amount}`;
      }
      return `-${currencyCode} ${amount
        .toFixed(noOfDcmsAfterDot || 2)
        .replace(/-/g, '')}`;
    }
    if (stopRounding) {
      decimalsCount = countDecimals(amount);
      if (decimalsCount == 0) {
        if (roundingToZero) {
          return `${currencyCode} ${amount}`;
        }
        return `${currencyCode} ${amount.toFixed(noOfDcmsAfterDot || 6)}`;
      }
      return `${currencyCode} ${amount.toFixed(
        noOfDcmsAfterDot || decimalsCount,
      )}`;
    }
    if (roundingToZero) {
      return `${currencyCode} ${amount}`;
    }
    return `${currencyCode} ${amount.toFixed(noOfDcmsAfterDot || 2)}`;
  }
  if (showHypen) {
    return '--';
  }
  return `${currencyCode} ${roundingToZero ? '0' : '0.00'}`;
};

const localesList = {
  USD: 'en-US', // United States of America
  INR: 'en-IN', // India
  AUD: 'en-AU', // Australia
  JPY: 'ja-JP', // Japan
  EUR: 'en-ES', // Europe - Currently using Spanish
  GBP: 'en-GB', // Great Britan
  MYR: 'ms-MY', // Malaysia
  AED: 'ar-AE', // United Arab Emirates
  UYU: 'es-UY', // Uruguay
  DZD: 'ar-DZ', // Algeria
  BHD: 'ar-BH', // Bahrain
  XAF: 'ar-TD', // Chad
  DJF: 'ar-DJ', // Djibouti
  EGP: 'ar-EG', // Egypt
  IQD: 'ar-IQ', // Iraq
  JOD: 'ar-JO', // Jordan
  KWD: 'ar-KW', // Kuwait
  LBP: 'ar-LB', // Lebanon
  LYD: 'ar-LY', // Libya
  MRO: 'ar-MR', // Mauritania
  MAD: 'ar-MA', // Morocco
  OMR: 'ar-OM', // Oman
  PSP: 'ar-PS', // Palestine
  YER: 'ar-YE', // Yemen
  TND: 'ar-TN', // Tunisia
  SYP: 'ar-SY', // Syria
  SSP: 'ar-SS', // South Sudan
  SLS: 'ar-SO', // Somalia
  SAR: 'ar-SA', // Saudi Arabia
  QAR: 'ar-QA', // Qatar
};

const persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
const arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];

const convertArabicDigitsToEnglishDigits = (str) => {
  if (typeof str === 'string') {
    for (let i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  if (
    appConfig.ENVIRONMENT_NAME === 'Ireland Prod' ||
    appConfig.ENVIRONMENT_NAME === 'Ireland Stag'
  ) {
    return str.replace(/[٬٫,]/g, '.');
  }
  return str;
};

const isCurrencyPersianOrArabic = (currencyCode) => {
  const arabicCurrencies = [
    'AED',
    'DZD',
    'BHD',
    'XAF',
    'DJF',
    'EGP',
    'IQD',
    'JOD',
    'KWD',
    'LBP',
    'LYD',
    'MRO',
    'MAD',
    'OMR',
    'PSP',
    'YER',
    'TND',
    'SYP',
    'SSP',
    'SLS',
    'SAR',
    'QAR',
  ];
  const match = arabicCurrencies.includes(currencyCode);
  return match;
};

// TODO: Need to add additional check for currencies with multiple locales
// TODO Need to re-check the arabic condition below w.r.t language selections
const amount_helper_intl = (
  amount,
  currencyCode = 'USD',
  showHyphens = false,
  useRounding = false,
  externalSystem = '',
  roundingDigits = 0,
) => {
  const getLang = localStorage.getItem('userSelectedLanguage');
  if (amount != undefined && amount != '--' && amount != 'Product Price') {
    if (useRounding && externalSystem.includes('ATT')) {
      const convertedAmount = new Intl.NumberFormat(localesList[currencyCode], {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: roundingDigits,
        maximumFractionDigits: 20,
      }).format(amount);
      // NOTE: Due to JCOM specific requirement we convert ￥ Symbol to 円
      if (currencyCode == 'JPY') {
        return `${convertedAmount.replace('￥', '')}円`;
      }
      // NOTE: Need to convert Persian and Arabic Numbers to normal numbers.
      if (isCurrencyPersianOrArabic(currencyCode) && getLang != 'Arabic') {
        return convertArabicDigitsToEnglishDigits(convertedAmount);
      }
      return convertedAmount;
    }
    const convertedAmount = new Intl.NumberFormat(localesList[currencyCode], {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
    // NOTE: Due to JCOM specific requirement we convert ￥ Symbol to 円
    if (currencyCode == 'JPY') {
      return `${convertedAmount.replace('￥', '')}円`;
    }
    // NOTE: Need to convert Persian and Arabic Numbers to normal numbers
    if (isCurrencyPersianOrArabic(currencyCode) && getLang != 'Arabic') {
      return convertArabicDigitsToEnglishDigits(convertedAmount);
    }
    return convertedAmount;
  }
  // We check for this String as we use it in Widget Configuration Screen
  if (amount == 'Product Price') {
    return 'Product Price';
  }
  // If we want to show '--' when amount is undefined - Like Credits Table
  if (showHyphens) {
    return '--';
  }
  return '';
};

const GetCardType = (number) => {
  number = number.replace(/\s/g, '');
  // visa
  let re = new RegExp('^4');
  if (number.match(re) != null) {
    return 'Visa';
  }

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      number,
    )
  ) {
    return 'MasterCard';
  }

  // AMEX
  re = new RegExp('^3[47]');
  if (number.match(re) != null) {
    return 'AMEX';
  }

  // Discover
  re = new RegExp(
    '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)',
  );
  if (number.match(re) != null) {
    return 'Discover';
  }

  // JCB
  re = new RegExp('^35(2[89]|[3-8][0-9])');
  if (number.match(re) != null) {
    return 'JCB';
  }

  // Visa Electron
  re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
  if (number.match(re) != null) {
    return 'Visa Electron';
  }

  return '-';
};

const capitaliseFirstLetter = (inputString) => {
  if (inputString !== null && inputString !== undefined) {
    return inputString
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  } else {
    return inputString;
  }
};

const modifyCamelCase = (inputCamelCase) => {
  switch (inputCamelCase) {
    case 'LifeTime':
      return 'Life Time';
    case 'NoOfDays':
      return 'No of Days';
    case 'NoOfMonths':
      return 'No of Months';
    case 'NoOfYears':
      return 'No of Years';
    default:
      return inputCamelCase;
  }
};

const generateUniqueId = () => {
  const randomNumber = Math.random()
    .toString(36)
    .substr(2, 4);
  const randomAlpha = Math.floor(Math.random() * 90 + 10);
  return randomNumber + randomAlpha;
};

const clean = (obj) => {
  const propNames = Object.getOwnPropertyNames(obj);
  for (let i = 0; i < propNames.length; i += 1) {
    const propName = propNames[i];
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === '' ||
      (Array.isArray(obj[propName]) && obj[propName].length === 0)
    ) {
      delete obj[propName];
    }
    if (typeof obj[propName] === 'object' || Array.isArray(obj[propName])) {
      clean(obj[propName]);
    }
  }
  return obj;
};

// TODO: Review later if below helper is needed and remove if not needed
const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};

const cardTypeFinder = (cur_val) => {
  let sel_brand;

  // JCB
  const jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); // 2131, 1800, 35 (3528-3589)
  // American Express
  const amex_regex = new RegExp('^3[47][0-9]{0,}$'); // 34, 37
  // Diners Club
  const diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); // 300-305, 309, 36, 38-39
  // Visa
  const visa_regex = new RegExp('^4[0-9]{0,}$'); // 4
  // MasterCard
  const mastercard_regex = new RegExp(
    '^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$',
  ); // 2221-2720, 51-55
  const maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); // always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
  // Discover
  const discover_regex = new RegExp(
    '^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$',
  );
  // //6011, 622126-622925, 644-649, 65

  // get rid of anything but numbers
  const cardValue = cur_val.replace(/\D/g, '');

  // checks per each, as their could be multiple hits
  // fix: ordering matter in detection, otherwise can give false results in rare cases
  if (cardValue.match(jcb_regex)) {
    sel_brand = 'JCB CARD';
  } else if (cardValue.match(amex_regex)) {
    sel_brand = 'AMERICAN EXPRESS';
  } else if (cardValue.match(diners_regex)) {
    sel_brand = 'DINERS CLUB';
  } else if (cardValue.match(visa_regex)) {
    sel_brand = 'VISA';
  } else if (cardValue.match(mastercard_regex)) {
    sel_brand = 'MASTER CARD';
  } else if (cardValue.match(discover_regex)) {
    sel_brand = 'DISCOVER';
  } else if (cardValue.match(maestro_regex)) {
    if (cardValue[0] == '5') {
      // started 5 must be mastercard
      sel_brand = 'MASTER CARD';
    } else {
      sel_brand = 'MEASTRO'; // maestro is all 60-69 which is not something else, thats why this condition in the end
    }
  } else {
    sel_brand = 'Unknown card';
  }

  return sel_brand;
};

/* Use cryptoJSEncryptAES to replace btoa */
/**
 *
 * @param {*} data The data which is to be encrypted
 * @param {*} isString Boolean to see if the data is object or string
 * @returns Encrypted String
 */
const cryptoJSEncryptAES = (data, isString = false) => {
  // If data is null then we return null.
  if (!data) {
    return null;
  }
  const aesKey = appConfig.AES_KEY; // The Secret AES Key which is used for encryption/decryption
  const parsedBase64Key = CryptoJS.enc.Base64.parse(aesKey); // Parse the AES key to generate an base64 version of it.
  const encryptedData = CryptoJS.AES.encrypt(
    isString ? data : JSON.stringify(data), // The data to be encrypted
    parsedBase64Key, // The parsed base64 secret key
    {
      mode: CryptoJS.mode.ECB, // We use ECB(Electronic Codebook) cipher mode
      padding: CryptoJS.pad.Pkcs7, // We use the Pkcs7 padding scheme
    },
  );
  // Return back the encrypted data in string format
  return encryptedData.toString();
};

/* Use cryptoJSDecryptAES to replace atob */
/**
 *
 * @param {*} data The data which is to be decrypted
 * @returns
 */
const cryptoJSDecryptAES = (data) => {
  // If data is null then we return null.
  if (!data) {
    return null;
  }
  const aesKey = appConfig.AES_KEY; // The Secret AES Key which is used for encryption/decryption
  const parsedBase64Key = CryptoJS.enc.Base64.parse(aesKey); // Parse the AES key to generate an base64 version of it.

  const decryptedData = CryptoJS.AES.decrypt(
    data, // The cipher data to be decrypted
    parsedBase64Key, // The parsed base64 secret key
    {
      mode: CryptoJS.mode.ECB, // We use ECB(Electronic Codebook) cipher mode
      padding: CryptoJS.pad.Pkcs7, // We use the Pkcs7 padding scheme
    },
  );
  // Parse the decrypted data back into an JS object and return it
  return JSON.parse(CryptoJS.enc.Utf8.stringify(decryptedData));
};

export const invokeAlert = (
  type,
  message = 'Something went wrong. Please contact Admin',
) => {
  switch (type) {
    case 'info': {
      toast.info(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    }
    case 'success': {
      toast.success(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    }
    case 'warn': {
      toast.warn(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    }
    case 'error': {
      toast.error(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    }
    default:
      break;
  }
};

const base64FileExtension = (
  fileNameWithExtension = 'someFile.jpg',
  encodedData,
) => {
  const extension = fileNameWithExtension.split('.').pop() || 'jpg';
  if (encodedData) {
    switch (extension) {
      case 'jpeg':
      case 'jpg':
        return `data:image/jpeg;base64,${encodedData}`;

      case 'png':
        return `data:image/png;base64,${encodedData}`;

      case 'gif':
        return `data:image/gif;base64,${encodedData}`;

      case 'pdf':
        return `data:application/pdf;base64,${encodedData}`;

      case 'doc':
        return `data:application/msword;base64,${encodedData}`;

      case 'docx':
        return `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${encodedData}`;

      case 'csv':
        return `data:text/csv;base64,${encodedData}`;

      default:
        return `data:image/jpeg;base64,${encodedData}`;
    }
  } else {
    return null;
  }
};

const attachmentHelper = (
  incomingFilesArray,
  reqFileName = 'fileName',
  reqFileData = 'fileData',
) => {
  const requiredArray = [];
  incomingFilesArray.forEach((eachArrayObj) => {
    const fileObj = {};
    fileObj[reqFileData] = base64FileExtension(
      eachArrayObj.fileName,
      eachArrayObj.fileData,
    );
    fileObj[reqFileName] = eachArrayObj.fileName;
    requiredArray.push(fileObj);
  });
  return requiredArray;
};

const stringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.innerText;
};

/** Below function returns currency code - USD or JPY etc... */
const getBUCurrencyCode = () => {
  const userObj = JSON.parse(localStorage.getItem('user'));
  const selectedBUobj = JSON.parse(localStorage.getItem('selectedBUData'));
  const currentObj = userObj.channelPartners.find(
    (eachBU) => eachBU.channelPartnerId == selectedBUobj.data.channelPartnerID,
  );
  const currencyCode = !isUndefined(currentObj) ? currentObj.currency : 'USD';
  return currencyCode;
};

const findCurrency = () => {
  const userObj = JSON.parse(localStorage.getItem('user'));
  const selectedBUobj = JSON.parse(localStorage.getItem('selectedBUData'));
  const currentObj = userObj.channelPartners.find(
    (eachBU) => eachBU.channelPartnerId == selectedBUobj.data.channelPartnerID,
  );
  const currencyCode = !isUndefined(currentObj) ? currentObj.currency : 'USD';
  return (
    currencyConstants.find(
      (eachCurrencyObj) => eachCurrencyObj.value == currencyCode,
    ) || { symbol: '$' }
  ).symbol;
};

const maskEmail = (value) => {
  // const str = value.substring(value.lastIndexOf('@'), value.length);
  // const replaceString = str.substr(0, str.indexOf('.'));
  if (value) {
    const firstPart = value.substr(0, value.lastIndexOf('@'));
    const secondPart = value.substr(value.lastIndexOf('@') + 1);
    const lastPart = secondPart.substr(secondPart.indexOf('.'));
    const newString = '@XXXXX';
    return `${firstPart}${newString}${lastPart}`;
  }
  return null;
};

const maskContact = (num) => {
  if (num) {
    const firstPart = num.substr(0, num.length - 4);
    const newString = 'XXXX';
    return `${firstPart}${newString}`;
  }
  return null;
};
const findBuCountry = () => {
  const userObj = JSON.parse(localStorage.getItem('user'));
  const selectedBUobj = JSON.parse(localStorage.getItem('selectedBUData'));
  const currentObj = userObj.channelPartnerObj.find(
    (eachBU) => eachBU.channelPartnerId == selectedBUobj.data.channelPartnerID,
  );
  return currentObj.country;
};

function isItNumericString(inputString) {
  return /^-?\d+$/.test(inputString);
}

function japanZipCodeValidation(inputString) {
  return /^\d+(?:-\d+)*$/.test(inputString);
}

const detectPhoneMask = (number, prefecture) => {
  const num = number.toString();
  if (num.length >= 11) {
    if (num.substr(0, 3) === '050') {
      return 'ipPhone'; // 'IP Phone'
    } else {
      return 'tokyoMobileNumber'; // 'Tokyo Mobile Number'
    }
  } else if (num.length === 10) {
    if (
      (prefecture && prefecture.toLowerCase() === 'tokyo') ||
      prefecture === '東京都' ||
      prefecture === '520'
    ) {
      return 'tokyoLandline'; // 'Tokyo Landline'  city=='東京都' || city=="Tokyo" || state==520
    } else {
      return 'otherPrefLandline'; // 'Other Prefecture Landline'
    }
  }
  return 'doesNotMatch';
};

const makeJapanPhoneMask = (phoneNumber, state) => {
  const phnb = phoneNumber.toString();
  const typeOfPhoneNumber = detectPhoneMask(phnb, state);
  switch (typeOfPhoneNumber) {
    case 'ipPhone': {
      // 050-NNNN-NNNNNNNNNNNN.......
      return `${phnb.substring(0, 3)}-${phnb.substring(3, 7)}-${phnb.substring(
        7,
        phnb.length,
      )}`;
    }
    case 'tokyoMobileNumber': {
      return `${phnb.substring(0, 3)}-${phnb.substring(3, 7)}-${phnb.substring(
        7,
        phnb.length,
      )}`;
    }
    case 'tokyoLandline': {
      // 0N-NNNN-NNNNNNNNNNN......
      return `${phnb.substring(0, 2)}-${phnb.substring(2, 6)}-${phnb.substring(
        6,
        phnb.length,
      )}`;
    }
    case 'otherPrefLandline': {
      // 0NN-NNN-NNNNNNNNNNNN.......
      return `${phnb.substring(0, 3)}-${phnb.substring(3, 6)}-${phnb.substring(
        6,
        phnb.length,
      )}`;
    }
    case 'doesNotMatch':
      return phoneNumber;
    default:
      return phnb;
  }
};

function getCookieValue(a) {
  const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
  return b ? b.pop() : '';
}

const convertUTC = (localDate) => new Date(moment(localDate).format('YYYY-MM-DD')).getTime();

const getIsRecurringORisRenewableHelper = (renewable, recurringInd) => {
  if (
    recurringInd === 'T' ||
    recurringInd === 'true' ||
    recurringInd === true
  ) {
    return 'Recurring';
  } else if (renewable === 'true' || renewable === 'T' || renewable === true) {
    return 'Renewable';
  } else {
    return 'Onetime';
  }
};

const clearSession = () => {
  const appLoginType = localStorage.getItem('appLoginType');
  localStorage.clear();
  sessionStorage.clear();
  let timeout = 100;
  if (appLoginType == 'azure-ad') {
    timeout = 1500;
  }
  if (appLoginType == 'azure-ad') {
    history.push('/');
  } else {
    history.push('/login');
  }
  setTimeout(() => {
    window.location.reload();
  }, timeout);
};

const dataHelper = {
  getArrays,
  convertMillSecondsToDateTimeString,
  convertDateTimeStringToMilliseconds,
  convertDateFromString,
  amount_helper,
  amount_helper_intl,
  GetCardType,
  capitaliseFirstLetter,
  modifyCamelCase,
  generateUniqueId,
  clean,
  getTodayDate,
  cardTypeFinder,
  cryptoJSEncryptAES,
  cryptoJSDecryptAES,
  invokeAlert,
  base64FileExtension,
  attachmentHelper,
  stringToHTML,
  findCurrency,
  getBUCurrencyCode,
  maskEmail,
  maskContact,
  findBuCountry,
  detectPhoneMask,
  makeJapanPhoneMask,
  isItNumericString,
  japanZipCodeValidation,
  getCookieValue,
  convertUTC,
  getIsRecurringORisRenewableHelper,
  clearSession
};

export default dataHelper;
