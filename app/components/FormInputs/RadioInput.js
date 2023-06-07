import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'formik';

// Function that renders Radio button group
const renderRadioButton = ({
  field,
  onChange, // { name, value, onChange, onBlur }
  form: {
    setFieldValue, values, setFieldTouched, touched, initialValues
  },
  ...props
}) => (
  <React.Fragment>
    <FormLabel>{props.radioGroupLabel}</FormLabel>
    <RadioGroup
      {...field}
      {...props}
      aria-label="Gender"
      name={field.name}
      defaultValue={initialValues[field.name]}
      onChange={(event) => {
        setFieldValue(event.target.name, event.target.value);
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
      }}
      className={`flex-direction-row ${
        field.customClass ? field.customClass : null
      }`}
    >
      {props.fieldvalues.map((option) => (
        <FormControlLabel
          value={option.value}
          control={<Radio color="primary" disabled={option.disabled} />}
          label={option.label}
          key={option.label}
          disabled={option.disabled}
          labelPlacement="end"
          className={`textPrimary custom_radio ${option.disabled &&
            'radioDisable'}`}
        />
      ))}
    </RadioGroup>
  </React.Fragment>
);

const RadioInput = (props) => (
  <div>
    <Field
      name={props.fieldName}
      component={renderRadioButton}
      id={props.fieldID}
      fieldvalues={props.radioValues}
      radioGroupLabel={props.radioGroupLabel}
      onChange={props.fieldOnChange}
    />
  </div>
);

RadioInput.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  radioGroupLabel: PropTypes.string,
};

RadioInput.defaultProps = {
  fieldName: '',
  fieldID: '',
  radioGroupLabel: '',
};

export default RadioInput;
