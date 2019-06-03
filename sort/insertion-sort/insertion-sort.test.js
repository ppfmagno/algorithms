const { insertionSort, reverserInsertionSort } = require('./insertion-sort');

const arr = [5, 3, 1, 11, 9, 7];
const arr1 = [1, -3, -1, 0, 3, -5, 5];
const arr2 = [1, 0, 0, 0];

test('Sort arr with insertion sort', () => {
  expect(insertionSort(arr)).toStrictEqual([1, 3, 5, 7, 9, 11]);
});

test('Sort arr1 with insertion sort', () => {
  expect(insertionSort(arr1)).toStrictEqual([-5, -3, -1, 0, 1, 3, 5]);
})

test('Sort arr2 with insertion sort', () => {
  expect(insertionSort(arr2)).toStrictEqual([0, 0, 0, 1]);
})

test('Sort decrescent arr with insertion sort', () => {
  expect(reverserInsertionSort(arr)).toStrictEqual([11, 9, 7, 5, 3, 1]);
});

test('Sort decrescent arr1 with insertion sort', () => {
  expect(reverserInsertionSort(arr1)).toStrictEqual([5, 3, 1, 0, -1, -3, -5]);
})

test('Sort decrescent arr2 with insertion sort', () => {
  expect(reverserInsertionSort(arr2)).toStrictEqual([1, 0, 0, 0]);
})