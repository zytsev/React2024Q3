import { render } from '@testing-library/react';
import NotFound from '../../notfound/page';

import { vitest } from 'vitest';

vitest.mock('../../services/redux/store/store');

describe('NotFound component', () => {
  it('NotFound component rendered ', () => {
    const component = render(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
