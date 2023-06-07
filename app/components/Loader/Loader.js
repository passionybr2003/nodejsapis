/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Loader() {
  return (
    <div className="page_loader">
      <img src={require('images/loader.gif')} width="48" height="48" />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
