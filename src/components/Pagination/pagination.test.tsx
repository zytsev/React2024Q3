import { render } from '@testing-library/react';
import { Pagination } from './Paginatin';

import { vitest } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const exampleCard = {
  id: 7,
  raiting: 7,
  category: 'Coffee',
  imgClass: 'list-img-wrapper3',
  title: 'Honey raf',
  text: 'Espresso with frothed milk, cream and aromatic honey',
  price: 5.5,
};

vitest.mock('../../services/redux/store/store');

describe('Pagination component', () => {
  it('should render element with  passed 1  card ', () => {
    const component = render(
      <BrowserRouter>
        <Pagination arrFromApi={[exampleCard]} />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
