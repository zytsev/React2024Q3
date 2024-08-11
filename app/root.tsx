import {
  Links,
  Meta,
  Scripts,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';
import { ContextProvider } from './services/context/context';
import React from 'react';
import './App.css';
import Header from './components/header/header';
import { LoaderFunctionArgs } from '@remix-run/node';

import getApi from './services/getApi/getApi';
import ListCard from './components/listcard/ListCard';
import { card } from './assets/types/types';
import StoreProvider from './services/redux/StoreProvider';

//eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  return await getApi('search', search);
}

export default function App() {
  const data = useLoaderData<typeof loader>() as card[] | null;
  const transition = useNavigation();

  const isSubmitting =
    transition.state === 'loading' || transition.state === 'submitting';
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <StoreProvider>
          <ContextProvider>
            <Header />
            {isSubmitting ? <h2>Loading...</h2> : <ListCard data={data} />}
          </ContextProvider>
        </StoreProvider>

        <Scripts />
      </body>
    </html>
  );
}
