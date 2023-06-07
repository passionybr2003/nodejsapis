import React from 'react';
import { FastField } from 'formik';
import DefaultRichTextInput from './DefaultRichTextInput';

const RichTextInput = ({
  fieldName,
  fieldID,
  fieldLabel,
  isDisabled,
  filedValue,
  fileldChange,
  fileldOnBlur,
}) => (
  <FastField
    name={fieldName}
    component={DefaultRichTextInput}
    id={fieldID}
    label={fieldLabel}
    onChange={fileldChange}
    isDisabled={isDisabled}
    placeholder={fieldLabel}
    onblur={fileldOnBlur}
    filedValue={filedValue}
  />
);

export default RichTextInput;
