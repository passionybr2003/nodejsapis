/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Grid,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import EvergentFavicon from 'images/Evergent-icon.svg';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListItemLink from 'components/ListItemLink';
import MenuSideBar from 'components/MenuSideBar';
import { useWindowDimensions } from 'customHooks';
import cloneDeep from 'lodash/cloneDeep';
// import EvergentLogo from 'images/EVlogo_white.png';
import './style.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'initial',
    width: theme.spacing(5) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
    border: 'none',
  },
  BackNav: {
    marginLeft: '5px',
    '& button': {
      '& svg': {
        fontSize: '18px',
        color: theme.sideMenuIconsColor,
        '& path': {
          fill: theme.sideMenuIconsColor,
        },
      },
    },
  },
  moreToolbar: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: '0',
    width: '100%',
    flexDirection: 'column',
    ...theme.mixins.toolbar,
    minHeight: 'inherit !important',
    '& button': {
      color: '#fff',
      '& svg': {
        fontSize: '22px',
      },
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MenuWrapperMain: {
    padding: '10px',
  },
  drawerPaper: {
    background: theme.sideMenuBackground,
    left: 0,
    top: 0,
    // borderRadius: '4px',
    height: '100%',
    border: 'none',
    '& svg': {
      color: theme.sideMenuIconsColor,
      fontSize: '22px',
      '& rect': {
        fill: theme.sideMenuIconsColor,
      },
      '&:hover': {
        '& rect': {
          // fill: theme.palette.secondary.dark,
        },
      },
    },
  },
  drawerPaperWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    overflowX: 'hidden',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    height: '100%',
    boxShadow: '0 0px 5px 0px rgba(0,0,0,0.1)',
    // flexDirection: 'column'
  },
  menuList: {
    padding: 0,
    width: '100%',
  },
  menuListLi: {
    // color: theme.palette.primary.dark,
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '14px !important',
    '& svg': {
      color: theme.sideMenuIconsColor,
      fontSize: '18px',
    },
    '& i': {
      color: theme.sideMenuIconsColor,
      fontSize: '20px',
    },
  },
  animateRight: {
    alignSelf: 'flex-end',
    // marginRight: '5px'
    margin: 0,
  },
  menuListMain: {
    width: '100%',
  },
  drawerOverlay: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  moreDropDown: {
    '& button': {
      minWidth: '57px',
    },
  },
  slideToggle: {
    position: 'absolute',
    right: '-15px',
    bottom: '20px',
    background: theme.palette.primary.dark,
    borderRadius: '100%',
    padding: '2px 1px',
    width: '30px',
    height: '30px',
    textAlign: 'right',
    lineHeight: '23px',
    '& button': {
      padding: 0,
      margin: '0 2px 0 0',
      width: '20px',
      height: '22px',
    },
  },
  close: {
    right: '0',
    textAlign: 'center',
    background: '#fff',
    borderRadius: '50% 0 0 50%',
    width: '25px',
    height: '25px',
    lineHeight: '20px',
    '& button': {
      marginRight: 0,
      marginLeft: '2px',
    },
    '& svg': {
      color: theme.sideMenuIconsColor,
    },
  },
  menuIcon: {
    '& > div': {
      paddingLeft: '12px',
      paddingRight: '12px',
    },
  },
  textColor: {
    '& span': {
      color: theme.tertiary,
    },
  },
  evlogo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

