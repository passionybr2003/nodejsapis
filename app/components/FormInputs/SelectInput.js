import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';

// Select component which will get rendered.
const renderSelectField = ({
  field,
  onChange,
  form: {
    setFieldValue, values, setFieldTouched, touched
  },
  ...props
}) => {
  if (
    field &&
    !field.value &&
    props.isSingleDefault &&
    props.fieldvalues &&
    props.fieldvalues.length &&
    props.fieldvalues.length === 1
  ) {
    setFieldValue(field.name, props.fieldvalues[0].value);
  }
  return (
    <React.Fragment>
      <div className="form-control">
        <FormControl
          variant="outlined"
          fullWidth
          className={`select-field ${field.value ? 'filled' : ''}`}
          disabled={props.isdisabled}
        >
          <InputLabel>{props.label}</InputLabel>
          <Select
            {...field}
            {...props}
            disabled={props.isdisabled}
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
                );
              }
            }}
            // input={
            //   <FilledInput label={props.label} name={field.name} fullWidth />
            // }
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
          >
            {props.defaultNone &&
              props.fieldvalues &&
              props.fieldvalues.length > 0 ? (
              <MenuItem
                className="uiSelectOption"
                value=""
              // style={{ minHeight: '20px', background: '#aba8a8' }}
              >
                <i>Choose option</i>
              </MenuItem>
            ) : null}
            {props.fieldvalues &&
              props.fieldvalues.length > 0 &&
              props.fieldvalues
                .filter((someValue) => !!someValue)
                .map((option) =>
                (Object.prototype.hasOwnProperty.call(option, 'value') ? (
                  <MenuItem
                    className="uiSelectOption"
                    key={option.value}
                    value={option.value}
                  >
                    <Grid className="imgClass">
                      {option.label}
                      {option.issuerImg &&
                        <img src={`${option.issuerImg}`} width="40" height="24" />}
                    </Grid>


                  </MenuItem>
                ) : (
                  <MenuItem
                    className="uiSelectOption"
                    key={option}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                )),
                )}
          </Select>
        </FormControl>
      </div>
    </React.Fragment>
  );
};

const SelectInput = (props) => {
  const selectField = (
    <Field
      name={props.fieldName}
      label={props.fieldLabel}
      id={props.fieldID}
      component={renderSelectField}
      fieldvalues={props.optionsList}
      isSingleDefault={props.isSingleDefault}
      onChange={props.fieldOnChange}
      isdisabled={props.isdisabled}
      defaultNone={props.defaultNone}
      value={props.fieldValue}
    />
  );

  return <div>{selectField}</div>;
};

// Type Checking for the Props
SelectInput.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldOnChange: PropTypes.func,
  isSingleDefault: PropTypes.bool,
  // imgURL: PropTypes.string
};

// Specify the default Props values
SelectInput.defaultProps = {
  fieldName: '',
  fieldLabel: '',
  fieldID: '',
  isSingleDefault: false,
  // imgURL: ''
};

export default SelectInput;
