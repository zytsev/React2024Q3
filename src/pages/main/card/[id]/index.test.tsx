import { screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { renderWithProviders } from '../../../../redux/util_test';
//import { BrowserRouter } from 'react-router-dom';
import Cards from '../../../../components/Cards/page';
import Card from '../../../../components/Card/card';
import Header from '../../../index';
import NotFound from '../../../notfound/index';

const example = {
  id: 5,
  raiting: 7,
  category: 'tea',
  imgClass: 'any',
  title: 'Honey raf',
  text: 'Espresso with frothed milk, cream and aromatic honey',
  price: 2,
};
const example2 = {
  id: 6,
  raiting: 4,
  category: 'coffee',
  imgClass: 'any1',
  title: 'Honey coffee',
  text: 'Coffee with frothed milk, cream and aromatic honey',
  price: 4,
};
export const handlers = [
  http.get('https://66716cbfe083e62ee43b8e10.mockapi.io/books', async () => {
    await delay(150);
    return HttpResponse.json([example]);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('App', () => {
  it('Header page renders', () => {
    renderWithProviders(<Header />);

    waitFor(() => {
      expect(screen.getByText(/Error/)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText(/tea or dessert/)).toBeInTheDocument();
      expect(screen.getByText(/Loading/)).not.toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Search');
      fireEvent.click(screen.getByText('Search'));
      expect(screen.getByText(/Loading/)).toBeInTheDocument();
      expect(screen.getByText(/Honey/)).toBeInTheDocument();
      fireEvent.click(screen.getByText(/Honey/));
      expect(screen.getByText(/The cost is not final/)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('checkbox'));
      expect(screen.getByText(/items are selected/)).toBeInTheDocument();
    });
  });
  it('NotFound page renders', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText(/Page not found/)).toBeInTheDocument();
  });
  it('Card page renders', () => {
    renderWithProviders(
      <Card
        id={1}
        raiting={2}
        category={'tea'}
        imgClass={'any'}
        title={'Honey raf'}
        text={'Espresso with frothed milk, cream and aromatic honey'}
        price={4}
      />
    );
    expect(screen.getByText(/Honey raf/)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Cards page no renders with []', () => {
    renderWithProviders(<Cards arr={[]} />);
    waitFor(() => {
      expect(screen.getByText(/Honey raf/)).not.toBeInTheDocument();
    });
  });
  it('Cards page renders', () => {
    renderWithProviders(<Cards arr={[example, example2]} />);
    expect(screen.getByText(/Honey raf/)).toBeInTheDocument();
    expect(screen.getByText(/Honey coffee/)).toBeInTheDocument();
  });
});
