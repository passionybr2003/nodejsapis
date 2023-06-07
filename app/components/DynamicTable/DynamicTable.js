// // Old Version
// import React from 'react';
// import { Grid } from '@material-ui/core';
// import MUIDataTable from 'mui-datatables';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import evergentTheme from '../../themes/evergentTheme.json';
// import './style.scss';

// class DynamicTable extends React.Component {
//   getMuiTheme = () =>
//     createMuiTheme({
//       overrides: {
//         MUIDataTableToolbar: {
//           root: {
//             padding: '0',
//             minHeight: '34px',
//             '& button': {
//               color: evergentTheme.textColor,
//               padding: '4px',
//               fontSize: '11.25pt',
//               marginLeft: '10px',
//               borderRadius: '4px',
//             },
//           },
//           actions: {
//             position: 'relative',
//             zIndex: '2',
//             flex: 'inherit',
//           },
//           left: {
//             position: 'relative',
//             zIndex: '2',
//           },

//           // root: {
//           //   padding: '0 !important',
//           // },
//           filterPaper: {
//             padding: '0 !important',
//             width: '400px !important',
//           },
//           icon: {
//             MuiSvgIcon: {
//               root: {
//                 color: 'red',
//               },
//             },
//           },
//           titleText: {
//             fontSize: '9pt',
//             color: evergentTheme.textColor,
//             fontWeight: '400',
//             textTransform: 'uppercase',
//             fontFamily: evergentTheme.typography.fontFamily,
//             letterSpacing: '1px',
//           },
//         },
//         MUIDataTableSearch: {
//           searchIcon: {
//             color: evergentTheme.palette.primary.dark,
//           },
//         },
//         MuiInputBase: {
//           root: {
//             margin: '0',
//           },
//           input: {
//             color: evergentTheme.palette.primary.dark,
//           },
//         },
//         MUIDataTableToolbarSelect: {
//           root: {
//             visibility: 'hidden',
//           },
//         },
//         MUIDataTableHeadCell: {
//           root: {
//             fontSize: '9.75pt',
//             color: evergentTheme.primary,
//             fontWeight: '600 !important',
//             fontFamily: evergentTheme.typography.fontFamily,
//             border: '0',
//             lineHeight: '16px',
//             // whiteSpace:'pre'
//           },
//           data: {
//             fontWeight: '600',
//             fontFamily: evergentTheme.typography.fontFamily,
//           },
//           toolButton: {
//             height: 'auto',
//             alignItems: 'center',
//           },
//           sortActive: {
//             color: evergentTheme.primary,
//           },
//           sortAction: {
//             alignItems: 'center',
//           },
//           fixedHeaderCommon: {
//             backgroundColor: 'transparent',
//           },
//         },
//         MuiTableRow: {
//           root: {
//             // cursor: 'pointer',
//             MUIDataTableBodyCell: {
//               responsiveStacked: {
//                 fontWeight: '600',
//                 backgroundColor: 'green',
//               },
//             },
//           },
//         },
//         MUIDataTableBody: {
//           emptyTitle: {
//             fontSize: '9.75pt',
//             padding: '15px',
//           },
//         },
//         MuiTableCell: {
//           root: {
//             padding: '14px 10px 14px 10px',
//             borderBottom: 'none',
//           },
//           body: {
//             fontSize: '9.75pt',
//             color: evergentTheme.textColor,
//             fontWeight: '400',
//             fontFamily: evergentTheme.typography.fontFamily,
//           },
//         },
//         MuiTableBody: {
//           root: {
//             '& tr:nth-child(even)': {
//               backgroundColor: 'transparent',
//               border: '0',
//             },
//             '& tr:nth-child(odd)': {
//               backgroundColor: '#f6f6fa',
//               border: '0',
//             },
//             '& td': {
//               border: '0',
//             },
//           },
//         },
//         MUIDataTablePagination: {
//           root: {
//             padding: '0 !important',
//             color: `${evergentTheme.textColor} !important`,
//             fontSize: '10.5pt',
//             fontWeight: '400',
//             fontFamily: evergentTheme.typography.fontFamily,
//             border: '0',
//           },
//         },
//         MUIDataTableViewCol: {
//           title: {
//             color: evergentTheme.textColor,
//             fontWeight: 500,
//           },
//           label: {
//             color: evergentTheme.textColor,
//           },
//         },
//         MuiInputLabel: {
//           formControl: {
//             color: evergentTheme.palette.primary.dark,
//             fontWeight: '300',
//             // transform: 'translate(12px, 16px) scale(1)',
//             fontSize: '13px',
//             paddingRight: '20px',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             whiteSpace: 'nowrap',
//             width: '100%',
//             lineHeight: '14px',
//           },
//         },
//         MUIDataTableFilter: {
//           selectRoot: {
//             marginTop: '5px',
//           },
//           title: {
//             margin: '0 !important',
//             color: evergentTheme.palette.primary.dark,
//           },
//         },
//         MuiMenuItem: {
//           root: {
//             paddingLeft: '10px',
//           },
//         },
//         MuiSelect: {
//           select: {
//             color: evergentTheme.palette.primary.dark,
//             fontSize: '16px',
//             fontWeight: '500',
//           },
//           icon: {
//             color: evergentTheme.palette.primary.dark,
//           },
//         },
//         MuiListItemText: {
//           primary: {
//             fontSize: '9.75pt',
//             color: evergentTheme.palette.primary.dark,
//             fontWeight: 400,
//           },
//         },
//         MuiTableSortLabel: {
//           root: {
//             color: `${evergentTheme.textColor} !important`,
//             width: '16px',
//           },
//           icon: {
//             color: `${evergentTheme.textColor} !important`,
//             fontSize: '16px',
//           },
//           active: {
//             color: `${evergentTheme.textColor} !important`,
//           },
//         },
//         MuiGridList: {
//           root: {
//             margin: '-8px !important',
//           },
//         },
//         MuiGridListTile: {
//           root: {
//             padding: '8px !important',
//           },
//         },
//         // MUIDataTableToolbar: {
//         //   root: {
//         //     padding: '0 !important',
//         //   },
//         //   filterPaper: {
//         //     padding: '0 !important',
//         //     maxWidth: '400px !important'
//         //   }
//         // },

