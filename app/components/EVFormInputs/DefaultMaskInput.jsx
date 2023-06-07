import React from 'react';
import MaskedInput from 'react-text-mask';
import './style.scss';

const DefaultMaskInput = ({
  field, onChange,
  form: {
    setFieldValue, values, setFieldTouched, touched, setFieldError
  },
  ...props
}) => (
  <div
    className={`text-field maskTextField ${field.value ? 'filled' : ''} ${props.isdisabled ? 'disable' : ''}`}
  >
    <MaskedInput
      {...field}
      {...props}
      mask={props.mask}
      id={field.name}
      guide={false}
      type="text"
      disabled={props.isdisabled}
      // onChange={handleChange}
      onChange={(event) => {
        setFieldValue(event.target.name, event.target.value);
        if (onChange) {
          onChange(event.target.name, event.target.value, setFieldValue, values, setFieldTouched, touched, setFieldError);
        }
      }}
      // onBlur={handleBlur}
      className={`maskTextFieldInput ${field.value ? 'filled' : ''}`}
    />
    <label>{props.label}</label>
    <span className="maskTextFieldFocus"></span>
  </div>
);

export default DefaultMaskInput;
