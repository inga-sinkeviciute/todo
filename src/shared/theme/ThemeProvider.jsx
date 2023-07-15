import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
const theme = {
  palette: {
    default: {
      dark: '#242739',
      main: '#1D1E2B',
      light: '#FFFFFF',
    },
    primary: {
      dark: '#72D989',
      main: '#98E3A9',
    },
    secondary: {
      main: '#534581',
      light: '#635299',
    },
    success: {
      main: '#38c0a8',
      light: '#41c8b0',
    },
    warning: {
      main: '#3a7ac3',
    },
    danger: {
      dark: '#2d222e',
      main: '#CF484B',
      light: '#d25457',
    },
    background: {
      dark: '#141429',
      main: '#aeb5cc',
      light: '#DCDFE9',
    },
    overlay: {
      dark: 'rgba(8, 8, 16, 0.6)',
    },
  },
  typography: {
    h1: {
      mobile: {
        fontSize: '36px',
        lineHeight: '36px',
        letterSpacing: '-2%',
      },
      tablet: {
        fontSize: '48px',
        lineHeight: '48px',
        letterSpacing: '-2%',
      },
      desktop: {
        fontSize: '58px',
        lineHeight: '58px',
        letterSpacing: '-2%',
      },
    },
    h2: {
      mobile: {
        fontSize: '28px',
        lineHeight: '28px',
        letterSpacing: '-2%',
      },
      tablet: {
        fontSize: '36px',
        lineHeight: '36px',
        letterSpacing: '-2%',
      },
      desktop: {
        fontSize: '40px',
        lineHeight: '40px',
        letterSpacing: '-2%',
      },
    },
    h3: {
      mobile: {
        fontSize: '24px',
        lineHeight: '24px',
        letterSpacing: '-1%',
      },
      tablet: {
        fontSize: '28px',
        lineHeight: '28px',
        letterSpacing: '-1%',
      },
      desktop: {
        fontSize: '36px',
        lineHeight: '36px',
        letterSpacing: '-1%',
      },
    },
    h4: {
      mobile: {
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '4%',
      },
      tablet: {
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '4%',
      },
      desktop: {
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '4%',
      },
    },
    body: {
      fontSize: '16px',
      lineHeight: '22.4px',
      letterSpacing: '1%',
    },
    legal: {
      fontSize: '12px',
      lineHeight: '16.8px',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
