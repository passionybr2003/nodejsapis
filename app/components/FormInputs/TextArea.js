/* eslint-disable jsx-a11y/label-has-for */
import React, { useRef } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './style.scss';

const renderTextArea = ({
  field, // { name, value, onChange, onBlur },
  form: { setFieldValue },
  ...props
}) => {
  const textAreaRef = useRef(null);
  // const [classString, setClassString] = useState('text-area focus active');

  // const getClassName = (event, formFocus) => {
  //   if (formFocus) {
  //     setClassString('text-area focus active');
  //   } else if (event.target.value === '') {
  //     if (formFocus) {
  //       setClassString('text-area focus active');
  //     } else {
  //       setClassString('text-area');
  //     }
  //   } else {
  //     setClassString('text-area active');
  //   }
  // };

  return (
    <React.Fragment>
      <div className="textAreaField">
        <label htmlFor="text-area-field">{props.label}</label>
        <div className="textArea-field">
          <TextareaAutosize
            {...field}
            {...props}
            ref={textAreaRef}
            rows={props.rowsMax}
            multiline
            // onFocus={(event) => {
            //   getClassName(event, true);
            // }}
            onChange={(event) => {
              if (props.descriptionComponent === true) {
                // getClassName(event, true);
                setFieldValue(event.target.name, event.target.value);
                if (props.ondescChange) {
                  props.ondescChange(
                    event.target.name,
                    event.target.value,
                    setFieldValue,
                  );
                }
              } else {
                // getClassName(event, true);
                setFieldValue(event.target.name, event.target.value);
                if (field.onChange) {
                  field.onChange(
                    event.target.name,
                    event.target.value,
                    setFieldValue,
                  );
                }
              }
            }}
            // onBlur={(event) => {
            //   getClassName(event, false);
            // }}
            variant="filled"
            disabled={props.isdisabled}
            aria-label={props.label}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
const TextArea = (props) => (
  <Field
    name={props.fieldName}
    component={renderTextArea}
    label={props.fieldLabel}
    type={props.fieldType}
    id={props.fieldID}
    isdisabled={props.isdisabled}
    rowsMax={props.rowsMax}
    onChange={props.fieldOnChange}
    ondescChange={props.ondescChange}
    descriptionComponent={props.descriptionComponent}
    multiline
  />
);

// Type Checking for the Props.
TextArea.propTypes = {
  fieldName: PropTypes.string,
  fieldID: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldType: PropTypes.string,
  isdisabled: PropTypes.bool,
  descriptionComponent: PropTypes.bool,
};

// Specify the default Props values.
TextArea.defaultProps = {
  fieldName: ' ',
  fieldID: ' ',
  fieldLabel: ' ',
  fieldType: ' ',
  isdisabled: false,
  descriptionComponent: false,
};

export default TextArea;
