import searchReducer, { setSearchParam } from './searchParamSlice';

describe('searchParamSlice', () => {
  test('should return default state searchParam when passed an empty action', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result).toEqual({ searchParam: '' });
  });

  test('should added search value "example" in state with "setSearchParam" action', () => {
    const action = {
      type: setSearchParam.type,
      payload: 'example',
    };
    const result = searchReducer({ searchParam: '' }, action);
    expect(result).toStrictEqual({ searchParam: 'example' });
  });
});