//         MuiTablePagination: {
//           root: {
//             padding: '0 !important',
//             color: evergentTheme.textColor,
//             fontSize: '10.5pt',
//             fontWeight: '400',
//             fontFamily: evergentTheme.typography.fontFamily,
//             border: '0',
//           },
//           caption: {
//             fontSize: '9.75pt',
//             fontFamily: evergentTheme.typography.fontFamily,
//           },
//           select: {
//             fontSize: '9.75pt',
//           },
//           toolbar: {
//             paddingLeft: 0,
//             fontSize: '10.5pt',
//             '& button': {
//               color: evergentTheme.textColor,
//               padding: '4px',
//               fontSize: '11.25pt',
//               marginLeft: '10px',
//               borderRadius: '4px',
//             },
//             '& button:disabled': {
//               color: '#ddd',
//             },
//           },
//           spacer: {
//             flexGrow: '0',
//             flexShrink: '0',
//             flexBasis: '0',
//           },
//           actions: {
//             flexGrow: '1',
//             flexShrink: '1',
//             flexBasis: '100%',
//             display: 'flex',
//             justifyContent: 'flex-end',
//           },
//         },
//         MUIDataTableSelectCell: {
//           headerCell: {
//             backgroundColor: 'transparent',
//           },
//           fixedHeaderCommon: {
//             backgroundColor: 'transparent',
//           },
//           expandDisabled: {
//             // Soft hide the button.
//             visibility: 'hidden',
//           },
//         },
//       },
//       MuiTypography: {
//         root: {
//           fontFamily: evergentTheme.typography.fontFamily,
//         },
//       },
//       typography: {
//         useNextVariants: true,
//       },
//       palette: {
//         primary: {
//           light: evergentTheme.textColor,
//           main: evergentTheme.textColor,
//           dark: evergentTheme.textColor,
//           contrastText: '#fff',
//         },
//         secondary: {
//           light: evergentTheme.palette.secondary.main,
//           main: evergentTheme.palette.secondary.main,
//           dark: evergentTheme.palette.secondary.main,
//           contrastText: '#fff',
//         },
//       },
//     });

