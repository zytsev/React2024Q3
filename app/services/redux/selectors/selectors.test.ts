import { selectCheckCard, selectSearchParam } from './selectors';

describe('redux selectors', () => {
  it('should select product from state', () => {
    const checkCard = {
      checkedCards: [
        {
          id: 7,
          raiting: 7,
          category: 'Coffee',
          imgClass: 'list-img-wrapper3',
          title: 'Honey raf',
          text: 'Espresso with frothed milk, cream and aromatic honey',
          price: 5.5,
        },
      ],
    };
    const res = selectCheckCard({ checkCard });
    expect(res).toEqual(checkCard.checkedCards);
  });
  it('should select search string from state', () => {
    const searchParam = {
      searchParam: 'search',
    };
    const res = selectSearchParam({ searchParam });
    expect(res).toEqual(searchParam.searchParam);
  });
});
