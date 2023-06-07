/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { Field } from 'formik';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import compact from 'lodash/compact';
import { dataHelper } from 'helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    // marginBottom: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  chip: {
    margin: 2,
    height: 'auto',

    '& span': {
      fontSize: '9pt',
      color: theme.textColor,
      fontFamily: 'acumin-pro, sans-serif',
      fontWeight: 400,
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  },

  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function getStyles(name, selectedOptions, theme) {
  return {
    fontWeight:
      selectedOptions.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      // eslint-disable-next-line no-mixed-operators
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

// Component which will get rendered.
function renderSelectFieldSS(props) {
  const {
    field, // { name, value, onChange, onBlur }
    onChange,
    form: { setFieldValue, setFieldTouched, touched, errors, values },
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [fieldVals, setFieldVals] = React.useState([]);

  useEffect(() => {
    const tempSel = [];
    if (props.type == 'arrayOfObjects') {
      if (typeof field.value[0] == 'string') {
        forEach(field.value, (val) => {
          const option = find(props.fieldvalues, { value: val });
          tempSel.push(option);
        });
      } else if (typeof field.value[0] == 'object') {
        forEach(field.value, (val) => {
          const option = find(props.fieldvalues, { value: val.value });
          tempSel.push(option);
        });
      }
      setSelectedOptions(compact(tempSel));
    } else {
      setSelectedOptions(compact(field.value));
    }
    setFieldVals(props.fieldvalues);
  }, [props.fieldvalues, field.value]);

  function handleChange(event) {
    setSelectedOptions(event.target.value);
    setFieldValue(field.name, event.target.value);
    if (onChange) {
      onChange(
        event.target.name,
        event.target.value,
        setFieldValue,
        values,
        setFieldTouched,
        touched,
      );
    }
  }

  if (typeof props.fieldvalues[0] === 'string') {
    return (
      <div className={classes.formControl}>
        <FormControl
          variant="outlined"
          fullWidth
          className={`select-field ${field.value ? 'filled' : ''}`}
        >
          <InputLabel htmlFor="filled-age-simple">{props.label}</InputLabel>
          <Select
            id="demo-mutiple-checkbox"
            multiple
            {...field}
            {...props}
            disabled={props.isdisabled}
            value={selectedOptions || []}
            onChange={handleChange}
            className="multiSelect"
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {fieldVals &&
              fieldVals.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return (
      <div className={classes.formControl}>
        <FormControl
          variant="outlined"
          fullWidth
          className={`select-field ${field.value ? 'filled' : ''}`}
        >
          <InputLabel htmlFor="filled-age-simple">{props.label}</InputLabel>
          <Select
            labelId="filled-age-simple"
            id="demo-mutiple-checkbox"
            multiple
            {...field}
            {...props}
            className="multiSelect"
            value={selectedOptions || []}
            onChange={handleChange}
            renderValue={(selected) => {
              let renderStr = '';
              // if (typeof selected[0] != 'string') {
              selectedOptions.forEach((sel, index) => {
                if (index < selected.length - 1) {
                  renderStr = `${renderStr + sel.label}, `;
                } else {
                  renderStr += sel.label;
                }
              });
              // }
              return renderStr;
            }}
            MenuProps={MenuProps}
          >
            {fieldVals &&
              fieldVals.map((option) => (
                <MenuItem key={option.value} value={option}>
                  <Checkbox
                    checked={selectedOptions.find(
                      (val) => val.value === option.value,
                    )}
                  />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
const MultipleSelectInput2 = (props) => {
  const selectField = (
    <Field
      name={props.fieldName}
      label={props.fieldLabel}
      id={props.fieldID}
      component={renderSelectFieldSS}
      fieldvalues={props.optionsList}
      onChange={props.fieldOnChange}
      isdisabled={props.isdisabled}
      type={props.type}
    />
  );

  return <div>{selectField}</div>;
};

MultipleSelectInput2.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldOnChange: PropTypes.func,
};

MultipleSelectInput2.defaultProps = {
  fieldLabel: '',
};

export default MultipleSelectInput2;