function MenuLeftSideBar(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const window_dimensions = useWindowDimensions();
  const [open, setOpen] = React.useState(false);
  const [collapseMenuList, setCollapseMenuList] = useState({
    data: [],
    more: [],
  });
  const [menuPosition, setMenuPosition] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const MenutoggleDrawer = (side, openMenuPosition) => {
    setMenuPosition(openMenuPosition);
  };

  /* const onSelectListHandler = (event, data) => {
    setOpen(false);
    props.activeTabHandler(data);
  }; */

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setLeftMenu = () => {
    const limit = parseInt((window_dimensions.height - 144) / 53, 10);
    const menuList = cloneDeep(props.menuList);

    setCollapseMenuList({
      data: menuList.slice(0, limit),
      more: menuList.slice(limit, menuList.length),
    });
  };

  useEffect(() => {
    setLeftMenu();
  }, [window_dimensions, props.headerType, props.menuList]);

  const MenuListData = () => {
    if (open) {
      return (
        <List className={classes.menuList}>
          {props.menuList &&
            props.menuList.map((data, mapIndex) => (
              <ListItemLink
                key={mapIndex}
                label={data.label}
                icon={data.icon}
                to={data.path}
                config={props.config}
              />
            ))}
        </List>
      );
    }
    return (
      <div>
        <List className={classes.menuList}>
          {collapseMenuList &&
            collapseMenuList.data.map((data, mapIndex) => (
              <ListItemLink
                key={mapIndex}
                label={data.label}
                icon={data.icon}
                to={data.path}
                menuOpen={open}
                active={data.active}
                config={props.config}
              />
            ))}
        </List>
        {collapseMenuList && collapseMenuList.more.length > 0 && (
          <Grid className={classes.moreDropDown}>
            <IconButton
              color="primary"
              className={classes.vertical}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              // onClose={handleClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'right',
                horizontal: 'top',
              }}
              {...props}
              PaperProps={{
                style: {
                  overflow: 'inherit',
                  boxShadow: '1px 1px 5px 0px rgba(77,77,77,1)',
                },
              }}
            >
              {collapseMenuList.more.map((option, index) => (
                <MenuItem
                  className="uiSelectOption"
                  key={index}
                  selected={option === 'Pyxis'}
                  onClick={handleClose}
                  component={RouterLink}
                  to={option.path}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        )}
      </div>
    );
  };
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.MenuWrapper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.drawerPaper]: open || !open,
          }),
        }}
      >
        <div className={classes.drawerPaperWrapper}>
          <Grid
            className={classes.menuListMain}
            onMouseEnter={!open ? handleDrawerToggle : null}
            onMouseLeave={open ? handleDrawerToggle : null}
          >
            <div className={classes.BackNav}>
              <IconButton
                onClick={() => {
                }}
                className={classes.evlogo}
              >
                {/* <ArrowBackIcon /> */}
                {/* <img src={EvergentFavicon} alt="Evergent" /> */}
                {/* <img src={EvergentLogo} alt="Evergent" width="150" /> */}
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="130.87"
                    height="24.075"
                    viewBox="0 0 159.87 36.805"
                  >
                    <g
                      id="Evergent-logo"
                      transform="translate(-82.023 -227.11)"
                    >
                      <g
                        id="Group_267"
                        data-name="Group 267"
                        transform="translate(62.023 229.11)"
                      >
                        <path
                          id="Path_21"
                          data-name="Path 21"
                          d="M91.752,238.924a10.615,10.615,0,0,0-20.686-2.462h-.56a8.486,8.486,0,0,0-.333,16.966,9.764,9.764,0,0,0,9.553,7.786h10.5a11.2,11.2,0,0,0,1.528-22.291Zm-1.528,18.842h-10.5a6.314,6.314,0,0,1-5.992-4.331h9.321a5.134,5.134,0,0,0,5.12-5.136,5.936,5.936,0,0,0-2.883-5.006,10.01,10.01,0,0,0-5.565-1.551A9.762,9.762,0,0,0,70.1,249.97a5.038,5.038,0,0,1,.406-10.059H74v-.191a7.17,7.17,0,0,1,14.339,0v2.544h1.886a7.616,7.616,0,0,1,1.562.16,7.75,7.75,0,0,1-1.562,15.342ZM73.6,249.986a6.319,6.319,0,0,1,6.125-4.795,6.525,6.525,0,0,1,3.719,1.008,2.525,2.525,0,0,1,1.3,2.1,1.687,1.687,0,0,1-1.687,1.687Z"
                          transform="translate(-62.023 -229.11)"
                          fill="#ffffff"
                        />
                      </g>
                      <g
                        id="Group_269"
                        data-name="Group 269"
                        transform="translate(109.176 237.327)"
                      >
                        <g id="Group_268" data-name="Group 268">
                          <path
                            id="Path_22"
                            data-name="Path 22"
                            d="M334.117,284.07h-1.91c-.414,0-.573.032-.732.509l-3.788,10.791-3.756-10.791c-.159-.478-.319-.509-.732-.509h-1.942c-.35,0-.764.032-.573.573L326,298.967c.223.509.35.6.764.6h1.878c.414,0,.541-.1.732-.6l5.316-14.325C334.881,284.1,334.468,284.07,334.117,284.07Z"
                            transform="translate(-305.891 -279.133)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_23"
                            data-name="Path 23"
                            d="M498.93,297.5h-4.488c-1.4,0-2.292-.764-2.292-1.942a1.949,1.949,0,0,1,.891-1.687,5.814,5.814,0,0,0,3.565,1.146,6.213,6.213,0,0,0,6.4-6.175l-.063-5.221c0-.477-.191-.668-.669-.668h-1.305c-.478,0-.636.159-.636.668v.541a5.511,5.511,0,0,0-3.884-1.56,6.2,6.2,0,0,0-6.3,6.207,6.569,6.569,0,0,0,.891,3.151,4.633,4.633,0,0,0-2.1,3.82,4.11,4.11,0,0,0,1.719,3.088,3.591,3.591,0,0,0-1.592,3.056c0,3.247,3.756,4.68,7.544,4.68,4.648,0,7.545-1.942,7.545-5.029C504.151,298.872,502.05,297.5,498.93,297.5Zm-2.547-11.778a3.112,3.112,0,1,1-2.8,3.311A2.955,2.955,0,0,1,496.384,285.726Zm.223,17.985c-1.974,0-4.266-.223-4.266-1.942,0-.923.6-1.432,1.942-1.432h4.584c1.369,0,2.005.509,2.005,1.464C500.872,303.488,498.58,303.711,496.607,303.711Z"
                            transform="translate(-433.908 -278.019)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_24"
                            data-name="Path 24"
                            d="M634.02,282.606a6.936,6.936,0,0,0-4.616,1.751v-.732c0-.477-.191-.668-.7-.668h-1.687c-.509,0-.669.191-.669.668V297.79c0,.477.159.668.669.668h1.91c.51,0,.669-.191.669-.668V287a5.709,5.709,0,0,1,3.6-1.56,3.245,3.245,0,0,1,3.438,3.406v8.945c0,.477.191.668.669.668h1.942c.478,0,.669-.191.669-.668v-9.677C639.909,284.771,637.3,282.606,634.02,282.606Z"
                            transform="translate(-538.434 -278.019)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_25"
                            data-name="Path 25"
                            d="M266.439,282.629c-4.43,0-7.407,3.2-7.407,7.955a7.97,7.97,0,0,0,2.119,5.815,7.866,7.866,0,0,0,5.7,2.078H271c.558,0,.785-.22.785-.761V296.24c0-.57-.22-.792-.785-.792h-4.141c-2.555-.01-4.1-1.219-4.155-3.254h6.964a3.115,3.115,0,0,0,2.694-1.3,5,5,0,0,0,.414-4.3A6.546,6.546,0,0,0,266.439,282.629Zm3.408,6.151a1.234,1.234,0,0,1-1.054.385h-6.084a3.79,3.79,0,0,1,3.762-3.475,3.617,3.617,0,0,1,3.439,2.01A1.306,1.306,0,0,1,269.847,288.78Z"
                            transform="translate(-259.032 -278.037)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_26"
                            data-name="Path 26"
                            d="M389.639,282.629c-4.43,0-7.407,3.2-7.407,7.955a7.97,7.97,0,0,0,2.119,5.815,7.866,7.866,0,0,0,5.7,2.078H394.2c.558,0,.786-.22.786-.761V296.24c0-.57-.221-.792-.786-.792h-4.141c-2.555-.01-4.1-1.219-4.155-3.254h6.964a3.115,3.115,0,0,0,2.694-1.3,5,5,0,0,0,.414-4.3A6.545,6.545,0,0,0,389.639,282.629Zm3.408,6.151a1.234,1.234,0,0,1-1.054.385h-6.084a3.79,3.79,0,0,1,3.762-3.475,3.618,3.618,0,0,1,3.439,2.01A1.309,1.309,0,0,1,393.047,288.78Z"
                            transform="translate(-352.745 -278.037)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_27"
                            data-name="Path 27"
                            d="M564.289,282.629c-4.43,0-7.407,3.2-7.407,7.955A7.97,7.97,0,0,0,559,296.4a7.866,7.866,0,0,0,5.7,2.078h4.151c.558,0,.786-.22.786-.761V296.24c0-.57-.22-.792-.786-.792h-4.141c-2.555-.01-4.1-1.219-4.155-3.254h6.964a3.115,3.115,0,0,0,2.694-1.3,5,5,0,0,0,.414-4.3A6.545,6.545,0,0,0,564.289,282.629Zm3.408,6.151a1.234,1.234,0,0,1-1.055.385h-6.084a3.79,3.79,0,0,1,3.762-3.475,3.618,3.618,0,0,1,3.439,2.01A1.308,1.308,0,0,1,567.7,288.78Z"
                            transform="translate(-485.594 -278.037)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_28"
                            data-name="Path 28"
                            d="M699.564,271.275c.509,0,.669-.191.669-.668v-1.56c0-.477-.159-.668-.669-.668h-3.185v-4.262c0-.482-.161-.675-.675-.675h-1.93c-.514,0-.675.193-.675.675v4.262h-1.558c-.477,0-.668.191-.668.668v1.56c0,.478.191.668.668.668H693.1v6.785c0,3.665,2.122,5.819,5.82,5.819h.611c.514,0,.675-.193.675-.675V281.6c0-.482-.161-.675-.643-.675h-.193a2.728,2.728,0,0,1-2.99-2.893v-6.752Z"
                            transform="translate(-587.515 -263.442)"
                            fill="#ffffff"
                          />
                          <path
                            id="Path_29"
                            data-name="Path 29"
                            d="M460.8,284.9v-1.62c0-.477-.159-.668-.668-.668l-.267,0a9.12,9.12,0,0,0-4.947,1.592v-.573c0-.477-.159-.668-.668-.668h-1.846c-.51,0-.669.191-.669.668V297.79c0,.477.159.668.669.668h1.91c.509,0,.668-.191.668-.668V287.063s.975-1.5,4.649-1.5l.5,0C460.643,285.565,460.8,285.374,460.8,284.9Z"
                            transform="translate(-405.614 -278.019)"
                            fill="#ffffff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    id="Group_267"
                    data-name="Group 267"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="23.075"
                    viewBox="0 0 28.32 23.075"
                  >
                    <path
                      id="Path_21"
                      data-name="Path 21"
                      d="M83.391,236.164a7.63,7.63,0,0,0-14.869-1.769h-.4a6.1,6.1,0,0,0-.239,12.194,7.018,7.018,0,0,0,6.867,5.6h7.545a8.048,8.048,0,0,0,1.1-16.021Zm-1.1,13.542H74.747a4.538,4.538,0,0,1-4.307-3.113h6.7a3.69,3.69,0,0,0,3.68-3.691,4.266,4.266,0,0,0-2.072-3.6,7.2,7.2,0,0,0-4-1.114,7.016,7.016,0,0,0-6.919,5.913,3.621,3.621,0,0,1,.292-7.23h2.51v-.137a5.153,5.153,0,0,1,10.306,0v1.829h1.356a5.476,5.476,0,0,1,1.123.115,5.57,5.57,0,0,1-1.123,11.026Zm-11.948-5.592a4.542,4.542,0,0,1,4.4-3.446,4.69,4.69,0,0,1,2.673.725,1.815,1.815,0,0,1,.932,1.509,1.213,1.213,0,0,1-1.213,1.212Z"
                      transform="translate(-62.023 -229.11)"
                      fill="#00A6FF"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
            <List className={`${classes.menuList} ${classes.menuIcon}`}>
              <ListItem
                className={classes.menuListLi}
                button
                onClick={() => {
                  MenutoggleDrawer('menuLeft', true);
                }}
              >
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                  >
                    <g
                      id="Group_277"
                      data-name="Group 277"
                      transform="translate(-104 -110)"
                    >
                      <rect
                        id="rectangle"
                        width="32"
                        height="32"
                        transform="translate(104 110)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_278"
                        data-name="Group 278"
                        transform="translate(3 -15)"
                      >
                        <rect
                          id="Rectangle_17"
                          data-name="Rectangle 17"
                          width="3"
                          height="3"
                          transform="translate(109 133)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_18"
                          data-name="Rectangle 18"
                          width="3"
                          height="3"
                          transform="translate(116 133)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_19"
                          data-name="Rectangle 19"
                          width="3"
                          height="3"
                          transform="translate(123 133)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_20"
                          data-name="Rectangle 20"
                          width="3"
                          height="3"
                          transform="translate(109 140)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_21"
                          data-name="Rectangle 21"
                          width="3"
                          height="3"
                          transform="translate(116 140)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_22"
                          data-name="Rectangle 22"
                          width="3"
                          height="3"
                          transform="translate(123 140)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_23"
                          data-name="Rectangle 23"
                          width="3"
                          height="3"
                          transform="translate(109 147)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_24"
                          data-name="Rectangle 24"
                          width="3"
                          height="3"
                          transform="translate(116 147)"
                          fill="#275682"
                        />
                        <rect
                          id="Rectangle_25"
                          data-name="Rectangle 25"
                          width="3"
                          height="3"
                          transform="translate(123 147)"
                          fill="#275682"
                        />
                      </g>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={t('AllAPPSMODULES')}
                  className="textColor explore"
                />
              </ListItem>
            </List>
            {MenuListData()}
          </Grid>
          {/* <div className={classes.moreToolbar}> */}
          {/* <List className={classes.menuList}>
              <ListItem className={classes.menuListLi} button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
              <ListItem className={classes.menuListLi} button>
                <ListItemIcon>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List> */}
          {/* <IconButton><SearchIcon /></IconButton>
            <IconButton><PowerSettingsNewIcon /></IconButton> */}
          {/* </div> */}
        </div>
        {/* <Grid className={`${classes.slideToggle} ${open ? classes.close : ''}`}>
          <IconButton
            onClick={handleDrawerToggle}
            className={classes.animateRight}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Grid> */}
      </Drawer>
      <MenuSideBar
        MenuDirection={'left'}
        MenuPosition={menuPosition}
        MenutoggleDrawer={MenutoggleDrawer}
      />
      {open && (
        <Link
          className={classes.drawerOverlay}
          onClick={() => {
            setOpen(!open);
          }}
        ></Link>
      )}
    </React.Fragment>
  );
}

export default MenuLeftSideBar;
