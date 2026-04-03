import React from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './GlobalStyles';
import App from './App';

const container = document.getElementById('root')!;
createRoot(container).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
