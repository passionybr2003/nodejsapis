import React from 'react';
import { Typography, Link, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: '11px',
    cursor: 'pointer',
    fontWeight: 400,
    color: theme.textColor,
  },
  typography: {
    fontSize: '11px',
    cursor: 'default',
    fontWeight: 400,
    color: theme.textColor,
  },
  separator: {
    margin: '2px',
    color: 'red',
  },
}));

const EVBreadcrumbs = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { history } = props;

  return (
    <Breadcrumbs separator={props.separator} aria-label="breadcrumb">
      {props.showDefaultBasecrumb && (
        <Link
          onClick={() => history.push(props.rootPath)}
          className={classes.link}
        >
          {t(`${props.rootBreadCrumb}`)}
        </Link>
      )}

      {props.routeProperties.map((eachObject) => {
        const navigateTo = eachObject.navigateTo || '/';
        const routeLabelInUI = t(eachObject.routeLabel) || t('HOME');
        const functionOnClick = eachObject.functionOnClick || false;

        return eachObject.nonClickable ? (
          <Typography className={classes.typography}>
            {routeLabelInUI}
          </Typography>
        ) : (
          <Link
            // key={currentIndex}
            className={classes.link}
            onClick={() => {
              if (functionOnClick) {
                functionOnClick();
              } else {
                history.push(navigateTo);
              }
            }}
          >
            {routeLabelInUI}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

EVBreadcrumbs.defaultProps = {
  showDefaultBasecrumb: true,
  rootBreadCrumb: 'HOME',
  rootPath: '/',
  separator: '/',
};

EVBreadcrumbs.propTypes = {
  showDefaultBasecrumb: PropTypes.bool,
  rootBreadCrumb: PropTypes.string,
  rootPath: PropTypes.string,
  separator: PropTypes.string,
};

export default withRouter(EVBreadcrumbs);
