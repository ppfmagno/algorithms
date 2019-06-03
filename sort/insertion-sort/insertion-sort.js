function insertionSort(arr) {
  for (let j = 1; j < arr.length; j ++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  return arr;
}

function reverserInsertionSort(arr) {
  for (let j = arr.length - 1; j >= 0; j--) {
    let key = arr[j];
    let i = j + 1;
    while (i < arr.length && arr[i] > key) {
      arr[i - 1] = arr[i];
      i++;
    }
    arr[i - 1] = key;
  }
  return arr;
}

exports.insertionSort = insertionSort;
exports.reverserInsertionSort = reverserInsertionSort;