//   render() {
//     const selectableRows = this.props.options.selectableRows || 'none';
//     const rowsPerPage = this.props.options.rowsPerPage || 10;
//     const options = {
//       /* setRowProps: func - Useful when we have something with row like adding classes to tr tag. */
//       ...this.props.options,
//       selectableRows,
//       rowsPerPage,
//       filterType: 'multiselect',
//       downloadOptions: {
//         filename:
//           this.props.options.downloadOptions &&
//           this.props.options.downloadOptions.filename
//             ? this.props.options.downloadOptions.filename
//             : 'tableDownload.csv',
//         separator: ',',
//       },
//       selectableRowsOnClick: false,
//       download: this.props.options.download
//         ? this.props.options.download
//         : false,
//       filter: this.props.hasOwnProperty('hideFilter')
//         ? !this.props.hideFilter
//         : Boolean(this.props.data.length > 0),
//       search: this.props.hasOwnProperty('hideSearch')
//         ? !this.props.hideSearch
//         : Boolean(this.props.data.length > 0),
//       viewColumns: this.props.hasOwnProperty('hideViewColumns')
//         ? !this.props.hideViewColumns
//         : Boolean(this.props.data.length > 0),
//       print: false,
//       fixedSelectColumn: false,
//       pagination: this.props.hasOwnProperty('hidePagination')
//         ? !this.props.hidePagination
//         : Boolean(this.props.data.length > 0),
//       textLabels: {
//         body: {
//           noMatch: this.props.loading ? (
//             <CircularProgress className="circular_progress" color="primary" />
//           ) : (
//             this.props.noDataText
//           ),
//         },
//       },
//       elevation: 0,
//     };

//     const filterClass = this.props.data.length > 0;
//     return (
//       <Grid
//         className={`dynamicTable ${
//           this.props.options.onRowClick && this.props.data.length > 0
//             ? 'showCursor'
//             : ''
//         } ${filterClass ? '' : 'noFilters'} ${this.props.className}`}
//       >
//         <MuiThemeProvider theme={this.getMuiTheme()}>
//           <MUIDataTable
//             columns={this.props.columns}
//             options={options}
//             data={this.props.data}
//             title={this.props.title}
//           />
//         </MuiThemeProvider>
//       </Grid>
//     );
//   }
// }

// export default DynamicTable;

import React from 'react';
import { Grid } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import evergentTheme from '../../themes/evergentTheme.json';
import './style.scss';

