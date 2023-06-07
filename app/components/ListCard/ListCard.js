import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import EditIcon from 'images/edit-icon.svg';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  listCard: {
    padding: '11px 14px',
    position: 'relative',
    transition: 'all ease-in-out 0.1s',
    overflow: 'hidden',
    height: '100%',

    '&.editBlock': {
      paddingRight: '50px',
    },

    '& span': {
      fontSize: '9pt',
      letterSpacing: '1.2px',
      color: theme.palette.primary.dark,
      fontWeight: 400,
    },

    '& h5': {
      fontSize: '10.5pt',
      fontWeight: 600,
      color: theme.palette.primary.dark,
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

    '& span': {
      color: '#fff',
    },
  },
}));

function ListCard(props) {
  const classes = useStyles();
  return (
    <Grid
      className={`${classes.listCard} listCard ${props.BgTheme &&
        props.BgTheme}`}
    >
      <Typography variant="caption" display="block" gutterBottom>
        {/* Using replace temporarily to display date in YYYY/mm/DD format - Refer to 990 ticket */}
        {props.date && (
          <span>
            Start Date:{' '}
            {props.date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, '$3/$1/$2')}
          </span>
        )}
        {props.caption && `${props.caption}`}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {props.discription}
      </Typography>
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

export default ListCard;
