import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link, Button } from '@material-ui/core';
import EditIcon from 'images/edit-icon.svg';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  simpleCard: {
    // background: '#f2f2f2',
    // cursor: 'pointer',
    background: `rgba(${theme.primaryRGB}, 0.1)`,
    padding: '8px 8px 12px 8px',
    borderRadius: '4px',
    position: 'relative',
    transition: 'all ease-in-out 0.1s',
    overflow: 'hidden',
    height: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    '&.editBlock': {
      paddingRight: '50px',
    },

    '&.secondary': {
      background: `rgba(${theme.secondaryRGB}, 0.1)`,

      '& span': {
        color: '#ffffff',
      },

      '& h5': {
        color: '#ffffff',
      },
    },

    '& > span': {
      fontSize: '8.25pt',
      color: theme.palette.primary.dark,
    },

    '& h5': {
      fontSize: '10.5pt',
      color: theme.palette.primary.dark,
      fontWeight: 700,
    },

    '& p': {
      fontSize: '8.25pt',
      color: theme.palette.primary.dark,
    },

    '& a': {
      fontSize: '9pt',
      color: theme.palette.secondary.dark,
      fontWeight: '600',
      textDecoration: 'none !important',
    },

    '&:hover': {
      '& > div': {
        right: 0,
      },
    },
  },

  editCard: {
    position: 'absolute',
    right: '-50px',
    top: 0,
    bottom: 0,
    width: '50px',
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
  },

  actionBtn: {
    height: '30px',
    fontSize: '18px',
    minWidth: 'inherit',
    padding: 0,
    width: '30px',
    color: '#fff',
    marginLeft: '9px',
  },
}));

function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Grid
      className={`${classes.simpleCard} ${
        props.BgTheme ? props.BgTheme : '#f2f2f2'
      }`}
    >
      <Typography variant="caption" gutterBottom>
        {props.caption}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {props.value}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {props.contact}
      </Typography>
      <Link>{props.action}</Link>
      {props.edit && (
        <Grid className={`${classes.editCard} rightAnimate`}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.actionBtn}
          >
            <img src={EditIcon} alt="Edit" width="18" />
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
export default SimpleCard;
