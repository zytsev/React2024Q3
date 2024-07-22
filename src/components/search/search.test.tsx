import Search from './search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Search component', () => {
  const fn = vi.fn();
  it('Search renders', () => {
    render(
      <BrowserRouter>
        <Search onClick={fn}></Search>;
      </BrowserRouter>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Input have value', () => {
    render(
      <BrowserRouter>
        <Search onClick={fn}></Search>;
      </BrowserRouter>
    );

    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
