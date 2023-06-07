import React from 'react';
import { TextField } from 'material-ui';

const DefaultPasswordInput = ({
  field,
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    variant="filled"
    fullWidth
    disabled={props.isDisabled}
    inputProps={{
      autoComplete: 'off',
      readOnly: true,
      onFocus: () => {
        document.getElementById(props.id).removeAttribute('readonly');
      }
    }}
    className={`text-field ${field.value ? 'filled' : ''}`}
  />
);

export default DefaultPasswordInput;
