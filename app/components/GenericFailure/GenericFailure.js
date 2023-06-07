/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Link, Button } from '@material-ui/core';
import EvergentLogo from 'images/Evergent-logo.svg';
import GenericFailureImage from 'images/generic_failure.png';
import { history } from 'helpers';
import './style.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function GenericFailure() {
  const navigateBack = () => {
    history.push('/login');
  };
  return (
    <React.Fragment>
      <div className="sign_wrapper">
        <div className="container">
          <Grid container spacing={3} className="sign_wrapper_in pb-0">
            <Grid item xs={12}>
              <Grid container spacing={3} className="sign_header">
                <Grid item sm={12}>
                  <div className="sign_logo">
                    <Link component={RouterLink} to="/">
                      <img src={EvergentLogo} width="160" alt="EvergentLogo" />
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} className="sign_body generic_content">
                <Grid item xs={6}>
                  <img
                    src={GenericFailureImage}
                    alt="GenericFailure"
                    className="img_error"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography className="" variant="h1" color="primary">
                    Generic Failure
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Oops! Something went wrong
                  </Typography>
                  <Button
                    onClick={navigateBack}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    className="btn large"
                  >
                    Home
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

GenericFailure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericFailure);
