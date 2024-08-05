import Btn from './btn';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Btn component', () => {
  //const searchBtn = screen.getByText('Search');

  it('Btn renders', () => {
    render(<Btn text="Search"></Btn>);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
