/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import isUndefined from 'lodash/isUndefined';
import Cleave from 'cleave.js/react';
import currencyConstants from 'constants/currency.constants';

const userObj = JSON.parse(localStorage.getItem('user'));
const selectedBUobj = JSON.parse(localStorage.getItem('selectedBUData'));

const findCountryCode = () => {
  const currentObj = userObj.channelPartners.find(
    (eachBU) => eachBU.channelPartnerId == selectedBUobj.data.channelPartnerID,
  );
  const currencyCode = !isUndefined(currentObj) ? currentObj.currency : 'USD';
  return (
    currencyConstants.find(
      (eachCurrencyObj) => eachCurrencyObj.value == currencyCode,
    ) || { countrycode: 'US' }
  ).countrycode;
};

const phoneCountries = [
  {
    label: '+1',
    value: 'US',
    countryName: 'United States',
  },
  {
    label: '+91',
    value: 'IN',
    countryName: 'India',
  },
  {
    label: '+34',
    value: 'ES',
    countryName: 'Spain',
  },
  {
    label: '+81',
    value: 'JP',
    countryName: 'Japan',
  },
  {
    label: '+49',
    value: 'DE',
    countryName: 'Germany',
  },
  {
    label: '+976',
    value: 'MN',
    countryName: 'Mongolia',
  },
];

const renderCleaveInput = ({
  field,
  onChange,
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
}) => {
  const [selectedCountry, setSelectedCountry] = useState(findCountryCode());
  const handleSelectedCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    if (props.defaultCountry) {
      setSelectedCountry(props.defaultCountry);
    }
  }, [props.defaultCountry]);

  return (
    <React.Fragment>
      <div className="form-control cleaveField">
        <FormControl
          id="selectedCountry"
          variant="outlined"
          className="cleavePhoneExt"
        >
          <Select
            value={selectedCountry}
            onChange={handleSelectedCountry}
            disabled
            // input={<Input id="select-multiple-salechannel" />}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
          >
            {phoneCountries &&
              phoneCountries.map((country) => (
                <MenuItem
                  className="uiSelectOption"
                  key={country.value}
                  value={country.value}
                >
                  {country.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={`select-field cleaveSelect ${field.value ? 'filled' : ''}`}
        >
          <Cleave
            {...field}
            {...props}
            options={{
              phone: true,
              phoneRegionCode: selectedCountry,
            }}
            placeholder={props.label}
            disabled={props.isdisabled}
            onChange={(event) => {
              setFieldValue(
                event.target.name,
                event.target.value.replace(/\s+/g, ''),
              );
              setFieldError(event.target.name, event.target.value);
              if (onChange) {
                onChange(
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
    </React.Fragment>
  );
};

const PhoneNumberV2 = (props) => (
  <React.Fragment>
    <Field
      name={props.fieldName}
      component={renderCleaveInput}
      label={props.fieldLabel}
      type={props.fieldType}
      id={props.fieldID}
      disabled={props.isdisabled}
      validate={props.validateEmail}
      onChange={props.fieldOnChange}
    />
  </React.Fragment>
);

// Type Checking for the Props.
PhoneNumberV2.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldType: PropTypes.string,
  // isdisabled: PropTypes.bool,
  validate: PropTypes.func,
  fieldOnChange: PropTypes.func,
};

// Specify the default Props values.
PhoneNumberV2.defaultProps = {
  fieldName: '',
  fieldLabel: ' ',
  fieldType: ' ',
  // isdisabled: false,
  validate: () => {},
};

export default PhoneNumberV2;
