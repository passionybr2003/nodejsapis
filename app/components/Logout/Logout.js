/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { authActions } from 'actions';
import { connect } from 'react-redux';
import UserContext from 'context/UserContext';
import './style.scss';

// eslint-disable-next-line react/display-name
const withContext = (Component) => (props) => (
  <UserContext.Consumer>
    {(context) => <Component {...props} context={context} />}
  </UserContext.Consumer>
);

const Logout = (props) => {
  const handelClick = () => {
    props.context.setUserData({
      sessionData: {},
      buSelectionData: {},
    });
    props.logout();
  };

  return (
    <React.Fragment>
      <span className="logout_btn" color="link" onClick={handelClick}>
        {props.Icon ? (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M505.664,243.739l-54.783-38.622c-9.926-6.997-23.645,0.128-23.645,12.26v23.622H164.196c-8.284,0-15.001,6.716-15.001,15.001S155.912,271,164.196,271h263.038v23.621c0,12.212,13.792,19.204,23.644,12.26l54.783-38.622C514.027,262.365,514.196,249.767,505.664,243.739z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M430.471,352.317c-7.169-4.146-16.347-1.698-20.496,5.474c-35.236,60.916-101.103,101.811-176.372,101.811c-112.266,0-203.602-91.336-203.602-203.602S121.337,52.398,233.603,52.398c75.319,0,141.156,40.933,176.371,101.809c4.148,7.172,13.328,9.619,20.496,5.474c7.171-4.148,9.621-13.325,5.474-20.496C395.418,69.127,319.729,22.397,233.603,22.397C104.49,22.397,0,126.876,0,256c0,129.113,104.479,233.603,233.603,233.603c86.163,0,161.833-46.763,202.342-116.79C440.092,365.642,437.642,356.466,430.471,352.317z" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        ) : (
          'Logout'
        )}
      </span>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  },
});

export default connect(null, mapDispatchToProps)(withContext(Logout));
