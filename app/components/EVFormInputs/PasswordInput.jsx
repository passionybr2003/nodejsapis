import React, { useState } from 'react';
import { FastField } from 'formik';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import DefaultPasswordInput from './DefaultPasswordInput';

const PasswordInput = (
  {
    fieldName, fieldID, fieldLabel, isDisabled
  }
) => {
  // eslint-disable-next-line prefer-const
  let [showPassword, setShowPassword] = useState(false);

  const showPasswordToggle = () => {
    showPassword = !showPassword;
    setShowPassword(showPassword);
  };

  return (
    <FastField
      name={fieldName}
      component={DefaultPasswordInput}
      id={fieldID}
      label={fieldLabel}
      type={showPassword ? 'text' : 'password'}
      isDisabled={isDisabled}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={showPasswordToggle}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
