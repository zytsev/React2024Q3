import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/errorBaundary.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
