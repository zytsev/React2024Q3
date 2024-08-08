export default async function getApi(params: string | null) {
  const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books?search=${params}`;
  const res = await fetch(url);
  //const result = await res.json();
  //if (result === 'Not found') return null;
  return res;

  // .then((result) => {
  //   result === 'Not found' ? setArrFromApi(null) : setArrFromApi(result);
  // });
}
