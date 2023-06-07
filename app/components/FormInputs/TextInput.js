import React, { useState } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
// import TextField from "material-ui/TextField";
import PropTypes from 'prop-types';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { dataHelper } from 'helpers';
import { CustomInput } from './CustomInput';

// The Material-UI TextField which will be rendered
const renderTextField = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    variant="outlined"
    fullWidth
    disabled={props.isdisabled}
    className={`text-field ${field.value ? 'filled' : ''}`}
  />
);

const renderEmailField = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    variant="outlined"
    fullWidth
    disabled={props.isdisabled}
    value={props.form.values[field.name]}
    className={`text-field ${field.value ? 'filled' : ''}`}
    onChange={(event) => {
      if (props.isMask) {
        props.setActualEmail(event.target.value);
      }
      props.form.setFieldValue(field.name, event.target.value);
    }}
    onFocus={() => {
      if (props.isMask) {
        props.form.setFieldValue(field.name, props.actualEmail);
      }
    }}
    onBlur={(event) => {
      if (props.isMask) {
        props.form.setFieldValue(
          field.name,
          dataHelper.maskEmail(event.target.value),
        );
        props.setActualEmail(event.target.value);
      } else {
        props.form.setFieldValue(field.name, event.target.value);
      }
    }}
  />
);

const renderPasswordField = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    variant="outlined"
    fullWidth
    disabled={props.isdisabled}
    inputProps={{
      autoComplete: 'off',
      readOnly: true,
      onFocus: () => {
        document.getElementById(props.id).removeAttribute('readonly');
      },
    }}
    className={`text-field ${field.value ? 'filled' : ''}`}
  />
);

// The Masked Input which will be rendered
const ExpirationMask = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={props.mask}
      placeholderChar={'\u2000'}
    />
  );
};

const renderTextMask = ({
  field,
  onChange, // { name, value, onChange, onBlur }
  form: {
    setFieldValue, values, setFieldTouched, touched, setFieldError
  },
  ...props
}) => (
  <div className="form-control">
    <FormControl
      variant="outlined"
      fullWidth
      className={`text-field ${field.value ? 'filled' : ''}`}
    >
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput
        {...field}
        {...props}
        value={
          values[field.name] && typeof values[field.name] == 'string'
            ? values[field.name].trim()
            : ''
        }
        disabled={props.isdisabled}
        onChange={(event) => {
          setFieldValue(
            event.target.name,
            event.target.value ? event.target.value.trim() : '',
          );
          if (onChange) {
            onChange(
              event.target.name,
              event.target.value,
              setFieldValue,
              values,
              setFieldTouched,
              touched,
              setFieldError,
            );
          }
          if (props.isMask) {
            props.setActualPhone(
              event.target.value ? event.target.value.trim() : '',
            );
          }
        }}
        onFocus={() => {
          if (props.isMask) {
            setFieldValue(
              field.name,
              props.actualPhone ? props.actualPhone.trim() : '',
            );
          }
        }}
        onBlur={(event) => {
          if (props.isMask) {
            setFieldValue(
              field.name,
              dataHelper.maskContact(
                event.target.value ? event.target.value.trim() : '',
              ),
            );
            props.setActualPhone(
              event.target.value ? event.target.value.trim() : '',
            );
          } else {
            setFieldValue(
              field.name,
              event.target.value ? event.target.value.trim() : '',
            );
          }
        }}
        inputComponent={ExpirationMask}
        inputProps={{
          mask: props.mask,
        }}
      />
    </FormControl>
  </div>
);

