/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  indicator: {
    left: 0,
    height: 3,
  },

  noIndicator: {
    display: 'none',
  },
}));

function EVTabs(props) {
  const classes = useStyles();
  function handleChange(event, newValue) {
    props.updateActiveTab(newValue);
  }

  const tabs = (
    <Tabs
      value={props.activeTab}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      // variant="fullWidth"
      variant="scrollable"
      scrollButtons="on"
      className={`tab-content-menu ${
        props.customClass ? props.customClass : ''
      }`}
      classes={{
        indicator: props.noIndicator ? classes.noIndicator : classes.indicator,
      }}
      // centered
    >
      {props.tabData.map((elem, idx) => (
        <Tab
          className="tab-content-nav"
          label={elem.label}
          value={elem.name}
          disabled={elem.disabled}
          key={idx}
          disableRipple
        />
      ))}
    </Tabs>
  );
  const tabContent = props.tabData.map((elem) => (
    <div key={elem.name} className="tab-content-lists">
      {props.activeTab == elem.name && (
        <TabContainer>{elem.value}</TabContainer>
      )}
    </div>
  ));

  return (
    <React.Fragment>
      {tabs}
      {tabContent}
    </React.Fragment>
  );
}

export default EVTabs;
