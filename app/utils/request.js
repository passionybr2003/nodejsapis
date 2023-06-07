/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
import axios from 'axios';
import { dataHelper, invokeAlert } from 'helpers';
import appConfig from 'config';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  if (response.data && response.data.data) {
    return dataHelper.cryptoJSDecryptAES(response.data.data);
  } else {
    return response.data;
  }
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
    return response;
  } else if (response.status === 401) {
    return response;
  } else if (response.status === 418) {
    dataHelper.clearSession();
  } else if (response.status >= 500) {
    invokeAlert('error', 'Something went wrong!!');
  }
  return response;

  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  // if (options.accessToken) {
  //   // Add Oauth Token
  //   axios.defaults.headers.common.Authorization = `Bearer ${options.accessToken}`;
  //   options.accessToken = undefined;
  // }
  let body;
  if (options.secure) {
    const obj = dataHelper.cryptoJSEncryptAES(options.body);
    body = {
      data: obj,
    };
  } else {
    // eslint-disable-next-line prefer-destructuring
    body = options.body;
  }
  options.url = options.url.trim();

  const headers = {
    'Content-Type': 'application/json',
    secure: options.secure,
  };
  if (appConfig.ENABLE_CSRF === 'true') {
    headers['CSRF-Token'] = dataHelper.getCookieValue('csurf');
  }

  return axios({
    method: options.method,
    url: `/api/v1/${options.url}`,
    headers,
    data: body,
    hideLoader: options.hideLoader,
    timeout: 180000,
    timeoutErrorMessage: 'Server has timedout. Please contact the admin',
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      if (error.messasge == 'Server has timedout. Please contact the admin') {
        invokeAlert('error', 'Server has timedout. Please contact the admin');
      }
      if (options.url === 'app/authenticate') {
        return error.response;
      } else if (error.response && error.response.status >= 500) {
        invokeAlert(
          'error',
          'Something went wrong! Please refresh the page and try again',
        );
        return error.response;
      } else if (error.response && error.response.status == 418) {
        dataHelper.clearSession();
      } else {
        return error.response;
      }
    });
}
