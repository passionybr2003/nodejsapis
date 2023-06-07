/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'ErrorBoundary';
import FontFaceObserver from 'fontfaceobserver';

import { CssBaseline } from '@material-ui/core';
// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'styles/global-styles.scss';

import 'sanitize.css/sanitize.css';

// Import root app
import App from './components/App';

import configureStore from './store';
// import dummyTheme1 from './themes/dummyTheme1.json';
import './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
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
// Create redux store with history
const initialState = {};
// const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <CssBaseline>
          <React.Suspense fallback="loading...">
            <App />
          </React.Suspense>
        </CssBaseline>
      </Provider>
    </ErrorBoundary>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['components/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
