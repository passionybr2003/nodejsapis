import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Typography, Grid, Button, Link } from '@material-ui/core';
import { TextInput, SelectInput, SearchInput, SwitchInput } from 'components/FormInputs';
import BackArrow from 'images/right-arrow.png';
import SearchIcon from 'images/Search-white.svg';

const useStyles = makeStyles({
  globalSearch: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  globalSearchIn: {
    padding: '60px',
  },
  head_backnav: {
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

function GlobalSearch(props) {
  const classes = useStyles();


  const sideList = (side) => (
    <div
      className={classes.globalSearch}
      role="presentation"
      onClick={props.toggleDrawer(side, false)}
      onKeyDown={props.toggleDrawer(side, false)}
    >
      <div className={classes.globalSearchIn}>
        <Typography className={classes.head_backnav} variant="h5">
          Search
          <Link className="back_nav">
            <img src={BackArrow} alt="back navigation" />
          </Link>
        </Typography>
        {/* <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="form-control">
                <SelectInput
                  fieldName={SelectFiledName}
                  fieldID={SelectFiledID}
                  fieldLabel={SelectFiledLabel}
                  optionsList={data}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="form-control">
                <SelectInput
                  fieldName={SelectFiledName}
                  fieldID={SelectFiledID}
                  fieldLabel={SelectFiledLabel}
                  optionsList={data}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="form-control">
                <TextInput fieldID="productName" fieldName="productName" fieldLabel="Product name" fieldType="text" />
              </div>
            </Grid>
            <Grid item xs={12} className="mt-20 mob_btn_fixed mob_btn_align">
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className=""
              >
                <Grid item className="btn_main_mob">
                  <Button type="submit" variant="contained" size="large" color="secondary" className="btn ml-30 i-rgt">
                    Search <img src={SearchIcon} alt="search" width="16" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form> */}
      </div>
    </div>
  );


  return (
    <div>
      <Drawer anchor="right" open={props.searchState.right} onClose={props.toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default GlobalSearch;