const TextInput = (props) => {
  // The type of TextInput required.
  const selectedField = props.fieldType;
  let field;
  // eslint-disable-next-line prefer-const
  let [showPassword, setShowPassword] = useState(false);

  const showPasswordToggle = () => {
    showPassword = !showPassword;
    setShowPassword(showPassword);
  };

  switch (selectedField) {
    // Email Field
    case 'email':
      field = (
        <Field
          name={props.fieldName}
          component={props.isMask ? renderEmailField : renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          isdisabled={props.isdisabled}
          isMask={props.isMask}
          actualEmail={props.actualEmail}
          setActualEmail={props.setActualEmail}
        />
      );
      break;

    // Password Field
    case 'password':
      field = (
        <Field
          name={props.fieldName}
          component={renderPasswordField}
          label={props.fieldLabel}
          id={props.fieldID}
          isdisabled={props.isdisabled}
          type={showPassword ? 'text' : 'password'}
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
      break;

    // Number Field
    case 'number':
      field = (
        <Field
          name={props.fieldName}
          component={renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          isdisabled={props.isdisabled}
          InputProps={{
            startAdornment: props.startadornment ? (
              <InputAdornment position="start">
                {props.startadornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}
          onKeyDown={(e) => e.keyCode === 69 && e.preventDefault()}
        />
      );
      break;

    case 'decimal':
      field = (
        <React.Fragment>
          <Field
            name={props.fieldName}
            component={CustomInput}
            label={props.fieldLabel}
            type="number"
            id={props.fieldID}
            isDisabled={props.isdisabled}
            startadornment={props.startadornment}
            endAdornment={props.endAdornment}
            endAdornmentToolTip={props.tooltip}
            onKeyDown={(e) => e.keyCode === 69 && e.preventDefault()}
          />
        </React.Fragment>
      );
      break;

    // Plain Text Field
    case 'text':
      field = (
        <Field
          name={props.fieldName}
          component={renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          startadornment={props.startadornment}
          isdisabled={props.isdisabled}
          onChange={props.fieldChange}
          inputProps={{ maxLength: props.maxLength, autoComplete: 'off' }}
          // class={props.className}
          InputProps={{
            startAdornment: props.startadornment ? (
              <InputAdornment position="start" className="startadornment_start">
                {props.startadornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}
          // onChange={handleChange('TextMaskCustom')}
        />
      );
      break;

    case 'digits':
      field = (
        <Field
          name={props.fieldName}
          maxLength={props.maxLength}
          placeholder={props.fieldPlaceholder}
          component={renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          startadornment={props.startadornment}
          endadornment={props.endadornment}
          isdisabled={props.isdisabled}
          readOnly={props.isReadonly}
          onChange={props.fieldChange}
          InputProps={{
            startAdornment: props.startadornment ? (
              <InputAdornment position="start" className="startadornment_start">
                {props.startadornment}
              </InputAdornment>
            ) : (
              ''
            ),
            endAdornment: props.endadornment ? (
              <InputAdornment position="end" className="endadornment">
                {props.endadornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}
          inputProps={{
            maxLength: props.maxLength,
            autoComplete: props.autoComplete,
          }}
          onKeyDown={(e) =>
            ((e.keyCode >= 65 && e.keyCode <= 90) ||
              e.keyCode == 32 ||
              (e.keyCode >= 186 && e.keyCode <= 222) ||
              (e.keyCode >= 106 && e.keyCode <= 111)) &&
            e.preventDefault()
          }
        />
      );
      break;

    case 'textWithEndAdorsement':
      field = (
        <Field
          name={props.fieldName}
          component={renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          endAdornment={props.endAdornment}
          isdisabled={props.isdisabled}
          // class={props.className}
          InputProps={{
            endAdornment: props.endAdornment ? (
              <InputAdornment
                position="end"
                className="endadornment_end endAdorn"
              >
                {props.endAdornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}

          // onChange={handleChange('TextMaskCustom')}
        />
      );
      break;

    case 'mask':
      field = (
        <Field
          name={props.fieldName}
          component={renderTextMask}
          label={props.fieldLabel}
          type="text"
          id={props.fieldID}
          startadornment={props.startadornment}
          isdisabled={props.isdisabled}
          mask={props.fieldMask}
          isMask={props.isMask}
          actualPhone={props.actualPhone}
          setActualPhone={props.setActualPhone}
          onChange={props.fieldOnChange}
          InputProps={{
            startAdornment: props.startadornment ? (
              <InputAdornment position="start" className="startadornment_start">
                {props.startadornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}
        />
      );
      break;

    case 'hidden':
      field = (
        <Field
          name={props.fieldName}
          component={renderPasswordField}
          label={props.fieldLabel}
          id={props.fieldID}
          type="password"
          isdisabled={props.isdisabled}
        />
      );
      break;

    case 'cardCVV':
      field = (
        <Field
          name={props.fieldName}
          component={renderTextField}
          label={props.fieldLabel}
          id={props.fieldID}
          type="password"
          isdisabled={props.isdisabled}
          inputProps={{ maxLength: 4 }}
          onChange={props.fieldChange}
          onKeyDown={(e) =>
            ((e.keyCode >= 65 && e.keyCode <= 90) ||
              e.keyCode == 32 ||
              (e.keyCode >= 186 && e.keyCode <= 222) ||
              (e.keyCode >= 106 && e.keyCode <= 111)) &&
            e.preventDefault()
          }
        />
      );
      break;

    // default Field - Plain Text Field is rendered
    default:
      field = (
        <Field
          name={props.fieldName}
          component={renderTextField}
          label={props.fieldLabel}
          type={props.fieldType}
          id={props.fieldID}
          startadornment={props.startadornment}
          isdisabled={props.isdisabled}
          InputProps={{
            startAdornment: props.startadornment ? (
              <InputAdornment position="start" className="startadornment_start">
                {props.startadornment}
              </InputAdornment>
            ) : (
              ''
            ),
          }}
        />
      );
  }

  return <React.Fragment>{field}</React.Fragment>;
};

// Type Checking for the Props.
/**
 * @description Props
 */
TextInput.propTypes = {
  /**
   * The name property of the field
   */
  fieldName: PropTypes.string,
  /**
   * The id property of the field
   */
  fieldID: PropTypes.string,
  /**
   * The Label which has to be displayed for this field
   */
  fieldLabel: PropTypes.string,
  /**
   * The type of field. Possible values - text, email, password
   */
  fieldType: PropTypes.string,
  /**
   * The mask regular expression
   */
  fieldMask: PropTypes.any,
  /**
   * Whether the field is disabled or not
   */
  isdisabled: PropTypes.bool,
};

// Specify the default Props values.
TextInput.defaultProps = {
  fieldName: '',
  fieldID: '',
  fieldLabel: '',
  fieldType: '',
  fieldMask: '',
  isdisabled: false,
};

export default TextInput;
