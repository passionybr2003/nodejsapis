import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'components/Layout';
import find from 'lodash/find';


const PrivateRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem('permissions')) {
    const permissions = find(
      JSON.parse(localStorage.getItem('permissions')),
      (o) => o.validLinkActionName == rest.name,
    );
    rest.permissions = permissions;
  }
  if (localStorage.getItem('user')) {
    rest.superUser = JSON.parse(localStorage.getItem('user')).superUser;
  }
  if (rest && !rest.orderInfo) {
    localStorage.removeItem('orderInfo');
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        (localStorage.getItem('user') ? (
          JSON.parse(localStorage.getItem('user')).superUser ||
          rest.name == 'global' ||
          find(
            JSON.parse(localStorage.getItem('permissions')),
            (o) => o.validLinkActionName == rest.name,
          ) ? (
            <Layout {...props} {...rest}>
              <Component {...props} {...rest} />
            </Layout>
          ) : (
            <Redirect
              to={{ pathname: '/dashboard', state: { from: props.location } }}
            />
          )
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        ))
      }
    />
  );
};

export default PrivateRoute;
