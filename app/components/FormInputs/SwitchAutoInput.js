import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const renderSwitchInput = ({
  field, // { name, value, onChange, onBlur }
  onChange,
  form: { setFieldValue, values },
  ...props
}) => (
  <React.Fragment>
    <FormControlLabel
      variant="filled"
      control={
        <Switch
          {...field}
          {...props}
          disabled={props.isdisabled}
          label={props.fieldLabel}
          checked={field.value}
          onChange={(event) => {
            setFieldValue(event.target.name, event.target.checked);
            if (onChange) {
              onChange(
                event.target.name,
                event.target.checked,
                setFieldValue,
                values,
              );
            }
          }}
        />
      }
      labelPlacement="start"
      label={props.label}
    />
  </React.Fragment>
);

const SwitchAutoInput = (props) => (
  <Field
    name={props.fieldName}
    label={props.fieldLabel}
    id={props.fieldID}
    checked={props.fieldvalue}
    component={renderSwitchInput}
    onChange={props.fieldOnChange}
    isdisabled={props.isdisabled}
    color={props.fieldColor}
  />
);

SwitchAutoInput.propTypes = {
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldID: PropTypes.string,
  checked: PropTypes.bool,
  color: PropTypes.string,
  isdisabled: PropTypes.bool,
  fieldOnChange: PropTypes.func,
};

SwitchAutoInput.defaultProps = {
  fieldName: '',
  fieldLabel: '',
  fieldID: '',
};

export default SwitchAutoInput;
