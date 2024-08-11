import checkCardReducer, {
  setCheckedCards,
  clearAllCheckedCards,
} from './checkCardSlice';

describe('checkCardSlice', () => {
  const exampleCard = {
    id: 7,
    raiting: 7,
    category: 'Coffee',
    imgClass: 'list-img-wrapper3',
    title: 'Honey raf',
    text: 'Espresso with frothed milk, cream and aromatic honey',
    price: 5.5,
  };
  test('should return default state checkedCards when passed an empty action', () => {
    const result = checkCardReducer(undefined, { type: '' });
    expect(result).toEqual({ checkedCards: [] });
  });
  const action = {
    type: setCheckedCards.type,
    payload: exampleCard,
  };
  test('should added selected card in state with "setCheckedCards" action', () => {
    const result = checkCardReducer({ checkedCards: [] }, action);
    expect(result.checkedCards[0].category).toBe('Coffee');
  });
  test('should remove card from state with "setCheckedCards" action, if she has in state', () => {
    const result = checkCardReducer({ checkedCards: [exampleCard] }, action);
    expect(result.checkedCards.length).toBe(0);
  });
  test('should remove all card with "clearAllCheckedCards" action', () => {
    const removeaction = { type: clearAllCheckedCards.type };
    const result = checkCardReducer(
      { checkedCards: [exampleCard] },
      removeaction
    );
    expect(result).toEqual({ checkedCards: [] });
  });
});
