import { appConstants } from '../constants';

function showLoader(showLoading) {
  if (showLoading === true) {
    return { type: appConstants.LOADER_SHOW, showLoading };
  } else {
    return { type: appConstants.LOADER_HIDE, showLoading };
  }
}

function hideLoader(showLoading) {
  return { type: appConstants.LOADER_HIDE, showLoading };
}



const appActions = {
  showLoader,
  hideLoader
};
export default appActions;
