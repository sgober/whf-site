import { createTheme } from '@mui/material';
import _ from 'lodash';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1250,
      xl: 1550
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
        variant: 'standard'
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
        variant: 'standard'
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
  // TODO: add palette
  // palette: {
  //   primary: {
  //     main: palette.primaryMain,
  //     light: palette.primaryLight,
  //     dark: palette.primaryDark,
  //     background: palette.primaryBackground
  //   },
  //   secondary: {
  //     main: palette.secondaryMain,
  //     light: palette.secondaryLight,
  //     dark: palette.secondaryDark,
  //     background: palette.secondaryBackground
  //   },
  //   error: {
  //     main: palette.errorMain,
  //     light: palette.errorLight,
  //     dark: palette.errorDark,
  //     background: palette.errorBackground
  //     // contrastText: palette.errorContrast
  //   },
  //   warning: {
  //     main: palette.warningMain,
  //     light: palette.warningLight,
  //     dark: palette.warningDark,
  //     background: palette.warningBackground
  //     // contrastText: palette.warningContrast
  //   },
  //   success: {
  //     main: palette.successMain,
  //     light: palette.successLight,
  //     dark: palette.successDark,
  //     background: palette.successBackground
  //     // contrastText: palette.successContrast
  //   },
  //   dark: {
  //     main: palette.primaryDark,
  //     contrastText: palette.primaryBackground
  //   },
  //   light: {
  //     main: palette.primaryLight,
  //     contrastText: palette.primaryBackground
  //   },
  //   info: {
  //     main: palette.infoMain,
  //     light: palette.infoLight,
  //     dark: palette.infoDark,
  //     background: palette.infoBackground
  //     // contrastText: palette.infoContrast
  //   },
  //   input: {
  //     main: palette.inputMain,
  //     border: palette.inputBorder,
  //     disabled: palette.disabled
  //   },
  //   table: {
  //     hover: palette.tableHover
  //   },
  //   text: {
  //     main: palette.textMain,
  //     secondary: palette.textSecondary,
  //     disabled: palette.disabled
  //   },
  //   black: palette.blackShade,
  //   white: palette.whiteShade
  // },
  typography: {
    roboto: 'Roboto',
    robotoCondensed: 'robotoCondensed',
    fontFamily: ['Roboto'],
    // button: {
    //   fontFamily: 'Barlow Semi Condensed'
    // },
    link: {
      fontFamily: 'Roboto'
    },
    h1: {
      fontSize: 32
    },
    h2: {
      fontSize: 28
    },
    h3: {
      fontSize: 24
    },
    h4: {
      fontSize: 22
    },
    h5: {
      fontSize: 20
    },
    h6: {
      fontSize: 18
    },
    subtitle1: {
      fontSize: 18
    },
    subtitle2: {
      fontSize: 16
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 12
    }
  }
});

export { theme };
