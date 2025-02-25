import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';
import 'styles/application.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
