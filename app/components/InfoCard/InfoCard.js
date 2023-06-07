/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import EditIcon from 'images/edit-icon.svg';
import isEmpty from 'lodash/isEmpty';
import './style.scss';

function InfoCard(props) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (!isEmpty(props.data)) {
      setLoader(false);
    }
  }, [props.data]);

  return (
    <Grid className="payment-info-blk">
      <Typography variant="h6" className="head_title">
        {props.title}
        {props.edit ? (
          <Button
            variant="outlined"
            color="secondary"
            className="head_title_btn"
          >
            <img src={EditIcon} alt="Edit" width="18" />
          </Button>
        ) : (
          ''
        )}
      </Typography>
      <Grid
        container
        className={`payment-info-blk-cont ${
          props.BgTheme ? props.BgTheme : '#f2f2f2'
        }`}
      >
        {props.data.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="payment-info-blk-cont-item"
          >
            <h6>{item.lable}</h6>
            {/* <p>{item.value ? item.value : '--'}</p> */}
            {loader ? (
              <Grid className="template"></Grid>
            ) : (
              <p>{item.value ? item.value : '--'}</p>
            )}
            {/* {loader === 'true' ? 'aa' : (<p>{item.value ? item.value : <Grid className="template"></Grid>}</p>)} */}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
export default InfoCard;
