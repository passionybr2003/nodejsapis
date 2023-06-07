import { invokeAlert } from 'helpers';
import request from 'utils/request';

async function forgotCSRUserPassword(data) {
  const requestOptions = {
    url: 'app/forgotCSRUserPassword',
    method: 'POST',
    body: {
      ForgotCSRUserPasswordRequestMessage: data,
    },
  };

  try {
    const result = await request(requestOptions);
    if (
      result &&
      result.ForgotCSRUserPasswordResponseMessage &&
      result.ForgotCSRUserPasswordResponseMessage.responseCode == '1'
    ) {
      const { message } = result.ForgotCSRUserPasswordResponseMessage;
      invokeAlert('success', message);
      return true;
    } else if (result && result.status == '401') {
      invokeAlert('error', 'Username/Email does not exists');
      return false;
    }
  } catch (error) {
    invokeAlert('error', 'An error occurred. Please try again');
    throw error;
  }
}

async function resetCSRPassword(data) {
  const requestOptions = {
    url: 'app/resetCSRPassword',
    method: 'POST',
    body: {
      ResetCSRUserPasswordRequestMessage: {
        ...data,
      },
    },
  };

  try {
    const result = await request(requestOptions);
    console.log('reset', result);
    if (
      result &&
      result.ResetCSRUserPasswordResponseMessage &&
      result.ResetCSRUserPasswordResponseMessage.responseCode == '1'
    ) {
      const { message } = result.ResetCSRUserPasswordResponseMessage;
      invokeAlert('success', message);
      return true;
    } else if (
      result &&
      result.ResetCSRUserPasswordResponseMessage &&
      result.ResetCSRUserPasswordResponseMessage.responseCode == '0'
    ) {
      const message =
        result.ResetCSRUserPasswordResponseMessage.failureMessage[0]
          .errorMessage;
      invokeAlert('error', message);
      return false;
    }
  } catch (error) {
    invokeAlert('error', 'An error occurred. Please try again');
    throw error;
  }
}

async function authenticateCCBUserV2Reset(token, email) {
  const requestOptions = {
    url: 'app/authenticateCCBUserV2Reset',
    method: 'POST',
    body: {
      AuthenticateCCBUserV1Request: {
        userToken: token,
        email,
      },
    },
  };

  try {
    const result = await request(requestOptions);
    console.log('HERE', result);
    if (
      result &&
      result.AuthenticateCCBUserV2ResMsg &&
      result.AuthenticateCCBUserV2ResMsg.responseCode == '1'
    ) {
      return result.AuthenticateCCBUserV2ResMsg.accessToken;
    } else if (
      result &&
      result.AuthenticateCCBUserV2ResMsg &&
      result.AuthenticateCCBUserV2ResMsg.responseCode == '0'
    ) {
      const message =
        result.AuthenticateCCBUserV2ResMsg.failureMessage[0].errorMessage;
      invokeAlert('error', message);
      return result;
    }
  } catch (error) {
    console.log('here error', error);
    invokeAlert('error', 'An error occurred. Please try again');
    return result;
  }
}

async function loadNormalMasterData(type) {
  const requestOptions = {
    url: `app/loadMasterData/?type=${type}`,
    method: 'GET',
  };
  try {
    const response = await request(requestOptions);
    const masterDataFromAPI = JSON.parse(response.masterData);
    return masterDataFromAPI;
  } catch (err) {
    return {};
  }
}

async function loadAddressMuncipalityData() {
  const requestOptions = {
    url: 'app/loadAddressMuncipalityData',
    method: 'GET',
  };
  try {
    const response = await request(requestOptions);
    const masterDataFromAPI = JSON.parse(response.masterData);
    return masterDataFromAPI;
  } catch (err) {
    return {};
  }
}

const AppService = {
  forgotCSRUserPassword,
  resetCSRPassword,
  authenticateCCBUserV2Reset,
  loadNormalMasterData,
  loadAddressMuncipalityData
};
export default AppService;
