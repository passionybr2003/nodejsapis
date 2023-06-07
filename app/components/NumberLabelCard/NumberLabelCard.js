import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CloningProductIcon from 'images/cloningProduct-Icon.svg';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  numberLabelCard: {
    padding: '5px',
    height: '100%',
    width: '100%',
    border: '1px dashed #707070',
    background: '#fff',
    borderRadius: '4px',

    '& span': {
      fontSize: '21pt',
      lineHeight: '1',
      fontWeight: 600,
      marginBottom: '5px',
    },

    '& h5': {
      fontSize: '10pt',
      fontWeight: 400,
      color: theme.textColor,
      margin: 0,
    },
  },

  numberCardWrapper: {
    background: `rgba(${theme.primaryRGB}, 0.1)`,
    height: '100%',
  },

  numberLabelCardIn: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  cardIcon: {
    flexGrow: 0,
    maxWidth: '25px',
    flexBasis: '25px',
    boxSizing: 'border-box',

    '& svg': {
      width: '25px',
      color: theme.textColor,
    },
  },

  cardData: {
    flexGrow: 0,
    maxWidth: 'calc(100% - 35px)',
    flexBasis: 'calc(100% - 35px)',
    boxSizing: 'border-box',
  },
}));

function NumberLabelCard(props) {
  const classes = useStyles();
  return (
    <Grid className={`${classes.numberLabelCard} numberLabelCard`}>
      <Grid item xs={12} className={classes.numberCardWrapper}>
        <Grid className={classes.numberLabelCardIn}>
          <Grid className={classes.cardIcon}>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <path d="M24.48,26.85H15.11a2,2,0,0,1-2-2V8.08a2,2,0,0,1,2-2h9.37a2,2,0,0,1,2,2V24.87A2,2,0,0,1,24.48,26.85ZM15.11,7a1.05,1.05,0,0,0-1.06,1.06V24.87a1.06,1.06,0,0,0,1.06,1.06h9.37a1.07,1.07,0,0,0,1.06-1.06V8.08A1.06,1.06,0,0,0,24.48,7Z" />
              <path d="M18.35,8.79a1.16,1.16,0,0,1-1.1-1V6.89h.92v.83c0-.07.06.14.19.14h0c.53,0,3.34,0,3.54,0-.06,0,0-.05,0-.14V6.89h.92v.83A1,1,0,0,1,22,8.78H18.35Z" />
              <path d="M8.75,5.92a1.17,1.17,0,0,1-1.11-1V4h.92v.83c0-.06,0,.14.19.14h3.54c-.06,0,0,0,0-.14V4h.92v.83a1,1,0,0,1-.81,1.06H8.75Z" />
              <path d="M13.17,23.91H6.62c-2.8,0-2.88-2-2.88-2V5.55a2.34,2.34,0,0,1,.6-1.82,2.05,2.05,0,0,1,1.39-.58h9.36a2,2,0,0,1,2,1.95V6.2h-.92V5.13a1.1,1.1,0,0,0-1.08-1.06H5.72A1.14,1.14,0,0,0,5,4.38a1.51,1.51,0,0,0-.33,1.15V21.92c0,.1.12,1.06,2,1.06h6.55Z" />
              <path d="M19.72,16.48H12.84c-2,0-2.61-1.32-2.63-2V11.81h.92v2.64c0,.1.11,1.11,1.71,1.11h6.88Z" />
              <polygon points="18.44 18.24 17.79 17.59 19.3 16.07 17.8 14.57 18.46 13.92 20.61 16.07 18.44 18.24" />
            </svg>
          </Grid>
          <Grid className={classes.cardData}>
            <Typography variant="caption" display="block" gutterBottom>
              {props.value}
            </Typography>
            <Typography variant="h5" gutterBottom>
              #{props.label}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NumberLabelCard;
