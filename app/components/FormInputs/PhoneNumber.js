import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { CustomInput } from './CustomInput';

const PhoneNumber = (props) => (
  <React.Fragment>
    <Field
      name={props.fieldName}
      component={CustomInput}
      label={props.fieldLabel}
      type={props.fieldType}
      id={props.fieldID}
      startadornment={props.startadornment}
      onKeyDown={(e) =>
        // (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault()
        !(
          (e.keyCode > 95 && e.keyCode < 106) ||
          (e.keyCode > 47 && e.keyCode < 58) ||
          e.keyCode == 8
        ) && e.preventDefault()
      }
      isDisabled={props.isdisabled}
    />
  </React.Fragment>
);

// Type Checking for the Props.
PhoneNumber.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldType: PropTypes.string,
};

// Specify the default Props values.
PhoneNumber.defaultProps = {
  fieldName: '',
  fieldID: '',
  fieldLabel: ' ',
  fieldType: ' ',
};

export default PhoneNumber;
