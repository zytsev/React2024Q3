import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  const fn = vi.fn();
  it('Header renders', () => {
    render(
      <BrowserRouter>
        <Header onClick={fn}></Header>
      </BrowserRouter>
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
