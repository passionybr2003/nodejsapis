import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './style.scss';
// import { Switch, Typography } from '@material-ui/core';
// import HelpIcon from 'images/Question-mark-icon.svg';

const renderSwitchInput = ({
  field, // { name, value, onChange, onBlur }
  onChange,
  form: {
    setFieldValue, values, setFieldTouched, touched
  },
  ...props
}) => (
  <div className="form-control">
    <FormControlLabel
      variant="outlined"
      fullWidth
      className={`switch-field ${field.value ? 'filled' : ''}`}
      control={
        <Switch
          {...field}
          {...props}
          disabled={props.isdisabled}
          // label={props.fieldLabel}
          checked={field.value}
          color="primary"
          onChange={(event) => {
            setFieldValue(event.target.name, event.target.checked);
            if (onChange) {
              onChange(
                event.target.name,
                event.target.checked,
                setFieldValue,
                values,
                setFieldTouched,
                touched,
              );
            }
          }}
        />
      }
      labelPlacement="start"
      color="primary"
      label={props.label}
    />
    {props.secondaryLabel ? props.secondaryLabel : null}
  </div>
);

const SwitchInput = (props) => {
  const switchField = (
    <Field
      name={props.fieldName}
      label={props.fieldLabel}
      id={props.fieldID}
      checked={props.fieldvalue}
      component={renderSwitchInput}
      onChange={props.fieldOnChange}
      isdisabled={props.isdisabled}
      secondaryLabel={props.secondaryLabel}
    />
  );

  return <div>{switchField}</div>;
};

SwitchInput.propTypes = {
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldID: PropTypes.string,
  // checked: PropTypes.bool,
  isdisabled: PropTypes.bool,
  fieldOnChange: PropTypes.func,
};

SwitchInput.defaultProps = {
  fieldName: '',
  fieldLabel: '',
  fieldID: '',
};

export default SwitchInput;
