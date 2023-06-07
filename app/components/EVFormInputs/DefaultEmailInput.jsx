import React, { Fragment } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const DefaultEmailInput = ({
  field,
  onBlur,
  form: {
    setFieldValue,
    values,
    setFieldTouched,
    touched,
    setFieldError,
    setStatus,
    errors,
  },
  ...props
}) => (
  <Fragment>
    <div className="form-control">
      <FormControl
        variant="filled"
        fullWidth
        className={`select-field ${field.value ? 'filled' : ''}`}
      >
        <InputLabel htmlFor="filled-age-simple">{props.label}</InputLabel>
        <Input
          {...field}
          {...props}
          disabled={props.isdisabled}
          inputProps={{
            autoComplete: 'off',
            readOnly: true,
            onFocus: () => {
              document.getElementById(props.id).removeAttribute('readonly');
            },
          }}
          // eslint-disable-next-line no-restricted-globals
          onBlur={(event) => {
            setFieldValue(event.target.name, event.target.value);
            setFieldError(event.target.name, event.target.value);
            if (onBlur) {
              onBlur(
                event.target.name,
                event.target.value,
                setFieldValue,
                values,
                setFieldTouched,
                touched,
                setFieldError,
                setStatus,
                errors,
              );
            }
          }}
          value={field.value}
        />
      </FormControl>
    </div>
  </Fragment>
);

export default DefaultEmailInput;
