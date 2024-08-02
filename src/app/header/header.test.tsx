import Header from './page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('Header renders', () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
