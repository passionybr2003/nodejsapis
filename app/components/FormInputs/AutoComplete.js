/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import isString from 'lodash/isString';

export default function AutoComplete(props) {
  const [selectedOption, setSelectedOption] = React.useState(
    props.formikProps.initialValues[props.fieldName] || '',
  );

  useEffect(() => {
    setSelectedOption(props.formikProps.initialValues[props.fieldName]);
  }, [props.formikProps.initialValues[props.fieldName]]);

  const handleInputChange = (event, value, reason) => {
    setSelectedOption(value);
    props.formikProps.setFieldValue(props.fieldName, value);
    if (reason == 'input' && props.isTypeAheadAPI && value.length > 3) {
      props.typeAheadAPICall(value);
    }
    if (value === '' && props.isTypeAheadAPI) {
      props.resetFieldOptions();
    }
  };

  // const handleClear = (event, value) => {
  //   if (value == null) {
  //     setSelectedOption('');
  //   }
  // };

    if (isString(props.optionsList[0])) {
      return (
        <Autocomplete
          onInputChange={handleInputChange}
          // onChange={handleChange}
          id={props.fieldID}
          freeSolo
          options={props.optionsList.map((option) => option)}
          inputValue={selectedOption}
          disabled={props.isDisabled}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.fieldLabel}
              name={props.fieldName}
              variant="outlined"
              value={selectedOption}
              fullWidth
              className={`text-field autoComplete ${
                selectedOption ? 'filled' : ''
              }`}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          onInputChange={handleInputChange}
          // onChange={handleChange}
          id={props.fieldID}
          freeSolo
          options={props.optionsList.map((option) => option.value)}
          inputValue={selectedOption}
          disabled={props.isDisabled}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.fieldLabel}
              name={props.fieldName}
              variant="outlined"
              value={selectedOption}
              fullWidth
              className={`text-field autoComplete ${
                selectedOption ? 'filled' : ''
              }`}
            />
          )}
        />
      );
    }
}
