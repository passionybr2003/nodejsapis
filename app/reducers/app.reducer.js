/* eslint-disable no-multi-spaces */
import produce from 'immer';
import { appConstants } from '../constants';

export const initialState = {
  showLoading: false,
  navigateDashboard: true,
  theme: {
    primary: '#00A6FF',
    secondary: '#000000',
    tertiary: '#f6f6fa',
    sideMenuBackground: '#000000',
    sideMenuIconsColor: '#ffffff',
  },
  status: '',
};
const app = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case appConstants.LOADER_SHOW:
        draft.showLoading = action.showLoading;
        break;
      case appConstants.LOADER_HIDE:
        draft.showLoading = action.showLoading;
        break;
      
      default:
        break;
    }
  });
export default app;
