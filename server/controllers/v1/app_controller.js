const service = require('../../services');
const { cryptoJSEncryptAES } = require('../../util/helper');
const { isEncryption, SESS_NAME } = require('../../config');
const { client } = require('../../util/redis');
const addressMasterData = require('../../data/masterData_address');
const config = require('../../config');
const appController = {};

function Authenticate(req, res) {
  service.appService.login(req.body).then(
    (response) => {
      req.session.user = response.AuthenticateCCBUserV2ResMsg.email;
      // Reverting code that used session.save method. Will look at it later
      req.session.tokens = JSON.stringify({
        refreshToken: response.AuthenticateCCBUserV2ResMsg.refreshToken,
        accessToken: response.AuthenticateCCBUserV2ResMsg.accessToken,
      });
      delete response.AuthenticateCCBUserV2ResMsg.accessToken;
      delete response.AuthenticateCCBUserV2ResMsg.refreshToken;
      res.json(response);
    },
    (error) => {
      if (error && error.status) {
        res.status(error.status);
      }
      res.json({ err: error });
    },
  );
}

function Logout(req, res) {
  try {
    // eslint-disable-next-line prefer-destructuring
    const user = req.session.user;
    if (user) {
      req.session.destroy((err) => {
        if (err) {
          res.clearCookie(SESS_NAME);
          if (config.ENABLE_CSRF === 'true') {
            res.clearCookie('csurf');
          }
          res.status(418).json({
            reason: 'Error while destroying session',
          });
        } else {
          res.clearCookie(SESS_NAME);
          if (config.ENABLE_CSRF === 'true') {
            res.clearCookie('csurf');
          }
          res.send({
            username: user,
          });
        }
      });
    } else {
      res.status(418).json({
        reason: 'Error: Session user not found',
      });
    }
  } catch (err) {
    res.clearCookie(SESS_NAME);
    if (config.ENABLE_CSRF) {
      res.clearCookie('csurf');
    }
    res.status(418).json({
      reason: 'Exception during destroying session',
    });
  }
}

