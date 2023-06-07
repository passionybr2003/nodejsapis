import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss';

const EVTabDefaultTemplate = () => (
  <div className="templateLoad">
    <Grid container direction="row" spacing={2} justify="flex-start" alignItems="center">
      <Grid item>
        <div className="square"></div>
      </Grid>
      <Grid item>
        <div className="textContent"></div>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="content"></div>
      </Grid>
    </Grid>
  </div>
);
export default EVTabDefaultTemplate;
