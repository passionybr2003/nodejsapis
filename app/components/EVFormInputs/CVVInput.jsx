import React from 'react';
import { FastField } from 'formik';
import DefaultTextInput from './DefaultTextInput';

const CVVInput = ({
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
    type="password"
    isDisabled={isDisabled}
    startAdornment={startAdornment}
    endAdornment={endAdornment}
    inputProps={{
      maxLength: 4
    }}
    onKeyDown={(e) =>
      ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode === 32) || (e.keyCode >= 186 && e.keyCode <= 222) || (e.keyCode >= 106 && e.keyCode <= 111)) && e.preventDefault()
    }
  />
);

export default CVVInput;
