const CryptoJS = require('crypto-js');
const service = require('../services/serviceHelper');

/* eslint-disable no-mixed-operators */

const getCookie = (name) => {
    let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
    return a ? a[1] : null;
};

const getCookieValue = (cookie, a) => {
  if (cookie != undefined) {
    // eslint-disable-next-line prefer-template
    const b = cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  return undefined;
};

const cryptoJSEncryptAES = (data) => {
  if (!data) {
    return null;
  }
  const aesKey = process.env.AES_KEY;
  const parsedBase64Key = CryptoJS.enc.Base64.parse(aesKey);
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    parsedBase64Key,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    },
  );
  return encryptedData.toString();
};

const cryptoJSDecryptAES = (data, isString = false) => {
  if (!data) {
    return null;
  }
  const aesKey = process.env.AES_KEY;
  const parsedBase64Key = CryptoJS.enc.Base64.parse(aesKey);

  const decryptedData = CryptoJS.AES.decrypt(isString ? data : data.data, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return JSON.parse(CryptoJS.enc.Utf8.stringify(decryptedData));
};

const callBack = (request, response, secure, promise) =>
  promise.then(
    (res) => {
      let obj;
      if (secure) {
        obj = {
          data: cryptoJSEncryptAES(res),
        };
      } else {
        obj = res;
      }
      response.json(obj);
    },
    (err) => {
      if (err && err.status) {
        response.status(err.status);
      }
      if (err.status == 401) {
        service.apiService.refreshToken(request, response);
      } else {
        response.json(err);
      }
    },
  );
  

module.exports = {
  cryptoJSEncryptAES,
  cryptoJSDecryptAES,
  getCookieValue,
  callBack,
  getCookie,
};
