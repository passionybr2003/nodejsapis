/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList } from 'react-window';
import { Typography } from '@material-ui/core';

function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + 8,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

// Adapter for react-window
// eslint-disable-next-line prefer-arrow-callback
const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * 8}
          width="100%"
          key={itemCount}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node,
};

const useStyles = makeStyles({
  listbox: {
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const renderGroup = (params) => [
  <ListSubheader key={params.key} component="div">
    {params.key}
  </ListSubheader>,
  params.children,
];

export default function EVInfiniteAutoComplete(props) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(props.formikProps.initialValues[props.fieldName] || '');

  useEffect(() => {
    setSelectedOption(props.formikProps.initialValues[props.fieldName]);
  }, [props.formikProps.initialValues[props.fieldName]]);

  const handleChange = (event, value) => {
    setSelectedOption(value);
    props.formikProps.setFieldValue(props.fieldName, value);
    if (value === '') {
      // console.log('Cleared Input');
    }
  };

  return (
    <Autocomplete
      onInputChange={handleChange}
      id={props.fieldID}
      style={{ width: 300 }}
      inputValue={selectedOption}
      disableListWrap
      classes={classes}
      disabled={props.isDisabled}
      ListboxComponent={ListboxComponent}
      renderGroup={renderGroup}
      options={props.optionsList.map((option) => option.label)}
      getOptionLabel={(option) => option}
      // groupBy={(option) => option[0].toUpperCase()}
      renderInput={(params) => (
        <TextField {...params} value={selectedOption} name={props.fieldName} variant="outlined" label={props.fieldLabel} fullWidth />
      )}
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
      getOptionSelected={(option) => option.label == selectedOption}
    />
  );
}
