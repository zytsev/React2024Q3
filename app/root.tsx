import { Links, Meta, Scripts } from '@remix-run/react';
import { ContextProvider } from '../src/components/Context/Context';
import React from 'react';

import './App.css';
import Home from './components/home/home';

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
          <Home />
        </ContextProvider>
        <Scripts />
      </body>
    </html>
  );
}
