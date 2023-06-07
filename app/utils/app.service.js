/* eslint-disable no-unused-vars */
import config from 'config';
import axios from 'axios';
import { history, authHeader } from 'helpers';

const somethingWentWrong = 'Something went wrong please try again later';

const handleResponse = (response, fromService) => {
  const responseData = response[`${fromService}Response`];
  if (responseData.responseCode === '1') {
    return responseData;
  }
  return false;
};

const getCSRUserDetails = (email) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      CSRUserDetailsRequestMsg: {
        csrUserName: email,
      },
      url: `${config.API_URL}/ccb/getCSRUserDetails`,
      method: 'POST',
    },
  };
  return axios
    .post('/proxy', requestOptions.body)
    .then((response) => {
      if (response.data.CSRUserDetailsResponseMsg.message === 'FAIL') {
        return true;
      }
      return false;
    })
    .catch((error) => Promise.reject(error));
};

const AppService = {
  getCSRUserDetails,
};

export default AppService;