const DynamicTable = (props) => {
  const [tableOptions, setTableOptions] = React.useState({});
  const [theme, setTheme] = React.useState({});

  const SearchIcon = () => (
    <svg
      className="MuiSvgIcon"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path d="M13.15,22.45a9,9,0,1,1,9-9A9.06,9.06,0,0,1,13.15,22.45Zm0-17.09a8,8,0,1,0,8,8.05A8.06,8.06,0,0,0,13.15,5.36Z" />
      <polygon points="20.59 19.71 18.37 21.55 23.57 27.45 25.74 25.62 20.59 19.71" />
    </svg>
  );

  const FilterIcon = () => (
    <svg
      className="MuiSvgIcon"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <rect x="3.95" y="8.41" width="23.56" height="1" />
      <rect x="7.47" y="15.01" width="16.54" height="1" />
      <rect x="10.52" y="21.61" width="10.42" height="1" />
    </svg>
  );

  const ViewColumnIcon = () => (
    <svg
      className="MuiSvgIcon"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <rect x="7.11" y="4.56" width="0.85" height="20.81" />
      <rect x="14.75" y="4.65" width="0.85" height="20.81" />
      <rect x="22.38" y="4.56" width="0.85" height="20.81" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg
      className="MuiSvgIcon"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <polygon points="10.67 3.01 19.2 3.01 19.2 11.56 24.79 11.56 15.05 21.3 5.21 11.46 10.8 11.46 10.67 3.01" />
      <rect x="5.21" y="24.21" width="19.58" height="2.75" />
    </svg>
  );

  const PrintIcon = () => (
    <svg
      className="MuiSvgIcon"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path d="M24.74,22.39H23v-1c.17,0,1.87,0,3.22,0a.7.7,0,0,0,.4-.11.83.83,0,0,0,.28-.59V11.37a.75.75,0,0,0-.79-.77H5.36c-.57,0-.66.59-.67.71v8.87c0,.83.43,1,1,1a1,1,0,0,1,.29.07c.31,0,1.6,0,2.7,0l0,1a12.54,12.54,0,0,1-3.12,0,1.9,1.9,0,0,1-1.86-2V11.27A1.7,1.7,0,0,1,5.36,9.6H26.11a1.75,1.75,0,0,1,1.77,1.77V20.7a1.8,1.8,0,0,1-.7,1.39,1.7,1.7,0,0,1-1,.29Z" />
      <path d="M23.47,26.69H8.12v-10H23.47Zm-14.35-1H22.47v-8H9.12Z" />
      <rect x="12.13" y="21.2" width="7.28" height="1" />
      <polygon points="23.34 10.1 22.34 10.1 22.34 5.53 9.12 5.53 9.12 10.1 8.12 10.1 8.12 4.53 23.34 4.53 23.34 10.1" />
      <circle cx="22.79" cy="13.74" r="0.59" />
    </svg>
  );

  const components = {
    icons: {
      SearchIcon,
      PrintIcon,
      DownloadIcon,
      FilterIcon,
      ViewColumnIcon,
    },
  };

  React.useEffect(() => {
    const getMuiTheme = () =>
      createMuiTheme({
        overrides: {
          MUIDataTableToolbar: {
            root: {
              padding: '0',
              minHeight: '34px',
              '& button': {
                color: evergentTheme.textColor,
                padding: '4px',
                fontSize: '11.25pt',
                marginLeft: '10px',
                borderRadius: '4px',
              },
            },
            actions: {
              position: 'relative',
              zIndex: '2',
              flex: 'inherit',
            },
            left: {
              position: 'relative',
              zIndex: '2',
            },

            // root: {
            //   padding: '0 !important',
            // },
            filterPaper: {
              padding: '0 !important',
              width: '400px !important',
            },
            icon: {
              MuiSvgIcon: {
                root: {
                  // color: 'red',
                  color: evergentTheme.textColor,
                },
              },
            },
            titleText: {
              fontSize: '9pt',
              color: evergentTheme.textColor,
              fontWeight: '400',
              textTransform: 'uppercase',
              fontFamily: evergentTheme.typography.fontFamily,
              letterSpacing: '1px',
            },
          },
          MUIDataTableSearch: {
            searchIcon: {
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,
            },
          },
          MuiInputBase: {
            root: {
              margin: '0',
            },
            input: {
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,
            },
          },
          MUIDataTableToolbarSelect: {
            root: {
              visibility: props.customToolbar ? 'initial' : 'hidden',
              display: props.customToolbar ? 'none' : 'block',
              '& > div': {
                display: 'inline-block',
              },
              '& > button': {
                display: 'none',
              },
            },
          },
          MUIDataTableHeadCell: {
            root: {
              fontSize: '9.75pt',
              color: evergentTheme.textColor,
              fontWeight: '600 !important',
              fontFamily: evergentTheme.typography.fontFamily,
              border: '0',
              lineHeight: '16px',
              // whiteSpace:'pre'
            },
            data: {
              fontWeight: '600',
              fontFamily: evergentTheme.typography.fontFamily,
              lineHeight: '20px',
              fontSize: '9.75pt',
            },
            toolButton: {
              height: 'auto',
              alignItems: 'center',
            },
            sortActive: {
              // color: evergentTheme.primary,
              color: evergentTheme.textColor,
            },
            sortAction: {
              alignItems: 'center',
            },
            fixedHeaderCommon: {
              backgroundColor: 'transparent',
            },
          },
          MuiTableRow: {
            root: {
              // cursor: 'pointer',
              MUIDataTableBodyCell: {
                responsiveStacked: {
                  fontWeight: '600',
                  backgroundColor: 'green',
                },
              },
            },
          },
          MUIDataTableBody: {
            emptyTitle: {
              fontSize: '9.75pt',
              padding: '15px',
            },
          },
          MuiTableCell: {
            root: {
              padding: '10px',
              borderBottom: 'none',
            },
            body: {
              fontSize: '9.75pt',
              color: evergentTheme.textColor,
              fontWeight: '400',
              fontFamily: evergentTheme.typography.fontFamily,
            },
          },
          MuiButton: {
            text: {
              paddingTop: 0,
              paddingBottom: 0,
            },
          },
          MuiTableBody: {
            root: {
              '& tr:nth-child(even)': {
                backgroundColor: 'transparent',
                border: '0',
              },
              '& tr:nth-child(odd)': {
                backgroundColor: '#f6f6fa',
                border: '0',
              },
              '& td': {
                border: '0',
              },
            },
          },
          MUIDataTablePagination: {
            root: {
              padding: '0 !important',
              color: `${evergentTheme.textColor} !important`,
              fontSize: '10.5pt',
              fontWeight: '400',
              fontFamily: evergentTheme.typography.fontFamily,
              border: '0',
            },
          },
          MUIDataTableViewCol: {
            title: {
              color: evergentTheme.textColor,
              fontWeight: 500,
            },
            label: {
              color: evergentTheme.textColor,
            },
          },
          MuiInputLabel: {
            formControl: {
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,
              fontWeight: '300',
              // transform: 'translate(12px, 16px) scale(1)',
              fontSize: '13px',
              paddingRight: '20px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
              lineHeight: '14px',
            },
          },
          MUIDataTableFilter: {
            selectRoot: {
              marginTop: '5px',
            },
            title: {
              margin: '0 !important',
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,
            },
          },
          MuiMenuItem: {
            root: {
              paddingLeft: '10px',
            },
          },
          MuiSelect: {
            select: {
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,

              fontSize: '16px',
              fontWeight: '500',
            },
            icon: {
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,
            },
          },
          MuiListItemText: {
            primary: {
              fontSize: '9.75pt',
              // color: evergentTheme.palette.primary.dark,
              color: evergentTheme.palette.textColor,

              fontWeight: 400,
            },
          },
          MuiTableSortLabel: {
            root: {
              color: `${evergentTheme.textColor} !important`,
              width: '16px',
            },
            icon: {
              color: `${evergentTheme.textColor} !important`,
              fontSize: '16px',
            },
            active: {
              color: `${evergentTheme.textColor} !important`,
            },
          },
          MuiGridList: {
            root: {
              margin: '-8px !important',
            },
          },
          MuiGridListTile: {
            root: {
              padding: '8px !important',
            },
          },
          // MUIDataTableToolbar: {
          //   root: {
          //     padding: '0 !important',
          //   },
          //   filterPaper: {
          //     padding: '0 !important',
          //     maxWidth: '400px !important'
          //   }
          // },

          MuiTablePagination: {
            root: {
              padding: '0 !important',
              color: evergentTheme.textColor,
              fontSize: '10.5pt',
              fontWeight: '400',
              fontFamily: evergentTheme.typography.fontFamily,
              border: '0',
            },
            caption: {
              fontSize: '9.75pt',
              fontFamily: evergentTheme.typography.fontFamily,
            },
            select: {
              fontSize: '9.75pt',
              color: evergentTheme.textColor,
            },
            selectIcon: {
              color: evergentTheme.textColor,
            },
            toolbar: {
              paddingLeft: 0,
              fontSize: '10.5pt',
              '& button': {
                color: evergentTheme.textColor,
                padding: '4px',
                fontSize: '11.25pt',
                marginLeft: '10px',
                borderRadius: '4px',
              },
              '& button:disabled': {
                color: '#ddd',
              },
            },
            spacer: {
              flexGrow: '0',
              flexShrink: '0',
              flexBasis: '0',
            },
            actions: {
              flexGrow: '1',
              flexShrink: '1',
              flexBasis: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            },
          },
          MUIDataTableSelectCell: {
            headerCell: {
              backgroundColor: 'transparent',
            },
            fixedHeaderCommon: {
              backgroundColor: 'transparent',
            },
            expandDisabled: {
              // Soft hide the button.
              visibility: 'hidden',
            },
          },
        },
        MuiTypography: {
          root: {
            fontFamily: evergentTheme.typography.fontFamily,
          },
        },
        typography: {
          useNextVariants: true,
        },
        palette: {
          primary: {
            light: evergentTheme.textColor,
            main: evergentTheme.textColor,
            dark: evergentTheme.textColor,
            contrastText: '#fff',
          },
          secondary: {
            light: evergentTheme.palette.secondary.main,
            main: evergentTheme.palette.secondary.main,
            dark: evergentTheme.palette.secondary.main,
            contrastText: '#fff',
          },
        },
      });
    setTheme(getMuiTheme());
  }, [props.customToolbar]);

  const filterClass = props.data.length > 0;

  React.useEffect(() => {
    const selectableRows = props.options.selectableRows || 'none';
    const rowsPerPage = props.options.rowsPerPage || 10;
    const options = {
      /* setRowProps: func - Useful when we have something with row like adding classes to tr tag. */
      ...props.options,
      selectableRows,
      selectToolbarPlacement: 'none',
      fixedHeader: true,
      rowsPerPage,
      filterType: 'multiselect',
      downloadOptions: {
        filename:
          props.options.downloadOptions &&
          props.options.downloadOptions.filename
            ? props.options.downloadOptions.filename
            : 'tableDownload.csv',
        separator: ',',
      },
      selectableRowsOnClick: false,
      // download: props.options.download ? props.options.download : false,
      download: Object.prototype.hasOwnProperty.call(props, 'hideDownload')
        ? !props.hideDownload
        : Boolean(props.data.length > 0),
      filter: Object.prototype.hasOwnProperty.call(props, 'hideFilter')
        ? !props.hideFilter
        : Boolean(props.data.length > 0),
      search: Object.prototype.hasOwnProperty.call(props, 'hideSearch')
        ? !props.hideSearch
        : Boolean(props.data.length > 0),
      viewColumns: Object.prototype.hasOwnProperty.call(
        props,
        'hideViewColumns',
      )
        ? !props.hideViewColumns
        : Boolean(props.data.length > 0),
      print: false,
      fixedSelectColumn: false,
      pagination: Object.prototype.hasOwnProperty.call(props, 'hidePagination')
        ? !props.hidePagination
        : Boolean(props.data.length > 0),
      textLabels: {
        body: {
          noMatch: props.loading ? (
            <CircularProgress className="circular_progress" color="primary" />
          ) : (
            props.noDataText
          ),
        },
      },
      elevation: 0,
    };
    setTableOptions(options);
  }, [props.options]);
  return (
    <Grid
      className={`dynamicTable ${
        props.options.onRowClick && props.data.length > 0 ? 'showCursor' : ''
      } ${filterClass ? '' : 'noFilters'} ${props.className}`}
    >
      <MuiThemeProvider theme={theme}>
        <MUIDataTable
          columns={props.columns}
          options={tableOptions}
          data={props.data}
          title={props.title}
          components={components}
        />
      </MuiThemeProvider>
    </Grid>
  );
};

export default DynamicTable;
