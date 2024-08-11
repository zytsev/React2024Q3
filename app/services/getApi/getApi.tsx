//import { card } from '../../assets/types/types';

export default async function getApi(
  query: string,
  params: string | undefined | null
) {
  let search;
  params == null ? (search = '') : (search = params);
  const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books?${query}=${search}`;
  const res = await fetch(url);
  const result = await res.json();
  if (result === 'Not found') return null;
  return result;

  // .then((result) => {
  //   result === 'Not found' ? setArrFromApi(null) : setArrFromApi(result);
  // });
}
