import React, { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  indicator: {
    left: 0,
    width: 4,
  },
}));

function EVVerticalTabs(props) {
  const classes = useStyles();
  function handleChange(event, newValue) {
    props.updateActiveTab(newValue);
  }
  const toggle = props.defaultToggle ? props.defaultToggle : false;
  const [showVerticalTab, setShowVerticalTab] = useState(toggle);

  const toggleTab = () => {
    setShowVerticalTab(!showVerticalTab);
  };

  const tabs = (
    <Tabs
      value={props.activeTab}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="primary"
      variant="scrollable"
      className="tab-content-menu vTab-content-menu"
      // centered
      orientation="vertical"
      classes={{
        indicator: classes.indicator,
      }}
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
  const tabContent = props.tabData.map((elem, idx) => (
    <div key={idx} className="tab-content-lists vTab-content-list">
      {props.activeTab === elem.name && (
        <TabContainer>{elem.value}</TabContainer>
      )}
    </div>
  ));

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>
          {!showVerticalTab && (
            <Grid item md={2}>
              {tabs}
            </Grid>
          )}
          {/* className="transEffect" */}
          <Grid
            item
            md={!showVerticalTab ? 10 : 12}
            className={`${showVerticalTab ? 'transEffect' : ''}`}
          >
            {tabContent}
          </Grid>
        </Grid>
        {/* {!showVerticalTab && (
          <div onClick={(e) => { toggleTab(true); }} className="arrowRotate tabsArrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
              <path id="path" d="M15,8.813H6.613l3.85-3.85L9.5,4,4,9.5,9.5,15l.962-.963-3.85-3.85H15V8.813Z" transform="translate(-4 -4)" fill="#275682" fillRule="evenodd" />
            </svg>
          </div>
        )} */}
      </div>
      {props.toggleEnabled && (
        <Link
          onClick={() => {
            toggleTab();
          }}
          className={`vTabArrow ${showVerticalTab ? 'tabArrowRotated' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
          >
            <path
              id="path"
              d="M15,8.813H6.613l3.85-3.85L9.5,4,4,9.5,9.5,15l.962-.963-3.85-3.85H15V8.813Z"
              transform="translate(-4 -4)"
              fill="#275682"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </React.Fragment>
  );
}

export default EVVerticalTabs;
