import Search from './search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContextProvider } from '../../services/context/context';
import { createRemixStub } from '@remix-run/testing';

describe('Search component', () => {
  const SearchStub = createRemixStub([
    {
      path: '/',
      Component: Search,
    },
  ]);
  it('Search renders', async () => {
    render(
      <ContextProvider>
        <SearchStub />
      </ContextProvider>
    );

    await screen.findByText('Input name of coffee, tea or dessert:');
  });
  it('Input have value', async () => {
    render(
      <ContextProvider>
        <SearchStub />
      </ContextProvider>
    );

    expect(await screen.findByPlaceholderText('Search all...'));
  });
});
