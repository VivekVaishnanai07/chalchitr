import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './assets/css/theme';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

const root = rootElement && createRoot(rootElement);

const loading = (
  <div className='flex-center-fs bg-black'>
    <h1>Loading...</h1>
  </div>
);

root?.render(
  <Suspense fallback={loading}>
    <Router>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Suspense>
);
