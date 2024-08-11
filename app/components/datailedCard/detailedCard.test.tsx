import DetailedCard from './detailedCard';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ContextProvider } from '../../services/context/context';

import { BrowserRouter } from 'react-router-dom';

describe('DetailedCard component', () => {
  const exampleProduct = {
    id: 5,
    raiting: 7,
    category: 'tea',
    imgClass: 'any',
    title: 'Title',
    text: 'Examle',
    price: 2,
  };
  it('showld render DetailedCard', () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <DetailedCard data={[exampleProduct]} />
        </ContextProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it(' DetailedCard not to be in Document after click "Close"', () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <DetailedCard data={[exampleProduct]} />
        </ContextProvider>
      </BrowserRouter>
    );
    waitFor(() => {
      fireEvent.click(screen.getByText('Close'));
      expect(screen.getByText('Close')).not.toBeInTheDocument();
    });
  });
});
