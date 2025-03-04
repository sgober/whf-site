import { createTheme } from '@mui/material';
import _ from 'lodash';
import palette from 'styles/variables.module.scss';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200
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
    },
    MuiTypography: {
      styleOverrides: {
        link: {
          textDecoration: 'underline',
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    }
  },
  palette: {
    primary: { main: palette.primaryMain },
    secondary: { main: palette.secondaryMain },
    error: { main: palette.errorMain },
    warning: { main: palette.warningMain },
    success: { main: palette.successMain },
    info: { main: palette.infoMain },
    dark: { main: palette.darkMain },
    light: { main: palette.lightMain }
  },
  typography: {
    allVariants: { color: palette.textMain },
    openSans: 'Open Sans Variable',
    tenorSans: 'Tenor Sans',
    fontFamily: ['Open Sans Variable'],
    button: { fontFamily: 'Tenor Sans' },
    h1: {
      color: palette.primaryMain,
      fontSize: 32,
      textTransform: 'uppercase',
      fontFamily: 'Tenor Sans'
    },
    h2: {
      color: palette.successMain,
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
