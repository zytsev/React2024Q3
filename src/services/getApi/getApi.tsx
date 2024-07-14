export default async function getApi(params: string | null) {
  const searchBy = params ? `?search=${params}` : '';
  const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books${searchBy}`;
  const res = await fetch(url);
  const result = await res.json();
  if (result === 'Not found') return null;
  return result;

  // .then((result) => {
  //   result === 'Not found' ? setArrFromApi(null) : setArrFromApi(result);
  // });
}
