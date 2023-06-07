import React from 'react';
import { FastField } from 'formik';
import { InputAdornment } from '@material-ui/core';
import DefaultMaskInput from './DefaultMaskInput';

const MaskInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled,
  startAdornment,
  endAdornment,
  fieldMask
}) => (
  <FastField
    name={fieldName}
    component={DefaultMaskInput}
    id={fieldID}
    label={fieldLabel}
    type="text"
    isDisabled={isDisabled}
    startAdornment={startAdornment}
    endAdornment={endAdornment}
    mask={fieldMask}
    InputProps={{
      startAdornment: startAdornment ? (
        <InputAdornment position="start" className="startadornment_start">
          {startAdornment}
        </InputAdornment>
      ) : (
        ''
      ),
    }}
  />
);

export default MaskInput;
