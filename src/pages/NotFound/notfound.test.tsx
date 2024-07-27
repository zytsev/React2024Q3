import { render } from '@testing-library/react';
import NotFound from './NotFound';

import { vitest } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

vitest.mock('../../services/redux/store/store');

describe('NotFound component', () => {
  it('NotFound component rendered ', () => {
    const component = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