function getChannelPartners(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getChannelPartnersForUser')
    .then(
      (response) => {
        if (isEncryption) {
          const obj = {
            data: cryptoJSEncryptAES(response),
          };
          res.json(obj);
        } else {
          res.json(response);
        }
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function marketArea(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getMarketAreas')
    .then(
      (response) => {
        res.json(response);
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

/**
 * @function getComplete account details of user
 * @param  {} req => header and req body passing
 * @param  {} res => return the response
 */
function getCompleteAccountDetails(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getCompleteAccountDetails')
    .then(
      (response) => {
        if (isEncryption) {
          const obj = {
            data: cryptoJSEncryptAES(response),
          };
          res.json(obj);
        } else {
          res.json(response);
        }
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function getConfigurationData(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getConfigurationData')
    .then(
      (response) => {
        if (isEncryption) {
          const obj = {
            data: cryptoJSEncryptAES(response),
          };
          res.json(obj);
        } else {
          res.json(response);
        }
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}
/** Landing Page */
function getLatestCatalogue(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getLatestCatalogue')
    .then(
      (response) => {
        res.json(response);
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function getPkgsAndProdsWithPromosV2(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getPkgsAndProdsWithPromosV2')
    .then(
      (response) => {
        res.json(response);
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function searchProductsAndPackages(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'searchProductsAndPackages')
    .then(
      (response) => {
        res.json(response);
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function getUserPermissions(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'getPermissionDetails')
    .then(
      (response) => {
        if (isEncryption) {
          const obj = {
            data: cryptoJSEncryptAES(response),
          };
          res.json(obj);
        } else {
          res.json(response);
        }
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function loadUserToken(req, res) {
  service.serviceHelper
    .apiRequest(req.session.tokens, req.body, 'createUserToken')
    .then(
      (response) => {
        response.CreateUserTokenResponseMessage.accessToken = JSON.parse(
          req.session.tokens,
        ).accessToken;
        if (isEncryption) {
          const obj = {
            data: cryptoJSEncryptAES(response),
          };
          res.json(obj);
        } else {
          res.json(response);
        }
      },
      (err) => {
        if (err.status == 401) {
          service.serviceHelper.refreshToken(req, res, req.session.tokens);
        } else {
          res.json({ error: err });
        }
      },
    );
}

function refreshSession(req, res) {
  if (req.session) {
    req.session.reload((err) => {
      if (err) {
        res.clearCookie(SESS_NAME);
        res.status(418).json({
          reason: 'Error while reloading session',
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Session refreshed successfully',
        });
      }
    });
  } else {
    res.clearCookie(SESS_NAME);
    res.status(418).json({
      reason: 'Error - Session not found',
    });
  }
}

function clearSidCookie(req, res) {
  res.clearCookie(SESS_NAME);
  res.status(200).json({
    success: true,
    message: 'cleared cookie',
  });
}

/**
 * resetCSRPassword Controller Action
 * @param {*} req
 * @param {*} res
 */
function resetCSRPassword(req, res) {
  service.appService.resetCSRPassword(req.body).then(
    (response) => {
      res.json(response);
    },
    (error) => {
      if (error && error.status) {
        res.status(error.status);
      }
      res.json({ err: error });
    },
  );
}

function authenticateCCBUserV2Reset(req, res) {
  service.appService.authenticateCCBUserV2Reset(req.body).then(
    (response) => {
      res.json(response);
    },
    (error) => {
      if (error && error.status) {
        res.status(error.status);
      }
      res.json({ err: error });
    },
  );
}

/**
 * setForgotUserPassword Controller Action
 * @param {*} req
 * @param {*} res
 */
function forgotCSRUserPassword(req, res) {
  // service.appService
  //   .apiRequest(req.session.tokens, req.body, 'forgotCSRUserPassword')
  //   .then(
  //     (response) => {
  //       res.json(response);
  //     },
  //     (err) => {
  //       if (err.status == 401) {
  //         service.serviceHelper.refreshToken(req, res, req.session.tokens);
  //       } else {
  //         res.json({ error: err });
  //       }
  //     },
  //   );
  service.appService.forgotCSRUserPassword(req.body).then(
    (response) => {
      res.json(response);
    },
    (error) => {
      if (error && error.status) {
        res.status(error.status);
      }
      res.json({ err: error });
    },
  );
}

function loadMasterData(req, res) {
  const { type } = req.query;
  const responseData = {};
  client
    .get(type)
    .then((value) => {
      if (value === null) {
        responseData.masterData = [];
        return res.status(200).json(responseData);
      } else {
        responseData.masterData = value;
        return res.status(200).json(responseData);
      }
    })
    .catch((err) => {
      console.log('Error in loadMasterData Controller', err);
      return res.status(418).json({
        err: 'Error in Controller',
        masterData: [],
      });
    });
}

function loadAddressMuncipalityData(req, res) {
  try {
    const responseData = {};
    responseData.masterData = JSON.stringify(addressMasterData);
    return res.status(200).json(responseData);
  } catch (error) {
    res.status(418).json({
      reason: 'Error while loading ',
      masterData: [],
    });
  }
}

appController.Authenticate = Authenticate;
appController.Logout = Logout;
appController.getChannelPartners = getChannelPartners;
appController.marketArea = marketArea;
appController.getCompleteAccountDetails = getCompleteAccountDetails;
appController.getConfigurationData = getConfigurationData;
appController.getLatestCatalogue = getLatestCatalogue;
appController.getPkgsAndProdsWithPromosV2 = getPkgsAndProdsWithPromosV2;
appController.searchProductsAndPackages = searchProductsAndPackages;
appController.getUserPermissions = getUserPermissions;
appController.loadUserToken = loadUserToken;
appController.refreshSession = refreshSession;
appController.clearSidCookie = clearSidCookie;
appController.resetCSRPassword = resetCSRPassword;
appController.authenticateCCBUserV2Reset = authenticateCCBUserV2Reset;
appController.forgotCSRUserPassword = forgotCSRUserPassword;
appController.loadMasterData = loadMasterData;
appController.loadAddressMuncipalityData = loadAddressMuncipalityData;

module.exports = appController;
