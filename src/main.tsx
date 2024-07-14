import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
