import React from 'react';
import { FastField } from 'formik';
import DefaultEmailInput from './DefaultEmailInput';

const TextInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled,
  validateEmail,
  fieldOnChange
}) => (
  <FastField
    name={fieldName}
    component={DefaultEmailInput}
    id={fieldID}
    label={fieldLabel}
    type="email"
    isDisabled={isDisabled}
    validate={validateEmail}
    onBlur={fieldOnChange}
  />
);

export default TextInput;
