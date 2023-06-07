import React, { useEffect, useState, memo } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from 'helpers';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import routes from 'routes';
import UserContext from 'context/UserContext';
import { appActions } from 'actions';
import axios from 'axios';
import { useInjectSaga } from 'utils/injectSaga';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ToastAlert from 'components/Alert/Alert';
// import appConfig from 'config';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import evergentTheme from 'themes/evergentTheme.json';
//import 'react-s-alert/dist/s-alert-default.css';
// import saga from 'sagas';

// optional - you can choose the effect you want
import { getTheme, getLoaderStatus } from 'selectors';
import { Header } from '../../Header';

const key = 'app';

function App({ showLoading, theming, loaderStatus }) {
  // const showLoader = props.app.showLoading;
  // useInjectSaga({ key, saga });

  const showLoader = loaderStatus;
  // const [showLoader, setShowLoader] = useState(true);
  const [userData, setUserData] = useState({
    sessionData: {},
    buSelectionData: JSON.parse(localStorage.getItem('selectedBUData')) || {},
  });
  const [currentLang, setCurrentLang] = useState('en');
  let theme;

  useEffect(() => {
    (async () => {
      axios.interceptors.request.use(
        (config) => {
          if (typeof config.hideLoader === 'undefined') {
            showLoading(true);
          }

          // if(config && config.url && (config.url=='/isCustomerEligibleForFreeTrial' 
          // || config.url=='/getPaymentMethods' 
          // || config.url=='/getProrate' 
          // )){
          //   showLoading(true);
          // }

          // sendLogsRequestResponseLogsToServer(config, 'Request');
          return config;
        },
        (error) => Promise.reject(error),
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => {
          //showLoading(false);
          let haveActiveCard = false;
          if (response?.data?.GetPaymentMethodsResponseMessage?.responseCode
            && response.data.GetPaymentMethodsResponseMessage.responseCode == "1"
            && response?.data?.GetPaymentMethodsResponseMessage?.PaymentMethods) {
            const cardsList = response.data.GetPaymentMethodsResponseMessage.PaymentMethods;
            if (Array.isArray(cardsList) && cardsList.length) {
              // array exists and is not empty
              cardsList.map((item) => {
                if (
                  item.status &&
                  item.status == 'Active' &&
                  item.label == 'Card' &&
                  item.isAutoPayment === true
                ) {
                  if (item.CardInfoMessage)
                    haveActiveCard = true;
                }
              });
            }
          }
          // console.log("app response.data", response.data);
          // console.log("app haveActiveCard", haveActiveCard);
          if (!(
            //(response?.data && response.data == "OK") ||
            response?.data?.GetPkgsAndProdsWithPromosResponseMessage
            || response?.data?.PaymentModesResponseMessage
            || response?.data?.SearchAccountResponseMessage
            || response?.data?.CreateUserResponseMessage
            || (response?.data?.FreeTrialResponseMessage && response?.data?.loaderFlag)
            || (response?.data?.GetPaymentMethodsResponseMessage && (!haveActiveCard || response?.data?.loaderFlag))
            || (response?.data?.GetVoucherDetailsResponseMessage && response?.data?.loaderFlag)
            || (response?.data?.FraudPreventionCheckResponse && response?.data?.FraudPreventionCheckResponse?.responseCode && response.data.FraudPreventionCheckResponse.responseCode == 1)
            || (response?.data?.data && response?.data?.decrypt && response?.data?.loaderFlag)
            || response?.data?.UpdatePaymentInfoResponseMessage
            || (response?.data?.message && response.data.message == "Payment was updated successfully.")
          )) {
            // console.log("stopping loader-1");
            showLoading(false);
          }
          //for manage-payment without saved card
          if (response?.data?.GetPaymentMethodsResponseMessage && !response?.data?.loaderFlag) {
            // console.log("stopping loader-2");
            showLoading(false);
          }
          return response;
        },
        (error) => {
          // Do something with response error
          //showLoading(false);
          return Promise.reject(error);
        },
      );
    })();
  }, []);

  // useEffect(() => {
  //   const lang = localStorage.getItem('userSelectedLanguage');
  //   if (lang) {
  //     setCurrentLang(lang);
  //   }
  // }, [localStorage.getItem('userSelectedLanguage')]);

  // useEffect(() => {
  //   window.addEventListener('storage', () => {
  //     if (localStorage.getItem('user') == null) {
  //       localStorage.clear();
  //       sessionStorage.clear();
  //       history.push('/login');
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 100);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener('storage', () => { });
  //   };
  // }, [localStorage.getItem('user'), localStorage.getItem('okta-token-storage'), localStorage.getItem('okta-cache-storage')]);

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };
  const root = document.documentElement;
  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
  const hexVal = (hex) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `${r},${g},${b}`;
  };

  if (
    theming.theme.primary &&
    theming.theme.secondary &&
    theming.theme.tertiary
  ) {
    evergentTheme.palette.primary = {
      main: theming.theme.primary,
      dark: theming.theme.primary,
      light: theming.theme.primary,
    };
    evergentTheme.palette.secondary = {
      main: theming.theme.secondary,
      dark: theming.theme.secondary,
      light: theming.theme.secondary,
    };
    evergentTheme.primary = theming.theme.primary;

    evergentTheme.secondary = theming.theme.secondary;
    evergentTheme.tertiary = theming.theme.tertiary;

    root.style.setProperty(
      '--themeprimarycolor',
      hex2rgba(theming.theme.primary),
    );
    root.style.setProperty(
      '--themeprimarycolorRGB',
      hexVal(theming.theme.primary),
    );
    root.style.setProperty(
      '--themesecondarycolor',
      hex2rgba(theming.theme.secondary),
    );
    root.style.setProperty(
      '--themesecondarycolorRGB',
      hexVal(theming.theme.secondary),
    );
    root.style.setProperty(
      '--themetertiarycolor',
      hex2rgba(theming.theme.tertiary),
    );
    root.style.setProperty(
      '--themetertiarycolorRGB',
      hexVal(theming.theme.tertiary),
    );

    theme = createMuiTheme(evergentTheme);
    theme.primaryRGB = hexVal(theming.theme.primary);
    theme.secondaryRGB = hexVal(theming.theme.secondary);
    theme.tertiaryRGB = hexVal(theming.theme.tertiary);
  } else {
    theme = createMuiTheme(evergentTheme);
    theme.primaryRGB = hexVal(theming.theme.primary);
    theme.secondaryRGB = hexVal(theming.theme.secondary);
    theme.tertiaryRGB = hexVal(theming.theme.tertiary);
  }
  return (
    <MuiThemeProvider theme={theme}>
      <UserContext.Provider
        value={{
          userData,
          updateUserData,
          setUserData,
          currentLang,
          setCurrentLang
        }}
      >
        <div className="wrap d-flex h-100">
          {showLoader && <Loader />}
          <ToastAlert />
          <Header />
          <Router history={history}>
            <Route>{routes}</Route>
          </Router>
        </div>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
}
const mapStateToProps = createStructuredSelector({
  theming: getTheme(),
  loaderStatus: getLoaderStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  showLoading: (isLoading) => {
    dispatch(appActions.showLoader(isLoading));
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(App);
