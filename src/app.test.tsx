import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Main page renders', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Search'));
    expect(await screen.findAllByText(/$/));
  });
  it('Pagination page renders', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Search'));
    expect(await screen.findAllByText('Show on page:'));
  });
  it('Error page renders', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Error'));
    expect(screen.getByText('Page not found :-/'));
  });
});
