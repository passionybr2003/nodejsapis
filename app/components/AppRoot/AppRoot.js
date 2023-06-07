import * as React from 'react';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'ErrorBoundary';
import configureStore from '../../store';
import FontFaceObserver from 'fontfaceobserver';
import { CssBaseline } from '@material-ui/core';
import App from '../App';
import { history } from 'helpers';
import 'styles/global-styles.scss';

import 'sanitize.css/sanitize.css';
import '../../i18n';

const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add('fontLoaded');
  },
  () => {
    document.body.classList.remove('fontLoaded');
  },
);

const initialState = {};
// const history = createHistory();
const store = configureStore(initialState, history);

const AppRoot = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>
  </ErrorBoundary>
);

export default AppRoot;
