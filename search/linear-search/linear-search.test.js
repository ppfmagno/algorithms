const { linearSearch } = require('./linear-search');

const arr = [5, 3, 1, 11, 9, 7];
const arr1 = [1, -3, -1, 0, 3, -5, 5];
const arr2 = [1, 0, 0, 0];

test('Search number in arr', () => {
  expect(linearSearch(11, arr)).toStrictEqual(3);
});

test('Search number in arr1', () => {
  expect(linearSearch(-5, arr1)).toStrictEqual(5);
});

test('Search number in arr2', () => {
  expect(linearSearch(-5, arr2)).toStrictEqual(-1);
});