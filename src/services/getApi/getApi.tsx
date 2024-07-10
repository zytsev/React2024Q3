const getArrFromApi = async (searchParam: string) => {
  const searchBy = searchParam ? `?search=${searchParam}` : '';
  const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books${searchBy}`;
  await fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
};

export default getArrFromApi;
