import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import maskOptionsList from '../../constants/currencyInput.maskOptions';

const CustomNumberFormat = (props) => {
  const { inputRef, onChange, ...other } = props;
  const [maskOptions, setMaskOptions] = useState({
    prefix: '',
    suffix: '',
    decimalScale: 0,
  });

  useEffect(() => {
    if (maskOptionsList[props.currencyCode]) {
      setMaskOptions(maskOptionsList[props.currencyCode]);
    } else {
      setMaskOptions(maskOptionsList.USD);
    }
  }, [props.currencyCode]);

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      // decimalScale={maskOptions.decimalScale}
      prefix={maskOptions.prefix}
      suffix={maskOptions.suffix}
    />
  );
};

const renderCurrencyMask = (props) => {
  const {
    field,
    onChange,
    form: {
      setFieldValue, values, setFieldTouched, touched, setFieldError
    },
    ...rest
  } = props;
  field.currencyCode = rest.currencyCode;

  useEffect(
    () => () => {
      if (rest.inShahidMultiplePrices) {
        setFieldValue(field.name, '');
      }
    },
    [],
  );

  return (
    <TextField
      {...field}
      {...rest}
      variant="outlined"
      label={rest.label}
      name={field.name}
      className={`text-field ${field.value ? 'filled' : ''}`}
      id={rest.id}
      disabled={rest.disabled}
      onChange={(event) => {
        setFieldValue(event.target.name, event.target.value);
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
      }}
      InputProps={{
        inputComponent: CustomNumberFormat,
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      inputProps={{
        currencyCode: rest.currencyCode,
      }}
      error={rest.error}
      helperText={rest.helperText}
    />
  );
};

const CurrencyInput = (props) => (
  <React.Fragment>
    <Field
      name={props.fieldName}
      component={renderCurrencyMask}
      label={props.fieldLabel}
      id={props.fieldID}
      disabled={props.isDisabled}
      type="text"
      onChange={props.fieldOnChange}
      currencyCode={props.currencyCode}
      inShahidMultiplePrices={props.inShahidMultiplePrices}
      error={props.error}
      helperText={props.helperText}
    />
  </React.Fragment>
);

// Type Checking for the Props
/**
 * @description Props
 */
CurrencyInput.propTypes = {
  /**
   * The name property of the field
   */
  fieldName: PropTypes.string,
  /**
   * The id property of the field
   */
  fieldID: PropTypes.string,
  /**
   * The label property of the field
   */
  fieldLabel: PropTypes.string,
  /**
   * The currencyCode in which the component should format. Eg - USD, JPY, EUR
   */
  currencyCode: PropTypes.string,
  /**
   * Whether the field is disabled or not
   */
  isDisabled: PropTypes.bool,
  /**
   * onChange function which can be passed from Parent Component
   */
  fieldOnChange: PropTypes.func,
  /**
   * inShahidMultiplePrices is used to detect if this component is loaded from MultiplePricesShahid
   */
  inShahidMultiplePrices: PropTypes.bool,
};

// Specify the default Props values
CurrencyInput.defaultProps = {
  fieldName: '',
  fieldID: '',
  fieldLabel: '',
  currencyCode: 'USD',
  isDisabled: false,
  fieldOnChange: () => {},
  inShahidMultiplePrices: false,
};

export default CurrencyInput;
