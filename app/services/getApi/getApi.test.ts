import getApi from './getApi';
import { Mock, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('getApi testing', () => {
  const mockdata = [
    {
      id: 1,
      raiting: 9,
      category: 'Coffee',
      imgClass: 'list-img-wrapper1',
      title: 'Irish coffee',
      text: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
      price: 7,
    },
    {
      id: 2,
      raiting: 5,
      category: 'Coffee',
      imgClass: 'list-img-wrapper2',
      title: 'Kahlua coffee',
      text: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
      price: 7,
    },
  ];
  it('getApi return correct data', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockdata) })
    ) as Mock;
    const data = await getApi('');
    expect(data).toEqual(mockdata);
  });

  it('check if mock function have benn called', async () => {
    const getApi = vi.fn();
    await getApi('');
    expect(getApi).toHaveBeenCalled();
  });
  it('test a Promise with matchers', async () => {
    const myPromise = Promise.resolve(mockdata);
    await expect(myPromise).resolves.toBe(mockdata);
  });
});
