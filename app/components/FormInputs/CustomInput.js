/* eslint-disable no-unused-vars */
import React from 'react';
import { TextField, InputAdornment, Tooltip } from '@material-ui/core';

export const CustomInput = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => (
  <div>
    <TextField
      {...field}
      {...props}
      variant="outlined"
      fullWidth
      disabled={props.isDisabled}
      className={`text-field ${field.value ? 'filled' : ''}`}
      InputProps={{
        startAdornment: props.startadornment ? (
          <InputAdornment position="start" className="mt-0">
            {props.startadornment}
          </InputAdornment>
        ) : (
          ''
        ),
        endAdornment: props.endAdornment ? (
          props.endAdornmentToolTip ? (
            <Tooltip title={props.endAdornmentToolTip} placement="bottom-end">
              <InputAdornment position="end" className="mt-0 endAdorn">
                {props.endAdornment}
              </InputAdornment>
            </Tooltip>
          ) : (
            <InputAdornment position="end" className="mt-0 endAdorn">
              {props.endAdornment}
            </InputAdornment>
          )
        ) : (
          ''
        ),
      }}
    />
  </div>
);
