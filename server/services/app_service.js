const config = require('../config');
const fetch = require('node-fetch');
const serviceHelper = require('./serviceHelper');

const appService = {};

function login(loginObj) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginObj),
      method: 'post',
    };
    let status;
    fetch(`${config.CCB_API_URL}/ccb/authenticateCCBUserV2`, options)
      .then((response) => {
        // eslint-disable-next-line prefer-destructuring
        status = response.status;
        return response.json();
      })
      .then((result) => {
        if (status == 401) {
          result.status = status;
          reject(result);
        } else {
          if(loginObj.AuthenticateCCBUserV1Request.apiUser){
            result.AuthenticateCCBUserV2ResMsg.email =
            loginObj.AuthenticateCCBUserV1Request.apiUser;
          }else{
            result.AuthenticateCCBUserV2ResMsg.email=loginObj.AuthenticateCCBUserV1Request.email;
          }
          
          resolve(result);
        }
      })
      .catch((error) => {
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

function getChannelPartners(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getChannelPartnersForUser');
}

function marketAreaService(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getMarketAreas');
}

function getCompleteAccountDetails(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getCompleteAccountDetails');
}

function getConfigurationData(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getConfigurationData');
}

function getLatestCatalogue(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getLatestCatalogue');
}

function getPkgsAndProdsWithPromosV2(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getPkgsAndProdsWithPromosV2');
}
function searchProductsAndPackages(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getConfigurationData');
}

function getUserPermissions(user, obj) {
  return serviceHelper.apiRequest(user, obj, 'getConfigurationData');
}

function loadUserToken(authorization, obj) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(obj),
      method: 'post',
    };
    fetch(`${config.CCB_API_URL}/ccb/createUserToken`, options)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

function getRefreshToken(authorization, refreshToken) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify({
        RefreshUserTokenRequestMessage: {
          refreshToken,
        },
      }),
      method: 'post',
    };
    let status;
    fetch(`${config.CCB_API_URL}/ccb/refreshUserToken`, options)
      .then((response) => {
        // eslint-disable-next-line prefer-destructuring
        status = response.status;
        return response.json();
      })
      .then((result) => {
        if (status == 401) {
          result.status = status;
          reject(result);
        } else {
          resolve(result);
        }
      })
      .catch((error) => {
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

function resetCSRPassword(data) {
  const { accessToken } = data.ResetCSRUserPasswordRequestMessage;
  const body = {
    ResetCSRUserPasswordRequestMessage: {
      newPassword: data.ResetCSRUserPasswordRequestMessage.newPassword,
      confirmPassword: data.ResetCSRUserPasswordRequestMessage.confirmPassword,
    }
  }
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
      method: 'post',
    };
    let status;
    fetch(`${config.CCB_API_URL}/ccb/resetCSRUserPassword`, options)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((result) => {
        if (status == 401) {
          reject(result);
        } else {
          resolve(result);
        }
      })
      .catch((error) => {
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

function authenticateCCBUserV2Reset(data) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      method: 'post',
    };
    let status;
    fetch(`${config.CCB_API_URL}/ccb/authenticateCCBUserV2`, options)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((result) => {
        console.log("Result in 201", result)
        if (status == 401) {
          result.status = status;
          reject(result);
        } else {
          resolve(result);
        }
      })
      .catch((error) => {
        console.log('err', error);
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

function forgotCSRUserPassword(data) {
  // const { accessToken } = data;
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${JSON.parse(accessToken)}`,
      },
      body: JSON.stringify(data),
      method: 'post',
    };
    fetch(`${config.CCB_API_URL}/ccb/forgotCSRUserPassword`, options)
      .then((response) => {
        console.log("RES in 227", response);
        const d = response.json();
        return {
          data: d,
          status: response.status
        };
      })
      .then((result) => {
        console.log("result in then 232", result)
        if (result.status == 401) {
          reject(result);
        } else {
          resolve(result.data);
        }
      })
      .catch((error) => {
        console.log("ERR in 240", error)
        reject(
          new Error({
            status: 500,
            error: 'something went wrong!!',
            errorObject: error,
          }),
        );
      });
  });
}

appService.login = login;
appService.getChannelPartners = getChannelPartners;
appService.marketAreaService = marketAreaService;
appService.getCompleteAccountDetails = getCompleteAccountDetails;
appService.getConfigurationData = getConfigurationData;
appService.getLatestCatalogue = getLatestCatalogue;
appService.getPkgsAndProdsWithPromosV2 = getPkgsAndProdsWithPromosV2;
appService.searchProductsAndPackages = searchProductsAndPackages;
appService.getUserPermissions = getUserPermissions;
appService.loadUserToken = loadUserToken;
appService.getRefreshToken = getRefreshToken;
appService.resetCSRPassword = resetCSRPassword;
appService.authenticateCCBUserV2Reset = authenticateCCBUserV2Reset;
appService.forgotCSRUserPassword = forgotCSRUserPassword;
module.exports = appService;
