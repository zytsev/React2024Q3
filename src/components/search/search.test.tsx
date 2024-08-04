import Search from './search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Search component', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('Search renders', () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search></Search>;
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Input have value', () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search></Search>;
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
