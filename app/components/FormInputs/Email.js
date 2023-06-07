/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const renderTextField = ({
  field,
  onBlur,
  form: {
    setFieldValue,
    values,
    setFieldTouched,
    touched,
    setFieldError,
    setStatus,
    errors,
  },
  ...props
}) => {
  if (
    field &&
    !field.value &&
    props &&
    props.fieldvalues &&
    props.fieldvalues.length &&
    props.fieldvalues.length === 1
  ) {
    // setFieldValue(field.name, props.fieldvalues[0].value);
  }
  return (
    <React.Fragment>
      <div className="form-control">
        <FormControl
          variant="outlined"
          fullWidth
          className={`select-field ${field.value ? 'filled' : ''}`}
        >
          <InputLabel htmlFor="filled-age-simple">{props.label}</InputLabel>
          <OutlinedInput
            {...field}
            {...props}
            disabled={props.isdisabled}
            inputProps={{
              autoComplete: 'off',
              readOnly: true,
              onFocus: () => {
                document.getElementById(props.id).removeAttribute('readonly');
              },
            }}
            // eslint-disable-next-line no-restricted-globals
            onBlur={(event) => {
              setFieldValue(event.target.name, event.target.value);
              setFieldError(event.target.name, event.target.value);
              if (onBlur) {
                onBlur(
                  event.target.name,
                  event.target.value,
                  setFieldValue,
                  values,
                  setFieldTouched,
                  touched,
                  setFieldError,
                  setStatus,
                  errors,
                );
              }
            }}
            value={field.value}
          />
        </FormControl>
      </div>
    </React.Fragment>
  );
};

const Email = (props) => (
  <React.Fragment>
    <Field
      name={props.fieldName}
      component={renderTextField}
      label={props.fieldLabel}
      type={props.fieldType}
      id={props.fieldID}
      disabled={props.isdisabled}
      validate={props.validateEmail}
      onBlur={props.fieldOnChange}
    />
  </React.Fragment>
);

// Type Checking for the Props.
Email.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldType: PropTypes.string,
  // isdisabled: PropTypes.bool,
  validate: PropTypes.func,
  fieldOnChange: PropTypes.func,
};

// Specify the default Props values.
Email.defaultProps = {
  fieldName: '',
  fieldLabel: ' ',
  fieldType: ' ',
  // isdisabled: false,
  validate: () => {},
};

export default Email;
