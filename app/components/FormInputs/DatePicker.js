/* eslint-disable eqeqeq */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/** Date and Time Pickers */

import * as React from 'react';
import { Field } from 'formik';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment } from '@material-ui/core';
import Event from '@material-ui/icons/Event';
import './style.scss';

const customstyles = {
  datapicker: {
    // background: '#EDF1F4',
    // width: '260px',
    // height: '45px'
  },
};

const DatePickerField = ({ field, form, ...other }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    {/* DatePicker with required format */}
    {
      (other.disablepast =
        typeof other.disablepast === 'string'
          ? other.disablepast == 'true'
          : other.disablepast)
    }
    {/* Changing the below line to fix issue in Order Management */}
    {/* {(other.disabled = !other.disablepast && other.disabledate)} */}
    {(other.disabled = other.disabledate)}
    {other.datetype === 'date' ? (
      <DatePicker
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Event />
              </IconButton>
            </InputAdornment>
          ),
        }}
        clearable={other.clearable}
        disablePast={other.disablepast}
        disableFuture={other.disableFuture}
        disabled={other.disabled}
        name={field.name}
        value={field.value}
        style={customstyles.datapicker}
        placeholder={other.placeholder}
        format={other.dateformat || 'yyyy/MM/dd'}
        onChange={(date) => form.setFieldValue(field.name, date, true)}
        mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
        // maxDate={field.maxDate ? new Date(field.maxDate) : null}
        minDate={other.minDate ? new Date(other.minDate) : null}
        className={`text-field ${field.value ? 'filled' : ''}`}
        {...other}
        inputVariant="outlined"
      />
    ) : (
      ''
    )}

    {other.datetype === 'time' ? (
      <TimePicker
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Event />
              </IconButton>
            </InputAdornment>
          ),
        }}
        seconds
        timeformat={other.timeformat}
        label={other.label}
        disabled={other.disabled}
        value={field.value}
        disableOpenOnEnter={other.disableOpenOnEnter}
        placeholder={other.placeholder}
        timemask={other.timemask}
        // onError={(_, error) => form.setFieldError(field.name, error)}
        onChange={(time) => form.setFieldValue(field.name, time, true)}
        className={`text-field ${field.value ? 'filled' : ''}`}
        inputVariant="outlined"
      />
    ) : (
      ''
    )}

    {/* DatePicker along with time */}

    {other.datetype === 'datewithtime' ? (
      <DateTimePicker
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Event />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={field.value}
        disablePast={other.disablepast}
        keyboard={other.keyboard}
        disabled={other.disabled}
        label={other.label}
        // onError={(error, value) => {
        //   if (error) {
        //     form.setFieldError(field.name, error);
        //   }
        // }}
        onChange={(time) => form.setFieldValue(field.name, time, true)}
        className={`text-field ${field.value ? 'filled' : ''}`}
        format={other.dateformat || 'yyyy/MM/dd HH:mm'}
        mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
        // maxDate={field.maxDate ? field.maxDate : null}
        // maxDate={field.maxDate}
        // minDate={field.minDate ? field.minDate : null}
        // showTodayButton
        clearable
        inputVariant="outlined"
      />
    ) : (
      // <DateTimePicker
      //   autoOk
      //   ampm={false}
      //   disableFuture
      //   value={field.value}
      //   onChange={time => form.setFieldValue(field.name, time, true)}
      //   label="24h clock"
      // />
      ''
    )}
  </MuiPickersUtilsProvider>
);

const EvDatePicker = (props) => (
  <React.Fragment>
    <Field
      component={DatePickerField}
      name={props.name}
      keyboard={props.keyboard}
      clearable={props.clearable}
      disablepast={props.disablepast}
      disableFuture={props.disableFuture}
      disabledate={props.disabledate}
      dateformat={props.dateformat}
      timeformat={props.timeformat}
      datetype={props.datetype}
      label={props.label}
      mask={props.datemask}
      timemask={props.timemask}
      placeholder={props.placeholder}
      id={props.fieldID}
      // maxDate={props.maxDate ? new Date(props.maxDate) : null}
      minDate={props.minDate}
    />
  </React.Fragment>
);

export default EvDatePicker;

// Type Checking for the Props.
EvDatePicker.propTypes = {
  name: PropTypes.string,
  keyboard: PropTypes.bool,
  clearable: PropTypes.bool,
  disablepast: PropTypes.bool,
  format: PropTypes.string,
  dateformat: PropTypes.string,
  datetype: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
  timemask: PropTypes.string,
  placeholder: PropTypes.string,
  disabledate: PropTypes.bool,
  fieldID: PropTypes.string,
};

// Specify the default Props values.
EvDatePicker.defaultProps = {
  name: '',
  keyboard: false,
  clearable: true,
  disablepast: false,
  dateformat: '',
  timeformat: '',
  datetype: '',
  label: '',
  mask: '',
  timemask: '',
  placeholder: '',
  disabledate: false,
};
