import { createTheme } from '@mui/material';
import _ from 'lodash';
import variables from 'styles/variables.module.scss';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: _.toNumber(variables.mobile),
      tablet: _.toNumber(variables.tablet),
      laptop: _.toNumber(variables.laptop),
      desktop: _.toNumber(variables.desktop)
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium'
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: variables.link,
          textDecoration: 'underline',
          textDecorationColor: variables.link,
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true
      }
    }
  },
  palette: {
    primary: { main: variables.primary },
    secondary: { main: variables.secondary },
    error: { main: variables.error },
    warning: { main: variables.warning },
    success: { main: variables.success },
    info: { main: variables.info },
    dark: { main: variables.dark },
    light: { main: variables.light },
    link: variables.link
  },
  typography: {
    allVariants: { color: variables.text },
    openSans: 'Open Sans Variable',
    tenorSans: 'Tenor Sans',
    fontFamily: ['Open Sans Variable'],
    button: { fontFamily: 'Tenor Sans' },
    link: { color: variables.link },
    h1: {
      color: variables.primary,
      fontSize: 32,
      textTransform: 'uppercase',
      fontFamily: 'Tenor Sans'
    },
    h2: {
      color: variables.success,
      fontSize: 28,
      fontFamily: 'Tenor Sans'
    },
    h3: {
      fontSize: 24,
      fontFamily: 'Tenor Sans'
    },
    h4: {
      fontSize: 22,
      fontFamily: 'Tenor Sans'
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Tenor Sans'
    },
    h6: {
      fontSize: 18,
      fontFamily: 'Tenor Sans'
    },
    subtitle1: {
      fontSize: 18,
      fontFamily: 'Tenor Sans'
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: 'Tenor Sans'
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 12
    },
    ul: {
      listStyle: 'disc inside none',
      paddingRight: 10
    },
    ol: {
      listStyle: 'decimal inside none',
      paddingRight: 10
    }
  }
});

export { theme };
