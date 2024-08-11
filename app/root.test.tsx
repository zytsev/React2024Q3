import { loader } from './root';
const correctObject = {
  id: '01',
  raiting: 9,
  category: 'Coffee',
  imgClass: 'list-img-wrapper1',
  title: 'Irish coffee',
  text: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
  price: 7,
};

describe('root page', () => {
  it('loader should return null when search value (www) incorrect', async () => {
    const request = new Request(
      'https://66716cbfe083e62ee43b8e10.mockapi.io/books?search=www'
    );
    const response = await loader({ request, context: {}, params: {} });
    expect(response).toEqual(null);
  });
  it('loader should return object when search value(Irish coffee) = name object', async () => {
    const request = new Request(
      'https://66716cbfe083e62ee43b8e10.mockapi.io/books?search=Irish coffee'
    );
    const response = await loader({ request, context: {}, params: {} });
    expect(response[0]).toEqual(correctObject);
  });
});
