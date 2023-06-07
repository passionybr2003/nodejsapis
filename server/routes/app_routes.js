const express = require('express');
const controller = require('../controllers/v1');

const router = express.Router();

router.route('/authenticate').post(controller.app_controller.Authenticate);
router.route('/logout').post(controller.app_controller.Logout);
router
  .route('/getChannelPartners')
  .post(controller.app_controller.getChannelPartners);
router.route('/getMarketArea').post(controller.app_controller.marketArea);

// common api call for csr and cc
router
  .route('/getCompleteAccountDetailsV1')
  .post(controller.app_controller.getCompleteAccountDetails);
router
  .route('/getConfigurationDataV1')
  .post(controller.app_controller.getConfigurationData);

router
  .route('/loadLatestCatalogue')
  .post(controller.app_controller.getLatestCatalogue);
router
  .route('/loadPkgsAndProdsWithPromosV2')
  .post(controller.app_controller.getPkgsAndProdsWithPromosV2);
router
  .route('/searchPackagesAndProducts')
  .post(controller.app_controller.searchProductsAndPackages);
router
  .route('/getUserPermissions')
  .post(controller.app_controller.getUserPermissions);
router.route('/loadUserToken').post(controller.app_controller.loadUserToken);
router.route('/refreshSession').post(controller.app_controller.refreshSession);
router.route('/clearCookie').post(controller.app_controller.clearSidCookie);
router
  .route('/resetCSRPassword')
  .post(controller.app_controller.resetCSRPassword);
router
  .route('/authenticateCCBUserV2Reset')
  .post(controller.app_controller.authenticateCCBUserV2Reset);
router
  .route('/forgotCSRUserPassword')
  .post(controller.app_controller.forgotCSRUserPassword);
router
  .route('/loadMasterData')
  .get(controller.app_controller.loadMasterData);
router
  .route('/loadAddressMuncipalityData')
  .get(controller.app_controller.loadAddressMuncipalityData);

module.exports = router;
