import { createTheme, outlinedInputClasses } from "@mui/material";

export const themeOptions = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--Text-mainColor': '#FFFFFF',
          '--TextField-brandBorderColor': '#EEF3FF',
          '--TextField-brandBorderHoverColor': '#FFFFFF',
          '--TextField-brandBorderFocusedColor': '#FFFFFF',
          '--TextField-error': '#F44336',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
          '& legend': {
            "maxWidth": "100% !important"
          }
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&::before, &::after': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '0.2rem solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&': {
            'transform': 'translate(1.4rem, -0.9rem) scale(0.75)',
          },
          '&.Mui-focused.Mui-error': {
            color: 'var(--TextField-error)'
          }

        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: ({ theme }) => ({
          color: theme.palette.text.secondary,
          // fontSize: '1.8rem',
          // fontWeight: 300
        }),
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          textTransform: "initial",
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#313341 !important",
          padding: "2rem 5rem"
        },

      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "2.6rem",
          fontWeight: 400,
          lineHeight: "2.8rem",
          color: "var(--Text-mainColor)",
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          fontWeight: 400,
          lineHeight: "2rem",
          color: "var(--Text- mainColor)",
          padding: "2rem"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center"
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2D76F9',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#EEF3FF',
    },
    info: {
      main: '#EEF3FF',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
  },
});
