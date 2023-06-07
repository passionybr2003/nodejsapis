import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';
import routes from './pathdata';

const useStyles = makeStyles((theme) => ({
  breadCrumb: {
    marginBottom: '10px',
    '& a, & span': {
      color: theme.palette.primary.main,
      fontSize: '12pt',
      opacity: '0.5',
      borderBottom: '1px solid rgba(39, 86, 130, 0.5)',
      position: 'relative',
      marginRight: '22px',
      '&:after': {
        content: '"/"',
        position: 'absolute',
        right: '-13px',
        top: 0,
        display: 'block',
      }
    },
    '& span': {
      '&:after': {
        display: 'none !important'
      }
    }
  },
}));


const findRouteName = (url) => routes[url];

const getPaths = (pathname) => {
  const paths = ['/'];
  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const BreadcrumbsItem = (props) => (
  findRouteName(props.match.url) ? 
                                  (props.match.isExact 
                                    ? 
                                     <span>{findRouteName(props.match.url)}</span>
                                    :
                                     <Link to={props.match.url || ''}> {findRouteName(props.match.url)} </Link>) 
                                 : 
                                  ''
  // eslint-disable-next-line no-nested-ternary
);


const Breadcrumbsdata = ({ location: { pathname } }) => {
  const paths = getPaths(pathname);
  return paths.map((path, index) => (
    <Route key={index} path={path} component={BreadcrumbsItem} />
  ));
};



// eslint-disable-next-line react/display-name
function SimpleBreadcrumbs(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.breadCrumb}>
      <Route path="/:path" component={Breadcrumbsdata} {...props} />
    </Grid>
  );
}

export default SimpleBreadcrumbs;
