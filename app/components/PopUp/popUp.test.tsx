import { render, screen } from '@testing-library/react';
import PopUp from './popUp';
import { vitest } from 'vitest';
import * as reduxHooks from '../../services/redux/store';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createRemixStub } from '@remix-run/testing';
import Header from '../header/header';
import { ContextProvider } from '../../services/context/context';

const exampleCard = {
  id: 7,
  raiting: 7,
  category: 'Coffee',
  imgClass: 'list-img-wrapper3',
  title: 'Honey raf',
  text: 'Espresso with frothed milk, cream and aromatic honey',
  price: 5.5,
};

vitest.mock('../../services/redux/store/store');
const mockedUseSelector = vitest.spyOn(reduxHooks, 'useAppSelector');

describe('PopUp component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  const HeaderStub = createRemixStub([
    {
      path: '/',
      Component: Header,
    },
  ]);
  const PopUpStub = createRemixStub([
    {
      path: '/',
      Component: PopUp,
    },
  ]);
  it('not should render element without  passed cards ', () => {
    store = mockStore(initialState);
    mockedUseSelector.mockReturnValue([]);
    render(
      <Provider store={store}>
        <ContextProvider>
          <HeaderStub />
        </ContextProvider>
      </Provider>
    );
    expect(screen.queryByText('items are selected')).not.toBeInTheDocument();
  });
  it('should render element with  passed 1  card ', () => {
    store = mockStore(initialState);
    mockedUseSelector.mockReturnValue([exampleCard]);
    const component = render(
      <Provider store={store}>
        <ContextProvider>
          <PopUpStub />
        </ContextProvider>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
