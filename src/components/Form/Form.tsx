import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from "react-hook-form";
import { Button, outlinedInputClasses, TextField, ThemeProvider } from "@mui/material";
import { ReactElement } from "react"
import { createTheme } from '@mui/material/styles';
import styles from "./Form.module.scss";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
}

export const Form = (): ReactElement<HTMLFormElement> => {
  const { handleSubmit, formState: { errors }, watch, control } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      name: "",
      phone: ""
    }
  });

  const themeOptions = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
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
  const [nameInput, emailInput, phoneInput] = watch(["name", "email", "phone"]);

  const onOkSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("OK:\n", data);
  }

  const onErrorSubmit: SubmitErrorHandler<IFormInput> = (err) => {
    console.error("ERROR:\n", err);
  };

  const isEmailError = () => {
    if (!emailInput) return true

    if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i)) return true

    return false
  };

  const isPhoneError = () => {
    if (!phoneInput) return true

    if (!phoneInput.match(/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/i)) return true

    return false
  };

  const isSubmitActive = () => {
    if (nameInput.length < 2) return false;

    if (errors.name?.type) return false;

    if (!isPhoneError()) return true;

    if (!isEmailError()) return true;

    return false;
  }

  return (
    <form onSubmit={handleSubmit(onOkSubmit, onErrorSubmit)} noValidate>
      <ThemeProvider theme={themeOptions}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true, pattern: /^[A-Za-z ]+$/i, minLength: 2 }}
          render={({ field }) =>
            <TextField
              id="name"
              color="info"
              label="Name"
              style={{
                marginBottom: "1rem"
              }}
              type="text"
              helperText={field.value && errors.name?.type}
              variant="outlined"
              error={!!field.value && !!errors.name?.type}
              fullWidth
              value={field.value}
              onChange={field.onChange}
              required
            />
          }
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: isPhoneError(), pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }}
          render={({ field }) =>
            <TextField
              id="email"
              color="info"
              label="Email"
              style={{
                marginBottom: "1rem"
              }}
              helperText={field.value && errors.email?.type}
              error={!!field.value && !!errors.email?.type}
              variant="outlined"
              fullWidth
              type="email"
              value={field.value}
              onChange={field.onChange}
              required
            />
          }
        />

        <Controller
          name="phone"
          control={control}
          rules={{ required: isEmailError(), pattern: /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/i }}
          render={({ field }) =>
            <TextField
              id="phone"
              color="info"
              label="Phone"
              style={{
                marginBottom: "1rem"
              }}
              helperText={field.value && errors.phone?.type}
              error={!!field.value && !!errors.phone?.type}
              variant="outlined"
              fullWidth
              type="tel"
              value={field.value}
              onChange={field.onChange}
              required
            />
          }
        />

        <Button
          disableRipple
          disabled={!isSubmitActive()}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
        {!isSubmitActive() && <span style={{
          display: "block",
          fontSize: "1.4rem",
          fontWeight: "300",
          color: "#F44336",
          marginTop: "1rem"
        }}>At least Name and Phone (or Email) field should be provided</span>}
      </ThemeProvider>
    </form>
  )
};