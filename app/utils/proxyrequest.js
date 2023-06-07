/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
import config from 'config';
import axios from 'axios';
import { history } from 'helpers';
// import Alert from 'react-s-alert';
import { verify, sign } from 'jsonwebtoken';

// Add a request interceptor
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  const resdata = response && response.data ? response.data : response;
  return resdata;
}

function clearSession() {
  localStorage.removeItem('user');
  localStorage.removeItem('selectedBUData');
  localStorage.removeItem('permissions');
  // history.push('/login');
  // setTimeout(() => {
  //   // clear react context
  //   window.location.reload();
  // }, 1000);
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    const resData =
      config.ENCRYPT === 'yes' &&
        response &&
        response.data &&
        response.data.decrypt &&
        response.data.decrypt === 'yes'
        ? decryptData(response.data.data)
        : response.data;
    // const res = response.data;
    return resData;
  } else if (response.status === 401) {
    clearSession();
    // Alert.error('Session expired please login again to continue', {
    //   position: 'top',
    //   effect: 'stackslide',
    //   beep: false,
    //   timeout: 700,
    //   offset: 50,
    // });
    return response;
  }
  const res =
    config.ENCRYPT === 'yes' ? decryptData(response.data) : response.data;
  return res;

  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
}

/* Encryption and Decryption of API request and response */
const publicKey = config.PUBLIC_KEY.replace(/\\n/g, '\n');
const iss = 'evergent';
const sub = 'secure data';
const aud = 'NBA';
const exp = '15m';

const ev_verifyOptions = {
  issuer: iss,
  subject: sub,
  audience: aud,
  maxAge: '15m',
  algorithms: ['RS256'],
};

const encryptData = (data) => {
  try {
    const pub_enc = sign(data, publicKey);
    // var refreshToken = randtoken.uid(256)
    return { data: pub_enc };
  } catch (e) {
    console.log(e);
  }
};
const decryptData = (data) => {
  try {
    if (config.ENCRYPT === 'yes') {
      const verified = verify(data, publicKey, ev_verifyOptions);
      return verified.data;
    } else return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function proxyrequest(options) {
  if (options.accessToken) {
    // Add Oauth Token
    axios.defaults.headers.common.Authorization = `Bearer ${options.accessToken}`;
  } else {
    axios.defaults.headers.common.Authorization = '';
  }

  if (options.isCallingSelfServer && options.selfURL) {
    options.body.url = `${options.url}`;
    options.body.method = options.method;
  }

  options.url = options.url.trim();

  return axios({
    method: options.method,
    url: `/${options.selfURL}`,
    headers: { 'Content-Type': 'application/json' },
    // data: options.body,
    data: config.ENCRYPT === 'yes' ? encryptData(options.body) : options.body,
    withCredentials: false
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(function (error) {
      if (error.response) {
        console.log("proxyrequest error.response", error.response);
      } else if (error.request) {
        console.log("proxyrequest error.request", error.request);
      } else if (error.message) {
        console.log("proxyrequest error.message", error.message);
      } else {
        console.log("proxyrequest error", error);
      }
    });
}
