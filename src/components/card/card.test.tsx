import Header from '../../pages/Header/Header';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('card component', () => {
  vi.mock('./Card', () => ({
    CardComponent: vi.fn(() => <div data-testid="card"></div>),
  }));

  const fn = vi.fn();

  it('Cards and DetailedCard renders', () => {
    render(
      <BrowserRouter>
        <Header onClick={fn}></Header>
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
