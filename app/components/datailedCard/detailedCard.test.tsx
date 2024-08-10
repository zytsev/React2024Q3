import DetailedCard from './detailedCard';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as Hooks from 'react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('react');
const mockedContext = vi.spyOn(Hooks, 'useContext');

describe('DetailedCard component', () => {
  it('showld render DetailedCard', () => {
    mockedContext.mockResolvedValue({
      checkedProduct: {
        id: 5,
        raiting: 7,
        category: 'tea',
        imgClass: 'any',
        title: 'Title',
        text: 'Examle',
        price: 2,
      },
    });

    render(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>
    );
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it(' DetailedCard not to be in Document after click "Close"', () => {
    render(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>
    );
    waitFor(() => {
      fireEvent.click(screen.getByText('Close'));
      expect(screen.getByText('Close')).not.toBeInTheDocument();
    });
  });
});
