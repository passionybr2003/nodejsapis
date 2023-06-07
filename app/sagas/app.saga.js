import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { appConstants } from '../constants';
import appActions from '../actions/app.actions';

export function* getConfigurationData(payload) {
  const requestOptions = {
    url: 'app/getConfigurationDataV1',
    method: 'POST',
    body: {
      GetConfigurationDataRequest: {
        channelPartnerID: payload.buId,
        module: payload.module,
      },
    },
  };

  try {
    const data = yield call(request, requestOptions);
    if (data.GetConfigurationDataResponse.responseCode === '1') {
      const responseData = data.GetConfigurationDataResponse;
      delete responseData.responseCode;
      delete responseData.status;
      yield put(appActions.congigurationDataLoaded(responseData));
    } else {
      yield put(appActions.configurationDataLoadingError());
    }
  } catch (err) {
    yield put(appActions.configurationDataLoadingError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appsaga() {
  // yield [
  //   takeLatest(appConstants.LOAD_CONFIGURATION_DATA, getConfigurationData),
  //   takeLatest(appConstants.BU_AND_AREAS_LIST, getBUAndMarketAreasList),
  //   takeLatest(appConstants.USER_LOGIN_ROLE_PERMISSIONS, getUserPermissions),
  // ];
  yield takeLatest(appConstants.LOAD_CONFIGURATION_DATA, getConfigurationData);
  // yield takeLatest(appConstants.BU_AND_AREAS_LIST, getBUAndMarketAreasList);
}
