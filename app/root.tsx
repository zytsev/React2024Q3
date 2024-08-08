import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { ContextProvider } from './components/Context/Context';
import React from 'react';
import './App.css';
import Header from './components/header/header';

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <ContextProvider>
          <Header />
          <Outlet />
        </ContextProvider>
        <Scripts />
      </body>
    </html>
  );
}
