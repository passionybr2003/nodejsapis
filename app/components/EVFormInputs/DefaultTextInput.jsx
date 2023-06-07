import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

const DefaultTextInput = ({
  field,
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    variant="filled"
    fullWidth
    disabled={props.isDisabled}
    className={`text-field ${field.value ? 'filled' : ''}`}
    InputProps={{
      startAdornment: props.startAdornment ? (
        <InputAdornment position="start" className="mt-0">
          {props.startAdornment}
        </InputAdornment>
      ) : (
        ''
      ),
      endAdornment: props.endAdornment ? (
        <InputAdornment position="end" className="mt-0 mb-5">
          {props.endAdornment}
        </InputAdornment>
      ) : (
        ''
      ),
    }}
  />
);

export default DefaultTextInput;
