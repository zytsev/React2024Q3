import { render, screen } from '@testing-library/react';
import App from '../../../App';
import { vitest } from 'vitest';
import * as reduxHooks from '../../../redux/store';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

vitest.mock('../../services/redux/store/store');
const mockedUseSelector = vitest.spyOn(reduxHooks, 'useAppSelector');

describe('Main component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  it('not should render Main element first App render ', async () => {
    store = mockStore(initialState);
    mockedUseSelector.mockReturnValue([]);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.queryByText('Select')).not.toBeInTheDocument();
  });
});
