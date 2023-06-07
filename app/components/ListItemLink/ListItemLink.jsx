import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    menuListLi: {
      color: theme.sideMenuIconsColor,
      paddingTop: '12px',
      paddingBottom: '12px',
      paddingLeft: '17px',
      '& span': {
        color: theme.sideMenuIconsColor,
        fontSize: '13px',
      },
      '& svg': {
        color: theme.sideMenuIconsColor,
        fontSize: '20px',
      },
      '& i': {
        color: theme.sideMenuIconsColor,
        fontSize: '20px',
      },
      '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.tertiary,
        '& svg': {
          '& rect': {
            fill: theme.tertiary,
          },
        },
        '& i': {
          color: theme.tertiary,
        },
        '& span': {
          color: theme.tertiary,
        },
      },
    },
    active: {
      background: theme.palette.primary.dark,
      color: theme.tertiary,
      '& i': {
        color: theme.tertiary,
      },
      '& span': {
        color: theme.tertiary,
      },
      '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.tertiary,
        '& i': {
          color: theme.tertiary,
        },
      },
    },
    listIcon: {
      minWidth: '38px',
      alignItems: 'center',
      display: 'flex',
      lineHeight: '18px',
    },
  }),
);
const ListItemLink = (props) => {
  const classes = useStyles();
  const {
    icon, label, to, menuOpen, config
  } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );
  return (
    <ListItem
      className={`${classes.menuListLi} ${
        props.label === config.matchWith ? classes.active : ''
      }`}
      button
      key={label}
      component={renderLink}
    >
      <ListItemIcon className={classes.listIcon}>
        {menuOpen ? (
          <i className={icon}></i>
        ) : (
          <i className={icon}></i>
          //    <Tooltip title={label} placement="right" arrow>
          //    <i className={icon}></i>
          //  </Tooltip>
        )}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};
export default ListItemLink;
