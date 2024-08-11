import React from 'react';
import DetailedCard from '../components/datailedCard/detailedCard';
import getApi from '../services/getApi/getApi';
import { useLoaderData } from '@remix-run/react';
import { card } from '../assets/types/types';
import type { LoaderFunctionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, 'Missing prodId param');

  const prod: card[] | string = await getApi('id', params.id);
  if (prod === 'Not found') {
    throw new Response('Not Found', { status: 404 });
  }
  return prod;
};

export default function Product() {
  const prod = useLoaderData<typeof loader>() as card[] | null;
  return <DetailedCard data={prod} />;
}
