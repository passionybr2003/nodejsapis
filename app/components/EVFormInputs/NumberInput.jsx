import React from 'react';
import { FastField } from 'formik';
import DefaultTextInput from './DefaultTextInput';

const NumberInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled,
  startAdornment,
  endAdornment
}) => (
  <FastField
    name={fieldName}
    component={DefaultTextInput}
    id={fieldID}
    label={fieldLabel}
    type="number"
    isDisabled={isDisabled}
    startAdornment={startAdornment}
    endAdornment={endAdornment}
    onKeyDown={(e) =>
      (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault()
    }
  />
);

export default NumberInput;
