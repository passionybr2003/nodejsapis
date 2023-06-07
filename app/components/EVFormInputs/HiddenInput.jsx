import React from 'react';
import { FastField } from 'formik';
import DefaultTextInput from './DefaultTextInput';

const HiddenInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled
}) => (
  <FastField
    name={fieldName}
    component={DefaultTextInput}
    id={fieldID}
    label={fieldLabel}
    type="password"
    isDisabled={isDisabled}
  />
);

export default HiddenInput;
