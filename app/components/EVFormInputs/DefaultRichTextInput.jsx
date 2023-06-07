import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    'INLINE_STYLE_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
    'LINK_BUTTONS',
    'BLOCK_TYPE_DROPDOWN',
    'HISTORY_BUTTONS',
  ],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
  ],
};
const DefaultRichTextInput = ({
  field,
  onChange,
  form: {
    setFieldValue, values, setFieldTouched, touched
  },
  ...props
}) => {
  const [eVal, seteVal] = useState(RichTextEditor.createEmptyValue());
  return (
    <RichTextEditor
      {...field}
      {...props}
      variant="filled"
      fullWidth
      value={props.filedValue ? props.filedValue : eVal}
      className="new-post-editor"
      disabled={props.isDisabled}
      type="string"
      multiline
      spellCheck
      onChange={(editor) => {
        setFieldValue(field.name, editor);
        seteVal(editor);
        if (onChange) {
          onChange(editor, values);
        }
      }}
      toolbarConfig={toolbarConfig}
    />
  );
};

export default DefaultRichTextInput;
