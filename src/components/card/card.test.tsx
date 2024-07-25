import Header from '../../pages/Header/Header';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('card component', () => {
  vi.mock('./Card', () => ({
    CardComponent: vi.fn(() => <div data-testid="card"></div>),
  }));
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Cards and DetailedCard renders', () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Search'));
    waitFor(() => {
      expect(screen.queryByText(/$/)).toBeInTheDocument();
      //expect(screen.queryAllByTestId('card')).toBeInTheDocument();
      fireEvent.click(screen.getAllByTestId('card')[1]);
      expect(screen.getByText('Additives')).toBeInTheDocument();
    });
  });
});
