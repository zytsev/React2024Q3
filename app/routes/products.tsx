import React from 'react';

import ListCard from '../components/listcard/ListCard';
//import PagintPopup from '../../src/components/pagelayout/PagintPopup';
import { Outlet, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { useCoffee } from '../components/Context/useCoffee';
import Pagination from '../components/pagination/paginatin';
//import { card } from '../../src/assets/types/types';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const res = await fetch('https://66716cbfe083e62ee43b8e10.mockapi.io/books');
  return json(await res.json());
}

export default function Products() {
  const { isDark } = useCoffee();
  const data = useLoaderData<typeof loader>();

  return (
    <section className={`${isDark && 'backgr-dark'}`}>
      <ListCard data={data} />
      <Pagination arrFromApi={data} />
      <Outlet />
    </section>
  );
}
