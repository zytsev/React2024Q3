import Header from './header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContextProvider } from '../../services/context/context';
import { createRemixStub } from '@remix-run/testing';

describe('Header component', () => {
  const HeaderStub = createRemixStub([
    {
      path: '/',
      Component: Header,
    },
  ]);
  it('Header renders', () => {
    render(
      <ContextProvider>
        <HeaderStub />
      </ContextProvider>
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
