import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import cloneDeep from 'lodash/cloneDeep';
import filter from 'lodash/filter';
import has from 'lodash/has';
import map from 'lodash/map';
import { initialState } from '../reducers/app.reducer';

const selectAppReducer = (state) => state.app || initialState;

const getAppStatus_selector = () =>
  createSelector(selectAppReducer, (appState) => appState.status);

export {
  getAppStatus_selector,
};
