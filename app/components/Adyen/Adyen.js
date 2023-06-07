/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

// import LinearProgress from '@material-ui/core/LinearProgress';
import './style.scss';
import CardList from './CardList';

function Adyen(props) {
  React.useEffect(() => {
    init();
  }, []);

  const init = () => {};

  const getAvailableCards = () => {};

  const addnewCard = () => {};

  const addSubscription = () => {};

  return (
    <>
      <CardList></CardList>
    </>
  );
}

Adyen.propTypes = {
  classes: PropTypes.object.isRequired,
};

Adyen.defaultProps = {
  url: '',
  accessToken: '',
  clientId: '',
};

export default withStyles(styles)(Adyen);
