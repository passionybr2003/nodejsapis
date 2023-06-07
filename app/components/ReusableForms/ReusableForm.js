/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Form } from 'formik';
import { Grid, Typography, Button, Tooltip } from '@material-ui/core';
import {
  Email,
  EvDatePicker,
  TextInput,
  PhoneNumber,
  SelectInput,
  SwitchInput,
  CheckboxInput,
  MultipleSelectInput,
  TextArea,
} from 'components/FormInputs';

import PromotionAttributeDetails from 'containers/PromotionAttributeDetails/PromotionAttributeDetails';
import ProductAttributeDetails from 'containers/ProductAttributeDetails/ProductAttributeDetails';
import UpGradeDownGrade from 'containers/UpGradeDownGrade';
import AppChannelDetails from 'containers/AppChannelDetails/AppChannelDetails';
import FileUploadInput from 'containers/FileUploadInput/FileUploadInput';
import TransferListThreeLevel from 'containers/TransferList/TransferListThreeLevel';
import MultiFileUpload from 'containers/FileProcessing/MultiFileBase64';
import EncrDecrFile from 'containers/FileProcessing/EncrDecrFile';
import HelpIcon from 'images/help-icon.svg';
import { history } from 'helpers';
/* import { FileFileDownload } from 'material-ui/svg-icons';
import masterData from '../../config/masterData'; */
import './style.scss';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
  fullWidthLabel: {
    width: '100%',
    paddingBottom: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid5: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '20%',
    },
  },
  button: {
    margin: 5,
    '& span': {
      fontWeight: 'bold',
    },
    '&:hover': {
      background: 'red',
    },
  },
  align: {
    position: 'relative',
  },
  posRelative: {
    poistion: 'relative',
  },
});
let fieldsList = null;
const GetFields = (data) =>
  Object.keys(data.fields).map((index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
      {data.fields[index].map((fieldObject) => {
        fieldsList = fieldObject.data;
        const rowLabel = fieldObject.lable ? (
          <div className={data.props.props.classes.posRelative}>
            {!fieldObject.isMultipleLablesExists ? (
              <div className={data.props.props.classes.fullWidthLabel}>
                <Typography
                  variant="h5"
                  className={`title_head ${fieldObject.className}`}
                >
                  {fieldObject.lable}
                  {fieldObject.tooltip ? (
                    <Tooltip
                      title={fieldObject.tooltip}
                      placement="bottom"
                      disableFocusListener
                      disableTouchListener
                    >
                      <img alt="help" src={HelpIcon} className="help_icons" />
                    </Tooltip>
                  ) : (
                    ''
                  )}
                </Typography>
              </div>
            ) : (
              <Grid container spacing={2}>
                {fieldObject.labels &&
                  fieldObject.labels.map((label) => {
                    if (typeof label === 'string') {
                      return (
                        <Grid
                          key={label}
                          item
                          xs={12 / fieldObject.labels.length}
                          sm={12 / fieldObject.labels.length}
                          md={12 / fieldObject.labels.length}
                          lg={12 / fieldObject.labels.length}
                        >
                          <Typography
                            variant="h5"
                            className={`title_head ${fieldObject.className}`}
                          >
                            {label}
                          </Typography>
                        </Grid>
                      );
                    } else if (typeof label === 'object') {
                      const tempVar = (
                        <Grid
                          key={label.fieldName}
                          item
                          xs={12 / fieldObject.labels.length}
                          sm={12 / fieldObject.labels.length}
                          md={12 / fieldObject.labels.length}
                          lg={12 / fieldObject.labels.length}
                        >
                          <Typography
                            variant="h5"
                            className={`title_head ${fieldObject.className}`}
                          >
                            {label.text}
                          </Typography>
                        </Grid>
                      );
                      if (label.isConditionalDepedentField) {
                        if (label.exactMatchValue) {
                          if (
                            label.exactMatchValue.indexOf(
                              data.formikProps.values[label.exactMatchField],
                            ) !== -1 &&
                            label.conditionalFieldValue.indexOf(
                              data.formikProps.values[
                                label.conditionalFieldName
                              ],
                            ) !== -1
                          ) {
                            return tempVar;
                          }
                        } else if (
                          label.conditionalFieldValue.indexOf(
                            data.formikProps.values[label.conditionalFieldName],
                          ) !== -1
                        ) {
                          return tempVar;
                        }
                      } else {
                        return tempVar;
                      }
                    }
                    return '';
                  })}
              </Grid>
            )}
          </div>
        ) : (
          ''
        );
        const fieldGroup = (
          <Grid
            className={fieldObject.backgroundColor ? 'lightBackground' : null}
            container
            spacing={2}
          >
            {' '}
            {fieldsList.map((field, index11) => {
              // eslint-disable-next-line react/no-array-index-key
              const tempVar = (
                <Grid
                  key={index11}
                  item
                  xs={field.isTwelveColumn ? field.xs : 12}
                  sm={field.isTwelveColumn ? field.sm : 12}
                  md={field.isTwelveColumn ? field.md : 12}
                  lg={field.isTwelveColumn ? field.lg : 12}
                  className={
                    field.isTwelveColumn ? '' : data.props.props.classes.grid5
                  }
                >
                  {
                    {
                      Email: (
                        <div className={data.props.props.classes.align}>
                          <Email
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            className={field.className}
                            isdisabled={field.isdisabled}
                            fieldLabel={field.fieldLabel}
                            fieldType={field.fieldType}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      TextInput: (
                        <div className={data.props.props.classes.align}>
                          <TextInput
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            isdisabled={field.isdisabled}
                            fieldLabel={field.fieldLabel}
                            fieldType={field.fieldType}
                            fieldMask={field.mask}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      PhoneNumber: (
                        <div className={data.props.props.classes.align}>
                          <PhoneNumber
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            isdisabled={field.isdisabled}
                            fieldLabel={field.fieldLabel}
                            fieldType={field.fieldType}
                            fieldMask={field.mask}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      TextArea: (
                        <div className={data.props.props.classes.align}>
                          <TextArea
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            isdisabled={field.isdisabled}
                            fieldLabel={field.fieldLabel}
                            fieldType={field.fieldType}
                            rowsMax={field.rowsMax}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      Password: (
                        <div className={data.props.props.classes.align}>
                          <div className="form-control">
                            <TextInput
                              fieldID="password"
                              fieldName="password"
                              fieldLabel="Password *"
                              fieldType="password"
                              showPassword
                            />
                            <ErrorMessage
                              name="password"
                              component="span"
                              className="required"
                            />
                          </div>
                          {/* <TextInput fieldID={field.fieldID} fieldName={field.fieldName} isdisabled={field.isdisabled} fieldLabel={field.fieldLabel} fieldType={field.fieldType} showPassword /> */}
                          {/* <ErrorMessage name={field.fieldName} component="span" className="required" /> */}
                        </div>
                      ),
                      DatePicker: (
                        <div className={data.props.props.classes.align}>
                          <EvDatePicker
                            className={field.className}
                            name={field.fieldName}
                            fieldID={field.fieldID}
                            clearable={field.clearable}
                            disablepast={field.disablepast}
                            disabledate={field.disabledate}
                            isdisabled={field.isdisabled}
                            dateformat={field.dateformat}
                            datetype={field.datetype}
                            label={field.fieldLabel}
                            datemask={
                              field.datemask
                                ? field.datemask
                                : [
                                    /\d/,
                                    /\d/,
                                    '/',
                                    /\d/,
                                    /\d/,
                                    '/',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                  ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      Select: (
                        <div className={data.props.props.classes.align}>
                          <SelectInput
                            fieldName={field.fieldName}
                            fieldID={field.fieldID}
                            fieldLabel={field.fieldLabel}
                            optionsList={field.optionsList}
                            isSingleDefault={field.isSingleDefault || false}
                            isdisabled={field.isdisabled}
                            className={field.className}
                            onChange={field.onChange}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      MultipleSelect: (
                        <div className={data.props.props.classes.align}>
                          <MultipleSelectInput
                            fieldName={field.fieldName}
                            fieldID={field.fieldID}
                            fieldLabel={field.fieldLabel}
                            optionsList={field.optionsList}
                            fieldvalues={field.fieldName}
                            isdisabled={field.isdisabled}
                            className={field.className}
                            value={
                              data.props.props.formSchema.initialValues[
                                field.fieldName
                              ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      Switch: (
                        <div className={data.props.props.classes.align}>
                          <Typography
                            variant="h5"
                            // color="primary"
                            className="switchButtonContent medium textColor"
                          >
                            {field.fieldLabel} &nbsp;&nbsp;&nbsp;
                            <SwitchInput
                              fieldName={field.fieldName}
                              onChange={field.onChange}
                              fieldColor={field.fieldColor}
                              isdisabled={field.isdisabled}
                              className={field.className}
                            />
                            {field.tooltip ? (
                              <Tooltip
                                title={field.tooltip}
                                placement="bottom"
                                disableFocusListener
                                disableTouchListener
                              >
                                <img
                                  alt="help"
                                  src={HelpIcon}
                                  className="help_icons"
                                />
                              </Tooltip>
                            ) : (
                              ''
                            )}
                          </Typography>
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      LabelText: (
                        <div className={data.props.props.classes.align}>
                          <Typography
                            variant="h5"
                            // color="primary"
                            className="switchButtonContent medium"
                          >
                            {field.fieldLabel} &nbsp;&nbsp;&nbsp;
                            {field.tooltip ? (
                              <Tooltip
                                title={field.tooltip}
                                placement="bottom"
                                disableFocusListener
                                disableTouchListener
                              >
                                <img
                                  alt="help"
                                  src={HelpIcon}
                                  className="help_icons"
                                />
                              </Tooltip>
                            ) : (
                              ''
                            )}
                          </Typography>
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),

                      CheckBox: (
                        <div
                          className={`${data.props.props.classes.align} ${field.className}`}
                        >
                          <CheckboxInput
                            className={field.className}
                            tooltip={field.tooltip}
                            fieldName={field.fieldName}
                            isdisabled={field.isdisabled}
                            fieldColor={field.fieldColor}
                            fieldLabel={field.fieldLabel}
                            labelPlacement={field.labelPlacement}
                            value={
                              data.props.props.formSchema.initialValues[
                                field.fieldName
                              ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      PriceDetails: (
                        // <div className={data.props.props.classes.align}>
                        //   <PriceDetails className={field.className} fieldName={field.fieldName} fieldColor={field.fieldColor} isdisabled={field.isdisabled} fieldValue={data.initialValues[field.fieldName]} fieldLabel={field.fieldLabel} />
                        //   <ErrorMessage name={field.fieldName} component="span" className="required" />
                        // </div>
                        <div></div>
                      ),
                      AppChannelDetails: (
                        <div className={data.props.props.classes.align}>
                          <AppChannelDetails
                            className={field.className}
                            fieldName={field.fieldName}
                            fieldColor={field.fieldColor}
                            isdisabled={field.isdisabled}
                            fieldValue={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            appChannelData={
                              data.props.props.formSchema.initialValues[
                                field.fieldName
                              ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      ProductAttributeDetails: (
                        <div className={data.props.props.classes.align}>
                          <ProductAttributeDetails
                            className={field.className}
                            fieldName={field.fieldName}
                            fieldColor={field.fieldColor}
                            isdisabled={field.isdisabled}
                            fieldValue={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            productAttributeData={
                              data.props.props.formSchema.initialValues[
                                field.fieldName
                              ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      PromotionAttributeDetails: (
                        <div className={data.props.props.classes.align}>
                          <PromotionAttributeDetails
                            className={field.className}
                            fieldName={field.fieldName}
                            fieldColor={field.fieldColor}
                            isdisabled={field.isdisabled}
                            fieldValue={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            promotionAttributeData={
                              data.props.props.formSchema.initialValues[
                                field.fieldName
                              ]
                            }
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      TransferListThreeLevel: (
                        <div className={data.props.props.classes.align}>
                          <TransferListThreeLevel
                            className={field.className}
                            offersList={field.offersList}
                            isdisabled={field.isdisabled}
                            fieldValue={data.initialValues[field.fieldName]}
                            fieldName={field.fieldName}
                            fieldID={field.fieldID}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      UpGradeDownGrade: (
                        <div className={data.props.props.classes.align}>
                          <UpGradeDownGrade
                            className={field.className}
                            allProducts={field.allProducts}
                            isdisabled={field.isdisabled}
                            fieldValue={data.initialValues[field.fieldName]}
                            fieldName={field.fieldName}
                            fieldID={field.fieldID}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      FileUploadInput: (
                        <div className={data.props.props.classes.align}>
                          <FileUploadInput
                            className={field.className}
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            fieldFileURL={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            fieldFileType={field.fieldFileType}
                            fieldSimpleUI={field.fieldSimpleUI}
                            fieldStorageType={field.fieldStorageType}
                            isdisabled={field.isdisabled}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      EncrDecrFile: (
                        <div className={data.props.props.classes.align}>
                          <EncrDecrFile
                            className={field.className}
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            fieldFileURL={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            fieldFileType={field.fieldFileType}
                            fieldSimpleUI={field.fieldSimpleUI}
                            fieldStorageType={field.fieldStorageType}
                            isdisabled={field.isdisabled}
                            isThumbnailShowing={field.isThumbnailShowing}
                            setIsThumbnailShowing={field.setIsThumbnailShowing}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                      MultiFileUpload: (
                        <div className={data.props.props.classes.align}>
                          <MultiFileUpload
                            className={field.className}
                            fieldID={field.fieldID}
                            fieldName={field.fieldName}
                            filesObjectsArray={field.filesObjectsArray}
                            fieldFileURL={data.initialValues[field.fieldName]}
                            fieldLabel={field.fieldLabel}
                            fieldFileType={field.fieldFileType}
                            fieldSimpleUI={field.fieldSimpleUI}
                            fieldStorageType={field.fieldStorageType}
                            isdisabled={field.isdisabled}
                          />
                          <ErrorMessage
                            name={field.fieldName}
                            component="span"
                            className="required"
                          />
                        </div>
                      ),
                    }[field.type]
                  }
                </Grid>
              );
              if (field.isConditionalDepedentField) {
                if (field.exactMatchValue) {
                  if (
                    field.exactMatchValue.indexOf(
                      data.formikProps.values[field.exactMatchField],
                    ) !== -1 &&
                    field.conditionalFieldValue.indexOf(
                      data.formikProps.values[field.conditionalFieldName],
                    ) !== -1
                  ) {
                    return tempVar;
                  }
                } else if (
                  field.conditionalFieldValue.indexOf(
                    data.formikProps.values[field.conditionalFieldName],
                  ) !== -1
                ) {
                  return tempVar;
                }
              } else {
                return tempVar;
              }
              return null;
            })}
          </Grid>
        );
        if (fieldObject.isConditionalDepedentField) {
          if (
            fieldObject.conditionalFieldValue.indexOf(
              data.formikProps.values[fieldObject.conditionalFieldName],
            ) !== -1
          ) {
            const x = (
              <div
                className={
                  fieldObject.className
                    ? fieldObject.className
                    : 'defalutDivClass'
                }
              >
                {rowLabel} {fieldGroup}{' '}
              </div>
            );
            return [x];
          }
          return null;
        } else if (!fieldObject.isConditionalDepedentField) {
          const x = (
            <div
              className={
                fieldObject.className
                  ? fieldObject.className
                  : 'defalutDivClass'
              }
            >
              {rowLabel} {fieldGroup}{' '}
            </div>
          );
          return [x];
        }
        return null;
      })}
    </Grid>
  ));
const goBack = (data) => {
  if (data.cancelButton && data.cancelButton.func) {
    data.cancelButton.func();
  } else if (data.cancelButton && data.cancelButton.url) {
    history.push(data.cancelButton.url);
  } else {
    history.goBack(-1);
  }
};
const ReusableForm = (props) => (
  <Formik
    enableReinitialize
    validateOnChange={false}
    validateOnBlur
    validationSchema={props.formSchema.validationSchema}
    initialValues={{
      ...props.formSchema.initialValues,
    }}
    onSubmit={(values, { setSubmitting }) => {
      props.formSchema.onsubmit(values);
      setSubmitting(false);
    }}
    render={(formikProps) => {
      // bind the submission handler remotely
      props.bindSubmitForm(formikProps.submitForm);
      if (props.onChangeFormValue) {
        props.onChangeFormValue(formikProps);
      }

      return (
        <Form container autoComplete="off" className={props.classes.fullWidth}>
          <GetFields
            initialValues={props.formSchema.initialValues}
            fields={{ ...props.formSchema.fields }}
            props={{ props }}
            formikProps={{ ...formikProps }}
          />
          {props.formSchema.submitButton.show ? (
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-end"
              alignItems="center"
              className="pt-30"
            >
              <Grid item>
                {props.formSchema.cancelButton && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    type="reset"
                    id="cancel"
                    onClick={() => goBack(props.formSchema)}
                    className="btn large"
                  >
                    {props.formSchema.cancelButton &&
                    props.formSchema.cancelButton.text
                      ? props.formSchema.cancelButton.text
                      : 'Cancel'}
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // color={props.formSchema.submitButton.color}
                  type="submit"
                  id={props.formSchema.submitButton.id}
                  className={props.formSchema.submitButton.classNames}
                >
                  {props.formSchema.submitButton.text}
                </Button>
              </Grid>
            </Grid>
          ) : (
            ''
          )}
          {/* {JSON.stringify(formikProps.values)} */}
        </Form>
      );
    }}
  />
);

ReusableForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReusableForm);
