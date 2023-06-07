import React from 'react';
import { SwipeableDrawer, Grid, Link, Typography } from '@material-ui/core';
import CategoriesList from 'containers/CategoriesList';
import { EVGoSelfCareSideMenu } from 'components/EVGo';
import BackArrow from 'images/go-back-arrow.svg';
import './style.scss';

function MenuSideBarEVGo(props) {
  return (
    <div>
      <SwipeableDrawer
        anchor={props.MenuDirection}
        open={props.MenuPosition}
        onClose={() => {
          props.MenutoggleDrawer('menuPosition', false);
        }}
        onOpen={() => {
          props.MenutoggleDrawer('menuPosition', true);
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          tabIndex={0}
          className={`sidemenu ${
            props.MenuDirection === 'left' ? 'sidebarLeft' : 'sidebarRight'
          }`}
          // onClick={() => { props.MenutoggleDrawer('menuPosition', true); }}
          onKeyDown={() => {
            props.MenutoggleDrawer('menuPosition', false);
          }}
        >
          <Grid item className="sidemenu_content">
            <Typography className="head_backnav" variant="h5">
              <Link
                className="back_nav"
                onClick={() => {
                  props.MenutoggleDrawer('menuLeft', false);
                }}
              >
                <img src={BackArrow} alt="back navigation" />
              </Link>
              Explore
            </Typography>
            <div className="menuSideBar">
              {props.login === 'user' ? (
                <EVGoSelfCareSideMenu props={props} />
              ) : (
                <div>
                  {props.config.flow == undefined ? (
                    <React.Fragment>
                      <Typography className="menuSubTitle" variant="h6">
                        Self Care
                      </Typography>
                      <EVGoSelfCareSideMenu props={props} />
                    </React.Fragment>
                  ) : null}

                  <Typography className="menuSubTitle mt-20" variant="h6">
                    CCB Admin
                  </Typography>
                  <CategoriesList props={props} />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </div>
  );
}

export default MenuSideBarEVGo;
