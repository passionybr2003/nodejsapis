import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Checkbox, Tooltip } from '@material-ui/core';
import './style.scss';

const renderCheckbox = ({
  field,
  onChange,
  form: { setFieldValue, values, setFieldTouched, touched }, // { name, value, onChange, onBlur }
  ...props
}) => (
  <div>
    <Checkbox
      className="EVCheckbox"
      {...field}
      {...props}
      color={props.color !== undefined ? props.color : 'default'}
      style={{ width: 38, height: 38 }}
      checked={field.value}
      value={field.name}
      disabled={props.disabled}
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
  </div>
);

const CheckboxInput = (props) => (
  <div>
    <FormControlLabel
      control={
        <Field
          name={props.fieldName}
          component={renderCheckbox}
          // label={this.props.myLabel}
          checked={props.checked}
          color={props.fieldColor}
          disabled={props.isdisabled}
          onChange={props.fieldOnChange}
        />
      }
      label={props.fieldLabel}
      labelPlacement={props.labelPlacement}
      className="checkbox_field"
    />
    {props.tooltip ? (
      <Tooltip
        title={props.tooltip}
        placement="bottom"
        disableFocusListener
        disableTouchListener
      >
        <img alt="help" src={HelpIcon} className="help_icons circle" />
      </Tooltip>
    ) : (
      ''
    )}
  </div>
);

CheckboxInput.propTypes = {
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
  checked: PropTypes.bool,
  isdisabled: PropTypes.bool,
  tooltip: PropTypes.string,
};

Checkbox.defaultProps = {
  fieldName: '',
  fieldLabel: '',
  checked: false,
  isdisabled: false,
  tooltip: '',
};

export default CheckboxInput;
