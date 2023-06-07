import React from 'react';
import EVIcon from 'images/more-icon.svg';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './style.scss';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  evicon: {
    width: '60px',
  },
});

function EVbutton(props) {
  const location = {
    pathname: props.path,
    state: { data: props.data },
  };
  return (
    <React.Fragment>
      <Link to={location} className="ev_icon">
        <img src={EVIcon} alt="ev Icon" width="14" />
        view more
      </Link>
    </React.Fragment>
  );
}

export default withStyles(styles)(EVbutton);
