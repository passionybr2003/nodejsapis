import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  ActiveproductItem: {
    background: '#f2f2f2',
    padding: '15px 10px 10px',
    borderRadius: '5px',
  },
  ActiveproductTitle: {
    color: theme.palette.primary.dark,
    marginBottom: '15px',
    padding: '0 3px',
    fontSize: '10.5pt',
    fontWeight: 600,
  },
  ArrowIcon: {
    float: 'right',
    fontSize: '12pt',
    lineHeight: '16px'
  },
  ActiveproductItemProduct: {
    paddingBottom: '10px',
  },
  ActiveproductItemBlk: {
    color: theme.palette.primary.dark,
    margin: '6px 3px',
    fontSize: '12px',
    lineHeight: '16px',
    background: '#fff',
    padding: '6px 10px',
    borderRadius: '5px',
    display: 'inline-block',
  }
}));

function SimpleListCard(props) {
  const classes = useStyles();
  return (
    // className={`${classes.simpleCard} ${props.BgTheme ? props.BgTheme : '#f2f2f2'}`}
    <Grid className={`activeproduct-item ${props.BgTheme ? props.BgTheme : '#f2f2f2'}`}>
      <Typography variant="h5" className="activeproduct_title" >
        {props.title}
        {props.ShowMore &&
          <span className="arrow-icon">
            <ArrowDropDown />
          </span>
        }
      </Typography>
      <Grid className={'activeproduct-item-product'}>
        {props.data.map((data) => (
          <span key={data} className="activeproduct-item-blk ">{data}</span>
        ))}
        <Button variant="outlined" color="secondary" className="activeproduct-sm-btn" >
          <MoreHoriz />
        </Button>
      </Grid>
    </Grid>
  );
}
export default SimpleListCard;
