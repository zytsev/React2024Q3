import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './components/Context/Context';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/redux/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ContextProvider>
          <Provider store={store}>
            {' '}
            <App />
          </Provider>
        </ContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
