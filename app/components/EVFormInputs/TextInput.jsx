import React from 'react';
import { FastField } from 'formik';
import DefaultTextInput from './DefaultTextInput';

const TextInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled,
  startAdornment,
  endAdornment,
}) => (
  <FastField
    name={fieldName}
    component={DefaultTextInput}
    id={fieldID}
    label={fieldLabel}
    type="text"
    isDisabled={isDisabled}
    startAdornment={startAdornment}
    endAdornment={endAdornment}
  />
);

export default TextInput;
